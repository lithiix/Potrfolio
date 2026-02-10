import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-lighter border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm flex items-center gap-2"
                    >
                        <span>© {currentYear} Lithira Ransika. Made with</span>
                        <Heart className="text-primary w-4 h-4 animate-pulse" />
                        <span>and React</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex gap-6 text-sm"
                    >
                        <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
                            Home
                        </a>
                        <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                            About
                        </a>
                        <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">
                            Projects
                        </a>
                        <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                            Contact
                        </a>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
