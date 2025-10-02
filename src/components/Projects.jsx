// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { FiGithub, FiExternalLink, FiCode, FiStar, FiArrowUpRight } from 'react-icons/fi';
// import { projects } from "../data/projects";

// let projectsData = [];
// try {
//     projectsData = projects || [];
// } catch (error) {
//     projectsData = [
//         {
//             id: 1,
//             title: "StudyNotion EdTech Platform",
//             desc: "A comprehensive EdTech platform built with MERN stack featuring course creation, learning management, and secure payment integration.",
//             image: "https://via.placeholder.com/400x200/6366f1/ffffff?text=StudyNotion",
//             tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Razorpay"],
//             features: [
//                 "Developed a full-featured EdTech platform using the MERN stack",
//                 "Engineered secure RESTful APIs for authentication and payment integration",
//                 "Leveraged MongoDB Atlas and Cloudinary for scalable storage"
//             ],
//             repo: "#",
//             live: "#"
//         },
//         {
//             id: 2,
//             title: "Stack Overflow Clone",
//             desc: "A fully responsive Stack Overflow clone with comprehensive Q&A functionality and user management system.",
//             image: "https://via.placeholder.com/400x200/f97316/ffffff?text=Stack+Overflow",
//             tech: ["React", "MongoDB", "JavaScript", "HTML", "CSS"],
//             features: [
//                 "Executed a fully responsive Stack Overflow clone with key features",
//                 "Configured efficient authentication system with seamless functionality",
//                 "Facilitated posting, deletion, and sharing of questions/answers"
//             ],
//             repo: "#",
//             live: "#"
//         }
//     ];
// }

// export default function Projects() {
//     const shouldReduce = useReducedMotion();

//     // Define gradient themes that rotate through projects
//     const gradientThemes = [
//         "from-blue-600 via-purple-600 to-cyan-600",
//         "from-orange-500 via-red-500 to-pink-500",
//         "from-green-500 via-teal-500 to-blue-500",
//         "from-purple-500 via-pink-500 to-red-500",
//         "from-cyan-500 via-blue-500 to-indigo-500",
//         "from-yellow-500 via-orange-500 to-red-500"
//     ];

//     const cardVariants = {
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0 },
//         hover: { y: -10, transition: { duration: 0.3 } }
//     };

//     return (
//         <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-black/20">
//             {/* Section Header */}
//             <motion.div 
//                 className="text-center mb-16"
//                 initial={{ opacity: 0, y: -30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//             >
//                 <h2 className="text-5xl leading-normal font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
//                     Featured Projects
//                 </h2>
//                 <p className="text-[var(--muted)] text-xl max-w-2xl mx-auto">
//                     Explore my latest work showcasing full-stack development expertise and modern web technologies
//                 </p>
//             </motion.div>

//             {/* Projects Grid - Changed to single column for horizontal cards */}
//             <div className="max-w-6xl mx-auto space-y-8">
//                 {projectsData.length === 0 ? (
//                     <div className="text-center py-12">
//                         <p className="text-[var(--muted)] text-lg">No projects found. Please check your data file.</p>
//                     </div>
//                 ) : (
//                     projectsData.map((project, index) => {
//                         const gradient = gradientThemes[index % gradientThemes.length];

//                         const loopAnim = shouldReduce ? {} : {
//                             scale: [1, 1.01, 1],
//                             transition: {
//                                 duration: 6 + index * 0.5,
//                                 ease: "easeInOut",
//                                 repeat: Infinity,
//                                 repeatDelay: 1
//                             }
//                         };

//                         return (
//                             <motion.div
//                                 key={project.id}
//                                 className="group relative bg-[var(--card)]/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
//                                 // variants={cardVariants}
//                                 initial="hidden"
//                                 animate={{ opacity: 1, y: 0, ...loopAnim }}
//                                 whileHover={{ scale: 1.02 }}
//                                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                             >
//                                 {/* Gradient Border Effect */}
//                                 <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>

//                                 <div className="relative flex flex-col lg:flex-row h-full min-h-[400px]">
//                                     {/* Image Section */}
//                                     <div className="lg:w-96 h-64 lg:h-auto relative overflow-hidden flex-shrink-0">
//                                         <img 
//                                             src={project.image} 
//                                             alt={project.title}
//                                             className="w-sm h-sm object-cover transition-transform duration-500 group-hover:scale-110"
//                                         />
//                                         <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30"></div>

//                                         {/* Project Icon/Number */}
//                                         <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center text-xl font-bold text-white`}>
//                                             {String(index + 1).padStart(2, '0')}
//                                         </div>

//                                         {/* Floating Action Button */}
//                                         <motion.div
//                                             className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                                             whileHover={{ rotate: 45 }}
//                                         >
//                                             <FiArrowUpRight size={24} className="text-white bg-black/50 rounded-full p-1 backdrop-blur-sm" />
//                                         </motion.div>
//                                     </div>

//                                     {/* Content Section */}
//                                     <div className="flex-1 p-8 flex flex-col justify-between">
//                                         <div>
//                                             {/* Project Title and Description */}
//                                             <div className="mb-6">
//                                                 <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
//                                                     {project.title}
//                                                 </h3>
//                                                 <p className="text-[var(--muted)] leading-relaxed">
//                                                     {project.desc}
//                                                 </p>
//                                             </div>

//                                             {/* Key Features (if available) */}
//                                             {project.features && project.features.length > 0 && (
//                                                 <div className="mb-6">
//                                                     <div className="flex items-center mb-4">
//                                                         <FiStar className="text-cyan-400 mr-2" size={18} />
//                                                         <span className="text-sm font-semibold text-[var(--muted)]">Key Highlights</span>
//                                                     </div>
//                                                     <div className="space-y-3">
//                                                         {project.features.slice(0, 3).map((feature, featureIndex) => (
//                                                             <motion.div
//                                                                 key={featureIndex}
//                                                                 className="flex items-start space-x-3 text-gray-300"
//                                                                 initial={{ opacity: 0, x: -20 }}
//                                                                 animate={{ opacity: 1, x: 0 }}
//                                                                 transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
//                                                             >
//                                                                 <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-2 flex-shrink-0`}></div>
//                                                                 <p className="text-sm leading-relaxed">{feature}</p>
//                                                             </motion.div>
//                                                         ))}
//                                                         {project.features.length > 3 && (
//                                                             <p className="text-xs text-cyan-400 font-medium ml-5">
//                                                                 + {project.features.length - 3} more key features
//                                                             </p>
//                                                         )}
//                                                     </div>
//                                                 </div>
//                                             )}

//                                             {/* Technologies */}
//                                             <div className="mb-6">
//                                                 <div className="flex items-center mb-4">
//                                                     <FiCode className="text-purple-400 mr-2" size={18} />
//                                                     <span className="text-sm font-semibold text-[var(--muted)]">Technologies Used</span>
//                                                 </div>
//                                                 <div className="flex flex-wrap gap-2">
//                                                     {(project.tech || []).map((tech, techIndex) => (
//                                                         <motion.span
//                                                             key={techIndex}
//                                                             className="px-3 py-2 text-sm font-medium rounded-full bg-white/10 text-gray-200 border border-white/20 hover:border-white/30 transition-colors"
//                                                             whileHover={{ scale: 1.05 }}
//                                                             transition={{ duration: 0.2 }}
//                                                         >
//                                                             {tech}
//                                                         </motion.span>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Action Buttons */}
//                                         <div className="flex gap-4 pt-4">
//                                             <motion.a
//                                                 href={project.repo || "#"}
//                                                 target="_blank"
//                                                 rel="noreferrer"
//                                                 className="flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-xl border border-white/20 hover:border-white/30 hover:bg-white/5 transition-all duration-300 font-medium"
//                                                 whileHover={{ scale: 1.02 }}
//                                                 whileTap={{ scale: 0.98 }}
//                                             >
//                                                 <FiGithub size={18} />
//                                                 <span>View Code</span>
//                                             </motion.a>

//                                             <motion.a
//                                                 href={project.live || "#"}
//                                                 target="_blank"
//                                                 rel="noreferrer"
//                                                 className={`flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-gradient-to-r ${gradient} hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-medium text-white`}
//                                                 whileHover={{ scale: 1.02 }}
//                                                 whileTap={{ scale: 0.98 }}
//                                             >
//                                                 <FiExternalLink size={18} />
//                                                 <span>Live Demo</span>
//                                             </motion.a>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Bottom Gradient Line */}
//                                 <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
//                             </motion.div>
//                         );
//                     })
//                 )}
//             </div>
//         </section>
//     );
// }

//*!------------------------------------------------------------------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronRight, ChevronLeft, X } from 'lucide-react';
import { projects } from "../data/projects";
// Sample data
// const projects = projects || [];

// Modal Component
const ProjectModal = ({ project, theme, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/80' : 'bg-black/50'} backdrop-blur-sm`} />
            
            {/* Modal Content */}
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border
                    ${theme === 'dark' 
                        ? 'bg-gray-900/95 backdrop-blur-xl border-cyan-400/30' 
                        : 'bg-white border-gray-200'
                    }`}
            >
                {/* Close Button */}
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors
                        ${theme === 'dark'
                            ? 'bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400/30'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    <X size={24} />
                </motion.button>

                {/* Image Header */}
                <div className="relative h-72 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} ${theme === 'dark' ? 'opacity-80' : 'opacity-90'} z-10`} />
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-6 left-6 z-20 text-5xl rounded-xl p-4 shadow-lg
                        ${theme === 'dark' ? 'bg-black/30 backdrop-blur-md' : 'bg-white/20 backdrop-blur-md'}`}>
                        {project.icon}
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h2 className="text-4xl font-bold text-white mb-2">
                            {project.title}
                        </h2>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    {/* Links */}
                    <div className="flex gap-3 mb-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.repo}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors
                                ${theme === 'dark'
                                    ? 'bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400/30 border border-cyan-400/30'
                                    : 'bg-gray-900 text-white hover:bg-gray-800'
                                }`}
                        >
                            <Github size={20} />
                            View Code
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.live}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors
                                ${theme === 'dark'
                                    ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                        >
                            <ExternalLink size={20} />
                            Live Demo
                        </motion.a>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-cyan-400' : 'text-gray-900'}`}>
                            About This Project
                        </h3>
                        <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                            {project.desc}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                        <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-cyan-400' : 'text-gray-900'}`}>
                            Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {project.tech.map((tech, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`px-4 py-2 text-sm rounded-lg font-medium
                                        ${theme === 'dark'
                                            ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                                            : `bg-gradient-to-r ${project.gradient} text-white`
                                        }`}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-gray-900'}`}>
                            Key Features
                        </h3>
                        <ul className="space-y-3">
                            {project.features.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0
                                        ${theme === 'dark' ? 'bg-cyan-400' : `bg-gradient-to-r ${project.gradient}`}`} 
                                    />
                                    <span className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {feature}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Project Card Component
const ProjectCard = ({ project, theme, onClick }) => {
    return (
        <motion.div
            layout
            className="group relative w-full cursor-pointer"
            onClick={onClick}
        >
            <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 border
                    ${theme === 'dark' 
                        ? 'bg-gray-900/50 backdrop-blur-xl border-cyan-400/30 hover:border-cyan-400/60' 
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
            >
                {/* Gradient Overlay on Image */}
                <div className="relative h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} ${theme === 'dark' ? 'opacity-80' : 'opacity-90'} z-10`} />
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-4 left-4 z-20 text-4xl rounded-xl p-3 shadow-lg
                        ${theme === 'dark' ? 'bg-black/30 backdrop-blur-md' : 'bg-white/20 backdrop-blur-md'}`}>
                        {project.icon}
                    </div>

                    {/* Quick Links */}
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.repo}
                            onClick={(e) => e.stopPropagation()}
                            className={`p-2.5 rounded-lg transition-colors
                                ${theme === 'dark' 
                                    ? 'bg-black/30 backdrop-blur-md hover:bg-black/50' 
                                    : 'bg-white/20 backdrop-blur-md hover:bg-white/30'
                                }`}
                        >
                            <Github className="w-5 h-5 text-white" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.live}
                            onClick={(e) => e.stopPropagation()}
                            className={`p-2.5 rounded-lg transition-colors
                                ${theme === 'dark' 
                                    ? 'bg-black/30 backdrop-blur-md hover:bg-black/50' 
                                    : 'bg-white/20 backdrop-blur-md hover:bg-white/30'
                                }`}
                        >
                            <ExternalLink className="w-5 h-5 text-white" />
                        </motion.a>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Title */}
                    <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className={`mb-4 leading-relaxed line-clamp-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.desc}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.slice(0, 4).map((tech, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-1 text-sm rounded-full font-medium
                                        ${theme === 'dark'
                                            ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                                            : `bg-gradient-to-r ${project.gradient} text-white`
                                        }`}
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.tech.length > 4 && (
                                <span className={`px-3 py-1 text-sm rounded-full font-medium
                                    ${theme === 'dark' ? 'text-cyan-400' : 'text-gray-600'}`}>
                                    +{project.tech.length - 4} more
                                </span>
                            )}
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        whileHover={{ x: 5 }}
                        className={`inline-flex items-center gap-2 text-sm font-semibold
                            ${theme === 'dark' ? 'text-cyan-400' : `bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}`}
                    >
                        Click to view details
                        <ChevronRight className="w-4 h-4" />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Main Component - Pass theme as prop from your navbar
export default function ProjectShowcase({ theme = 'dark' }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const visibleCards = 2;
    const totalCards = projects.length;

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalCards);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    };

    // Auto-play carousel - stops when modal is open
    useEffect(() => {
        if (!isAutoPlaying || selectedProject) return;
        
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, selectedProject]);

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = 0; i < visibleCards; i++) {
            visible.push(projects[(currentIndex + i) % totalCards]);
        }
        return visible;
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            scale: 0.8
        })
    };

    return (
        <div className={`min-h-screen py-16 px-4 transition-colors duration-500
            ${theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
                : 'bg-gradient-to-br from-gray-50 to-gray-100'
            }`}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className={`text-5xl font-bold mb-4
                        ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Featured <span className="text-cyan-400">Projects</span>
                    </h1>
                    <p className={`text-xl max-w-2xl mx-auto
                        ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        Showcasing innovative solutions and technical excellence
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Buttons - Fixed Position */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
                        <div className="max-w-7xl mx-auto px-4 flex justify-between">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevSlide}
                                className={`pointer-events-auto p-4 rounded-full shadow-xl transition-colors
                                    ${theme === 'dark'
                                        ? 'bg-cyan-400/20 backdrop-blur-md text-cyan-400 hover:bg-cyan-400/30 border border-cyan-400/30'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                <ChevronLeft size={24} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextSlide}
                                className={`pointer-events-auto p-4 rounded-full shadow-xl transition-colors
                                    ${theme === 'dark'
                                        ? 'bg-cyan-400/20 backdrop-blur-md text-cyan-400 hover:bg-cyan-400/30 border border-cyan-400/30'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                <ChevronRight size={24} />
                            </motion.button>
                        </div>
                    </div>

                    {/* Cards Container */}
                    <div className="overflow-hidden px-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <AnimatePresence mode="popLayout" custom={direction}>
                                {getVisibleProjects().map((project, index) => (
                                    <motion.div
                                        key={`${project.id}-${currentIndex}-${index}`}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.3 }
                                        }}
                                    >
                                        <ProjectCard 
                                            project={project} 
                                            theme={theme}
                                            onClick={() => {
                                                setSelectedProject(project);
                                                setIsAutoPlaying(false);
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {projects.map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300
                                    ${index === currentIndex 
                                        ? theme === 'dark' 
                                            ? 'w-8 bg-cyan-400' 
                                            : 'w-8 bg-gray-700'
                                        : theme === 'dark'
                                            ? 'w-2 bg-gray-600'
                                            : 'w-2 bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        theme={theme}
                        onClose={() => {
                            setSelectedProject(null);
                            setIsAutoPlaying(true);
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}