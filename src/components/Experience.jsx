import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const timeline = [
        {
            year: '2024',
            title: 'Full Stack Developer',
            company: 'Freelance',
            location: 'Remote',
            description: 'Building custom web applications and IoT solutions for clients worldwide. Specializing in React, Node.js, and hardware integration.',
            color: 'from-primary to-accent-cyan',
        },
        {
            year: '2023',
            title: 'IoT Developer',
            company: 'Smart Agro Project',
            location: 'Sri Lanka',
            description: 'Developed an intelligent agricultural monitoring system with automated irrigation control and real-time sensor data visualization.',
            color: 'from-accent-purple to-secondary',
        },
        {
            year: '2022',
            title: 'Web Developer',
            company: 'Leo Club',
            location: 'Sri Lanka',
            description: 'Created modern, responsive website with event management system and member portal. Improved user engagement by 150%.',
            color: 'from-accent-cyan to-primary',
        },
        {
            year: '2021',
            title: 'Started Coding Journey',
            company: 'Self-Taught',
            location: 'Sri Lanka',
            description: 'Began learning web development and programming. Completed multiple online courses and built personal projects.',
            color: 'from-secondary to-accent-purple',
        },
    ];

    return (
        <section id="experience" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        History & <span className="gradient-text">Milestones</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My professional journey and key achievements in tech
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent-purple to-secondary hidden md:block"></div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="glass-card p-6 hover:glow-border transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                                <p className="text-primary font-semibold">{item.company}</p>
                                            </div>
                                            <div className={`px-4 py-1 bg-gradient-to-r ${item.color} rounded-full text-dark font-bold text-sm`}>
                                                {item.year}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                                            <div className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                <span>{item.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Center Circle */}
                                <div className="hidden md:block relative z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.3 }}
                                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}
                                    >
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r animate-ping opacity-75"></div>
                                    </motion.div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
