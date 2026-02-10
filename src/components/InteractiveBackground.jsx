import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [particles, setParticles] = useState([]);
    const [geometricShapes, setGeometricShapes] = useState([]);

    useEffect(() => {
        // Create initial particles
        const initialParticles = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 4 + 2,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
        }));
        setParticles(initialParticles);

        // Create geometric shapes
        const shapes = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 60 + 40,
            rotation: Math.random() * 360,
            type: ['hexagon', 'square', 'triangle'][Math.floor(Math.random() * 3)],
        }));
        setGeometricShapes(shapes);

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const getShapePath = (type) => {
        switch (type) {
            case 'hexagon':
                return 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
            case 'square':
                return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
            case 'triangle':
                return 'polygon(50% 0%, 100% 100%, 0% 100%)';
            default:
                return 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
        }
    };

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Gradient orbs that follow cursor */}
            <motion.div
                className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
                animate={{
                    x: mousePosition.x - 192,
                    y: mousePosition.y - 192,
                }}
                transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 100,
                }}
                style={{
                    background: 'radial-gradient(circle, rgba(0, 217, 255, 0.4) 0%, transparent 70%)',
                }}
            />

            <motion.div
                className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
                animate={{
                    x: mousePosition.x - 160,
                    y: mousePosition.y - 160,
                }}
                transition={{
                    type: 'spring',
                    damping: 40,
                    stiffness: 80,
                    delay: 0.1,
                }}
                style={{
                    background: 'radial-gradient(circle, rgba(157, 0, 255, 0.4) 0%, transparent 70%)',
                }}
            />

            {/* Floating geometric shapes */}
            {geometricShapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className="absolute"
                    style={{
                        width: shape.size,
                        height: shape.size,
                    }}
                    animate={{
                        x: [shape.x, shape.x + 50, shape.x - 50, shape.x],
                        y: [shape.y, shape.y - 50, shape.y + 50, shape.y],
                        rotate: [shape.rotation, shape.rotation + 360],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            border: '2px solid rgba(0, 217, 255, 0.3)',
                            clipPath: getShapePath(shape.type),
                            boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
                        }}
                    />
                </motion.div>
            ))}

            {/* Energy waves */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.3, 0.1],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                <div className="w-full h-full border-2 border-primary/20 rounded-full" />
            </motion.div>

            <motion.div
                className="absolute bottom-1/4 right-1/4 w-48 h-48"
                animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.1, 0.25, 0.1],
                    rotate: [360, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                <div className="w-full h-full border-2 border-secondary/20 rounded-full" />
            </motion.div>

            {/* Floating particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        background: 'linear-gradient(135deg, #00D9FF, #9D00FF)',
                        boxShadow: '0 0 10px rgba(0, 217, 255, 0.5)',
                    }}
                    animate={{
                        x: [
                            particle.x,
                            particle.x + particle.speedX * 200,
                            particle.x,
                        ],
                        y: [
                            particle.y,
                            particle.y + particle.speedY * 200,
                            particle.y,
                        ],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Pulsing connection nodes */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`node-${i}`}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                        background: 'rgba(0, 217, 255, 0.6)',
                        boxShadow: '0 0 15px rgba(0, 217, 255, 0.8)',
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Grid lines that react to cursor */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
                <defs>
                    <pattern
                        id="grid"
                        width="50"
                        height="50"
                        patternUnits="userSpaceOnUse"
                    >
                        <motion.path
                            d="M 50 0 L 0 0 0 50"
                            fill="none"
                            stroke="rgba(0, 217, 255, 0.3)"
                            strokeWidth="0.5"
                            animate={{
                                strokeWidth: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Scanlines */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 217, 255, 0.1) 2px, rgba(0, 217, 255, 0.1) 4px)',
                    }}
                />
            </div>

            {/* Animated diagonal lines */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(0, 217, 255, 0.05) 100px, rgba(0, 217, 255, 0.05) 101px)',
                }}
                animate={{
                    backgroundPosition: ['0px 0px', '100px 100px'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
        </div>
    );
};

export default InteractiveBackground;
