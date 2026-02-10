import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 glass-nav"
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo with Icon */}
                    <motion.a
                        href="#home"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 group"
                    >
                        {/* Logo Icon */}
                        <div className="relative">
                            <img
                                src="/logo.svg"
                                alt="Logo"
                                className="w-10 h-10 transition-transform duration-300 group-hover:rotate-180"
                            />
                            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Brand Name */}
                        <div className="flex flex-col">
                            <span className="text-xl font-bold gradient-text">LITHIRA RANSIKA</span>
                            <span className="text-xs text-gray-400 font-mono">Full Stack Dev</span>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>

                                {/* Hover glow effect */}
                                <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
                            </motion.a>
                        ))}

                        {/* CTA Button */}
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="ml-4 px-6 py-2 bg-gradient-to-r from-primary to-accent-cyan text-dark font-semibold rounded-lg relative overflow-hidden group"
                        >
                            <span className="relative z-10">Let's Talk</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 space-y-2 pb-4"
                    >
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="block text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 py-3 px-4 rounded-lg border border-transparent hover:border-primary/30"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: navItems.length * 0.05 }}
                            className="block btn-primary text-center mt-4"
                        >
                            Let's Talk
                        </motion.a>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
