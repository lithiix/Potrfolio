import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorFollower = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [trail, setTrail] = useState([]);
    const trailIdRef = useRef(0);

    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    useEffect(() => {
        let lastTime = Date.now();

        const moveCursor = (e) => {
            const currentTime = Date.now();

            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Create trail effect
            if (currentTime - lastTime > 30) {
                const newTrail = {
                    id: trailIdRef.current++,
                    x: e.clientX,
                    y: e.clientY,
                };

                setTrail(prev => [...prev.slice(-8), newTrail]);
                lastTime = currentTime;
            }

            // Check for interactive elements
            const target = e.target;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('glass-card') ||
                target.classList.contains('btn-primary') ||
                target.classList.contains('btn-outline');

            setIsHovering(isInteractive);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Trail particles */}
            {trail.map((point, index) => (
                <motion.div
                    key={point.id}
                    className="fixed top-0 left-0 pointer-events-none z-[9997]"
                    initial={{
                        x: point.x,
                        y: point.y,
                        scale: 1,
                        opacity: 0.6,
                    }}
                    animate={{
                        scale: 0,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: 'easeOut',
                    }}
                    style={{
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                >
                    <div
                        className="w-2 h-2"
                        style={{
                            background: `linear-gradient(135deg, #00D9FF, #9D00FF)`,
                            boxShadow: `0 0 ${8 - index}px rgba(0, 217, 255, ${0.8 - index * 0.1})`,
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        }}
                    />
                </motion.div>
            ))}

            {/* Main cursor - Hexagon */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 1.5 : 1,
                        rotate: isHovering ? 180 : 0,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                    }}
                    className="relative"
                >
                    {/* Outer hexagon */}
                    <div
                        className="w-8 h-8"
                        style={{
                            background: 'transparent',
                            border: '2px solid #00D9FF',
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                            boxShadow: '0 0 20px rgba(0, 217, 255, 0.8), inset 0 0 10px rgba(0, 217, 255, 0.4)',
                            animation: 'pulse 2s ease-in-out infinite',
                        }}
                    />

                    {/* Center dot */}
                    <div
                        className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full"
                        style={{
                            transform: 'translate(-50%, -50%)',
                            boxShadow: '0 0 8px rgba(255, 255, 255, 1)',
                        }}
                    />

                    {/* Corner accents */}
                    <div
                        className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-primary"
                        style={{
                            opacity: isHovering ? 1 : 0,
                            transition: 'opacity 0.3s',
                        }}
                    />
                    <div
                        className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-secondary"
                        style={{
                            opacity: isHovering ? 1 : 0,
                            transition: 'opacity 0.3s',
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Outer ring with glitch effect */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 1.8 : 1.2,
                        opacity: isHovering ? 0.8 : 0.4,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                    className="w-12 h-12 border border-primary/50 rounded-full"
                    style={{
                        boxShadow: '0 0 15px rgba(0, 217, 255, 0.4)',
                        animation: 'glitch 3s ease-in-out infinite',
                    }}
                />
            </motion.div>

            {/* Scanline effect */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9996]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        scaleY: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                    style={{
                        boxShadow: '0 0 10px rgba(0, 217, 255, 0.6)',
                    }}
                />
            </motion.div>

            <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0, 0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(2px, -2px);
          }
          60% {
            transform: translate(-2px, -2px);
          }
          80% {
            transform: translate(2px, 2px);
          }
        }
      `}</style>
        </>
    );
};

export default CursorFollower;
