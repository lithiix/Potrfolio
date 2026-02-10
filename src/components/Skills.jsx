import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React.js', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'Tailwind CSS', level: 88 },
                { name: 'HTML/CSS', level: 92 },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Express.js', level: 80 },
                { name: 'MongoDB', level: 75 },
                { name: 'REST APIs', level: 88 },
            ],
        },
        {
            title: 'IoT & Hardware',
            skills: [
                { name: 'Arduino', level: 82 },
                { name: 'ESP32/ESP8266', level: 78 },
                { name: 'Sensors', level: 80 },
                { name: 'MQTT', level: 75 },
            ],
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'Git/GitHub', level: 85 },
                { name: 'VS Code', level: 90 },
                { name: 'Figma', level: 70 },
                { name: 'Firebase', level: 75 },
            ],
        },
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="gradient-text">Arsenal</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit of technologies and frameworks I use to build exceptional digital experiences
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className="glass-card p-6 hover:glow-border transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-300">{skill.name}</span>
                                            <span className="text-sm text-primary font-mono">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: categoryIndex * 0.1 + skillIndex * 0.1,
                                                    duration: 1,
                                                    ease: "easeOut"
                                                }}
                                                className="h-full bg-gradient-to-r from-primary to-accent-cyan rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Tech Stack Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 mb-6 font-mono text-sm">// TECHNOLOGIES I WORK WITH</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'React', 'Node.js', 'MongoDB', 'Express', 'Tailwind',
                            'Arduino', 'Firebase', 'Git', 'Figma', 'VS Code'
                        ].map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="px-6 py-3 glass-card text-sm font-semibold text-gray-300 hover:text-primary transition-colors"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
