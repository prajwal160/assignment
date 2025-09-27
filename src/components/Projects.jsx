import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiArrowUpRight } from 'react-icons/fi';
import { projects } from "../data/projects";

let projectsData = [];
try {
    projectsData = projects || [];
} catch (error) {
    projectsData = [
        {
            id: 1,
            title: "StudyNotion EdTech Platform",
            desc: "A comprehensive EdTech platform built with MERN stack featuring course creation, learning management, and secure payment integration.",
            image: "https://via.placeholder.com/400x200/6366f1/ffffff?text=StudyNotion",
            tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Razorpay"],
            repo: "#",
            live: "#"
        },
        {
            id: 2,
            title: "Stack Overflow Clone",
            desc: "A fully responsive Stack Overflow clone with comprehensive Q&A functionality and user management system.",
            image: "https://via.placeholder.com/400x200/f97316/ffffff?text=Stack+Overflow",
            tech: ["React", "MongoDB", "JavaScript", "HTML", "CSS"],
            repo: "#",
            live: "#"
        }
    ];
}

export default function Projects() {
    const shouldReduce = useReducedMotion();

    // Define gradient themes that rotate through projects
    const gradientThemes = [
        "from-blue-600 via-purple-600 to-cyan-600",
        "from-orange-500 via-red-500 to-pink-500",
        "from-green-500 via-teal-500 to-blue-500",
        "from-purple-500 via-pink-500 to-red-500",
        "from-cyan-500 via-blue-500 to-indigo-500",
        "from-yellow-500 via-orange-500 to-red-500"
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        hover: { y: -10, transition: { duration: 0.3 } }
    };

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-black/20">
            {/* Section Header */}
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                    Featured Projects
                </h2>
                <p className="text-[var(--muted)] text-xl max-w-2xl mx-auto">
                    Explore my latest work showcasing full-stack development expertise and modern web technologies
                </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                        <p className="text-[var(--muted)] text-lg">No projects found. Please check your data file.</p>
                    </div>
                ) : (
                    projectsData.map((project, index) => {
                        const gradient = gradientThemes[index % gradientThemes.length];
                        
                        const loopAnim = shouldReduce ? {} : {
                            scale: [1, 1.02, 1],
                            transition: {
                                duration: 4 + index * 0.5,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 3
                            }
                        };

                        return (
                            <motion.div
                                key={project.id}
                                className="group relative"
                                variants={cardVariants}
                                initial="hidden"
                                animate={{ opacity: 1, y: 0, ...loopAnim }}
                                whileHover="hover"
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Gradient Border Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                                
                                <div className="relative bg-[var(--card)]/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden h-full">
                                    {/* Project Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img 
                                            src={project.image || "https://via.placeholder.com/400x200/6366f1/ffffff?text=Project"} 
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Floating Action Button */}
                                        <motion.div
                                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            whileHover={{ rotate: 45 }}
                                        >
                                            <FiArrowUpRight size={24} className="text-white bg-black/50 rounded-full p-1 backdrop-blur-sm" />
                                        </motion.div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6">
                                        {/* Project Title */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                                                    {project.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        <div className="mb-6">
                                            <div className="flex items-center mb-3">
                                                <FiCode className="text-cyan-400 mr-2" size={16} />
                                                <span className="text-xs font-semibold text-[var(--muted)]">Technologies</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {(project.tech || []).map((tech, techIndex) => (
                                                    <motion.span
                                                        key={techIndex}
                                                        className={`px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 text-gray-200 border border-white/10 hover:border-white/20 transition-colors`}
                                                        whileHover={{ scale: 1.05 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <motion.a
                                                href={project.repo || "#"}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 text-sm font-medium"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <FiGithub size={16} />
                                                <span>GitHub</span>
                                            </motion.a>
                                            
                                            <motion.a
                                                href={project.live || "#"}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-gradient-to-r ${gradient} hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-sm font-medium text-white`}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <FiExternalLink size={16} />
                                                <span>Live Demo</span>
                                            </motion.a>
                                        </div>
                                    </div>

                                    {/* Bottom Gradient Line */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
                                </div>
                            </motion.div>
                        );
                    })
                )}
            </div>

            {/* Bottom CTA */}
            {/* <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    View All Projects
                </motion.button>
            </motion.div> */}
        </section>
    );
}