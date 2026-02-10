import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-primary font-mono text-lg"
                        >
                            &lt;Hello World /&gt;
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold"
                        >
                            LITHIRA
                            <br />
                            <span className="gradient-text">RANSIKA</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-400 font-mono"
                        >
                            Full Stack Developer | Flutter Developer | Tech Innovator
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-gray-300 text-lg leading-relaxed"
                        >
                            Crafting innovative solutions at the intersection of web development and Flutter.
                            Passionate about building scalable applications that make a difference.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a href="#projects" className="btn-primary">
                                View My Work
                            </a>
                            <a href="#contact" className="btn-outline">
                                Get In Touch
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-4 pt-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                href="https://github.com/lithiix"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass-card hover:glow-border transition-all duration-300"
                            >
                                <Github className="text-primary" size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                href="https://www.linkedin.com/in/lithira-ransika-43b237194"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass-card hover:glow-border transition-all duration-300"
                            >
                                <Linkedin className="text-primary" size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                href="mailto:lithiraransika12@gmail.com"
                                className="p-3 glass-card hover:glow-border transition-all duration-300"
                            >
                                <Mail className="text-primary" size={24} />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - 3D Card Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative glass-card p-8 glow-border">
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="space-y-4"
                            >
                                <div className="text-primary font-mono text-sm mb-4">// IDENTIFICATION</div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-500">Name:</span>
                                        <span className="text-white font-semibold">Lithira Ransika</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-500">Role:</span>
                                        <span className="text-white font-semibold">Full Stack Developer</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-500">Location:</span>
                                        <span className="text-white font-semibold">Sri Lanka</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-500">Status:</span>
                                        <span className="text-green-400 font-semibold flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                            Available for Work
                                        </span>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-primary">5+</div>
                                            <div className="text-xs text-gray-400">Projects</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-primary">3+</div>
                                            <div className="text-xs text-gray-400">Years Exp</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-primary">10+</div>
                                            <div className="text-xs text-gray-400">Technologies</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-purple/20 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
