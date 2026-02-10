import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorFollower = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorVariant, setCursorVariant] = useState('default');
    const cursorRef = useRef(null);

    // Motion values for smooth cursor movement
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Spring configuration for smooth trailing
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            const target = e.target;

            // Check if hovering over interactive elements
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('glass-card') ||
                target.classList.contains('btn-primary') ||
                target.classList.contains('btn-outline');

            if (isInteractive) {
                // Magnetic effect - pull cursor towards element center
                const rect = target.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Calculate distance from cursor to center
                const distanceX = centerX - e.clientX;
                const distanceY = centerY - e.clientY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

                // Apply magnetic pull if within range
                if (distance < 100) {
                    const pullStrength = 0.3;
                    cursorX.set(e.clientX + distanceX * pullStrength);
                    cursorY.set(e.clientY + distanceY * pullStrength);
                } else {
                    cursorX.set(e.clientX);
                    cursorY.set(e.clientY);
                }

                setIsHovering(true);
                setCursorVariant('hover');
            } else {
                cursorX.set(e.clientX);
                cursorY.set(e.clientY);
                setIsHovering(false);
                setCursorVariant('default');
            }
        };

        const handleMouseDown = () => {
            setCursorVariant('click');
        };

        const handleMouseUp = () => {
            setCursorVariant(isHovering ? 'hover' : 'default');
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [cursorX, cursorY, isHovering]);

    const variants = {
        default: {
            scale: 1,
            backgroundColor: 'rgba(0, 217, 255, 0.8)',
            border: '2px solid rgba(0, 217, 255, 0.4)',
        },
        hover: {
            scale: 1.5,
            backgroundColor: 'rgba(0, 217, 255, 0.2)',
            border: '2px solid rgba(0, 217, 255, 1)',
        },
        click: {
            scale: 0.8,
            backgroundColor: 'rgba(0, 217, 255, 1)',
            border: '2px solid rgba(0, 217, 255, 1)',
        },
    };

    return (
        <>
            {/* Main cursor */}
            <motion.div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    className="w-8 h-8 rounded-full"
                    variants={variants}
                    animate={cursorVariant}
                    transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 28,
                    }}
                    style={{
                        boxShadow: '0 0 20px rgba(0, 217, 255, 0.6)',
                    }}
                />
            </motion.div>

            {/* Cursor dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[10000]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    className="w-1 h-1 bg-white rounded-full"
                    animate={{
                        scale: cursorVariant === 'click' ? 0 : 1,
                    }}
                    style={{
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                    }}
                />
            </motion.div>

            {/* Trailing particles */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-screen"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 50,
                    damping: 15,
                }}
            >
                <motion.div
                    className="w-16 h-16 rounded-full border border-primary/30"
                    animate={{
                        scale: isHovering ? 1.2 : 1,
                        opacity: isHovering ? 0.6 : 0.3,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                />
            </motion.div>
        </>
    );
};

export default CursorFollower;
