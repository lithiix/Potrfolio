import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Code className="w-8 h-8" />,
            title: 'Clean Code',
            description: 'Writing maintainable, scalable, and efficient code following best practices.',
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: 'Problem Solver',
            description: 'Turning complex challenges into elegant solutions through creative thinking.',
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: 'Fast Learner',
            description: 'Constantly adapting to new technologies and industry trends.',
        },
    ];

    return (
        <section id="about" className="section-padding bg-dark-lighter/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="glass-card p-8 glow-border">
                            <div className="space-y-4">
                                <div className="text-primary font-mono text-sm">// WHO AM I?</div>
                                <p className="text-gray-300 leading-relaxed">
                                    I'm a passionate Full Stack Developer with a strong focus on creating innovative
                                    web applications and IoT solutions. With expertise in modern frameworks and a
                                    keen eye for design, I transform ideas into reality.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    My journey in tech started with curiosity and evolved into a commitment to
                                    building solutions that make a real impact. I specialize in React, Node.js,
                                    and IoT integration, always pushing the boundaries of what's possible.
                                </p>
                                <div className="pt-4 border-t border-white/10">
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm">
                                            React.js
                                        </span>
                                        <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm">
                                            Node.js
                                        </span>
                                        <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm">
                                            IoT
                                        </span>
                                        <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm">
                                            MongoDB
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                    </motion.div>

                    {/* Right - Features */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                className="glass-card p-6 hover:glow-border transition-all duration-300"
                            >
                                <div className="flex gap-4">
                                    <div className="text-primary flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
