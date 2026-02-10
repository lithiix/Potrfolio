import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'IoT Controller Mobile App',
            description: 'A comprehensive mobile application for controlling and monitoring IoT devices in real-time. Features include device management, data visualization, and automated scheduling.',
            tech: ['React Native', 'Node.js', 'MQTT', 'MongoDB'],
            image: '/project1.jpg',
            github: '#',
            demo: '#',
            gradient: 'from-primary to-accent-cyan',
        },
        {
            title: 'Smart Agro System',
            description: 'An intelligent agricultural monitoring system using IoT sensors to track soil moisture, temperature, and humidity. Automated irrigation control with real-time alerts.',
            tech: ['Arduino', 'ESP32', 'React', 'Firebase'],
            image: '/project2.jpg',
            github: '#',
            demo: '#',
            gradient: 'from-accent-purple to-secondary',
        },
        {
            title: 'Leo Club Website',
            description: 'Modern, responsive website for a Leo Club featuring event management, member portal, and gallery. Built with focus on user experience and accessibility.',
            tech: ['React', 'Tailwind CSS', 'Node.js', 'Express'],
            image: '/project3.jpg',
            github: '#',
            demo: '#',
            gradient: 'from-accent-cyan to-primary',
        },
    ];

    return (
        <section id="projects" className="section-padding bg-dark-lighter/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Deployed <span className="gradient-text">Nodes</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Showcasing innovative projects that blend creativity with cutting-edge technology
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="glass-card overflow-hidden group"
                        >
                            {/* Project Image/Placeholder */}
                            <div className="relative h-48 bg-gradient-to-br overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-6xl font-bold text-white/10">{index + 1}</div>
                                </div>
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <motion.a
                                        href={project.github}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors"
                                    >
                                        <Github size={20} />
                                    </motion.a>
                                    <motion.a
                                        href={project.demo}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </motion.a>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-mono"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Gradient Line */}
                            <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <a href="#contact" className="btn-outline">
                        Want to See More? Let's Talk
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
