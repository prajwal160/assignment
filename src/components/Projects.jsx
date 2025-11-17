import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronRight, ChevronLeft, X, Sparkles } from 'lucide-react';
import { projects } from "../data/projects";

// Modal Component - Using OLD DESIGN from first version
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
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/80' : 'bg-black/50'} backdrop-blur-sm`} />

            {/* Modal Content - OLD DESIGN */}
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-xl sm:rounded-2xl shadow-2xl border
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
                    className={`absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 rounded-full transition-colors
                        ${theme === 'dark'
                            ? 'bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400/30'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    <X size={20} className="sm:w-6 sm:h-6" />
                </motion.button>

                {/* Image Header */}
                <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} ${theme === 'dark' ? 'opacity-80' : 'opacity-90'} z-10`} />
                    <img
                        src={project.image}fchev
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Icon Badge */}
                    <div className={`absolute top-3 left-3 sm:top-6 sm:left-6 z-20 text-3xl sm:text-5xl rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-lg
                        ${theme === 'dark' ? 'bg-black/30 backdrop-blur-md' : 'bg-white/20 backdrop-blur-md'}`}>
                        {project.icon}
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-3 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                            {project.title}
                        </h2>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.repo}
                            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors
                                ${theme === 'dark'
                                    ? 'bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400/30 border border-cyan-400/30'
                                    : 'bg-gray-900 text-white hover:bg-gray-800'
                                }`}
                        >
                            <Github size={18} className="sm:w-5 sm:h-5" />
                            View Code
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.live}
                            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors
                                ${theme === 'dark'
                                    ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                        >
                            <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                            Live Demo
                        </motion.a>
                    </div>

                    {/* Description */}
                    <div className="mb-4 sm:mb-6">
                        <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${theme === 'dark' ? 'text-cyan-400' : 'text-gray-900'}`}>
                            About This Project
                        </h3>
                        <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                            {project.desc}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4 sm:mb-6">
                        <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${theme === 'dark' ? 'text-cyan-400' : 'text-gray-900'}`}>
                            Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg font-medium
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
                        <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-gray-900'}`}>
                            Key Features
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {project.features.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-start gap-2 sm:gap-3"
                                >
                                    <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0
                                        ${theme === 'dark' ? 'bg-cyan-400' : `bg-gradient-to-r ${project.gradient}`}`}
                                    />
                                    <span className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
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

// Alternative Card Design - Split Layout
const ProjectCard = ({ project, theme, onClick }) => {
    return (
        <motion.div
            layout
            className="group relative w-full max-w-4xl mx-auto cursor-pointer"
            onClick={onClick}
        >
            <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2
                    ${theme === 'dark'
                        ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-cyan-500/30 hover:border-cyan-500/60'
                        : 'bg-white border-gray-200 hover:border-blue-300'
                    }`}
            >
                {/* Mobile: Vertical Stack | Desktop: Side by Side */}
                <div className="flex flex-col md:grid md:grid-cols-5 gap-0">
                    {/* Image Section - Smaller height on mobile */}
                    <div className="md:col-span-2 relative h-48 sm:h-56 md:h-auto overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 mix-blend-multiply z-10`} />
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 sm:p-5 md:p-6">
                            {/* Icon Badge - Smaller on mobile */}
                            <div className={`text-3xl sm:text-4xl md:text-5xl w-fit p-2.5 sm:p-3 md:p-4 rounded-xl md:rounded-2xl backdrop-blur-md
                                ${theme === 'dark' ? 'bg-white/10' : 'bg-black/20'}`}>
                                {project.icon}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                                <motion.a
                                    // whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.repo}
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all"
                                >
                                    <Github className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.live}
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all"
                                >
                                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </motion.a>
                            </div>
                        </div>
                    </div>

                    {/* Content Section - Better spacing on mobile */}
                    <div className="md:col-span-3 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            {/* Title - Better mobile sizing */}
                            <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 leading-tight
                                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {project.title}
                            </h3>

                            {/* Description - Compact on mobile */}
                            <p className={`text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 md:mb-5 line-clamp-3 sm:line-clamp-none
                                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                {project.desc}
                            </p>

                            {/* Tech Stack - Better wrapping on mobile */}
                            <div className="mb-3 sm:mb-4">
                                <h4 className={`text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3
                                    ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`}>
                                    Technologies
                                </h4>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {project.tech.slice(0, 5).map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-md sm:rounded-lg
                                                ${theme === 'dark'
                                                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                                                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 5 && (
                                        <span className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium
                                            ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`}>
                                            +{project.tech.length - 5}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* View Details CTA - More prominent on mobile */}
                        <motion.div
                            whileHover={{ x: 5 }}
                            className={`inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold mt-2 sm:mt-4
                                ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`}
                        >
                            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            View Full Details
                            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};


// Main Component
export default function AlternativeProjectShowcase({ theme = 'dark' }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const totalCards = projects.length;

    const nextSlide = () => {
        if (isTransitioning) return; // Prevent rapid clicks
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalCards);
        setIsTransitioning(true);
        
        // Reset autoplay timer after manual navigation
        setIsAutoPlaying(false);
        setTimeout(() => {
            setIsAutoPlaying(true);
            setIsTransitioning(false);
        },); // Wait 3 seconds before allowing next slide
    };

    const prevSlide = () => {
        if (isTransitioning) return; // Prevent rapid clicks
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
        setIsTransitioning(true);
        
        // Reset autoplay timer after manual navigation
        setIsAutoPlaying(false);
        setTimeout(() => {
            setIsAutoPlaying(true);
            setIsTransitioning(false);
        },); // Wait 3 seconds before allowing next slide
    };

    const goToSlide = (index) => {
        if (isTransitioning) return; // Prevent rapid clicks
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
        setIsTransitioning(true);
        
        // Reset autoplay timer after manual navigation
        setIsAutoPlaying(false);
        setTimeout(() => {
            setIsAutoPlaying(true);
            setIsTransitioning(false);
        }, 3000); // Wait 3 seconds before allowing next slide
    };

    useEffect(() => {
        if (!isAutoPlaying || selectedProject || isTransitioning) return;
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, selectedProject, isTransitioning, currentIndex]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1200 : -1200,
            opacity: 0,
            rotateY: direction > 0 ? 25 : -25
        }),
        center: {
            x: 0,
            opacity: 1,
            rotateY: 0
        },
        exit: (direction) => ({
            x: direction > 0 ? -1200 : 1200,
            opacity: 0,
            rotateY: direction > 0 ? -25 : 25
        })
    };

    return (
        <div id="projects" style={{ scrollMarginTop: "10px" }} className={`min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 transition-colors duration-500
            ${theme === 'dark'
                ? 'bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950'
                : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
            }`}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="inline-block mb-4"
                    >
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
                            ${theme === 'dark'
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                                : 'bg-blue-100 text-blue-700 border border-blue-200'
                            }`}>
                            <Sparkles className="w-4 h-4" />
                            Portfolio Showcase
                        </span>
                    </motion.div>

                    <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4
                        ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Featured <span className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}>Projects</span>
                    </h1>
                    <p className={`text-lg sm:text-xl max-w-2xl mx-auto
                        ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Innovative solutions crafted with passion and precision
                    </p>
                </motion.div>

                <div className="relative" style={{ perspective: '2000px' }}>
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
                        <div className="max-w-7xl mx-auto px-0 flex justify-between">
                            <motion.button
                                whileHover={{ scale: isTransitioning ? 1 : 1.15, x: isTransitioning ? 0 : -5 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevSlide}
                                disabled={isTransitioning}
                                className={`pointer-events-auto p-4 rounded-full shadow-2xl transition-all
                                    ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
                                    ${theme === 'dark'
                                        ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-xl text-cyan-300 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-400/30'
                                        : 'bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200'
                                    }`}
                            >
                                <ChevronLeft size={28} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: isTransitioning ? 1 : 1.15, x: isTransitioning ? 0 : 5 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextSlide}
                                disabled={isTransitioning}
                                className={`pointer-events-auto p-4 rounded-full shadow-2xl transition-all
                                    ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
                                    ${theme === 'dark'
                                        ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-xl text-cyan-300 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-400/30'
                                        : 'bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200'
                                    }`}
                            >
                                <ChevronRight size={28} />
                            </motion.button>
                        </div>
                    </div>

                    <div className="overflow-hidden px-4 sm:px-12 md:px-20 lg:px-28">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 35 },
                                    opacity: { duration: 0.4 },
                                    rotateY: { duration: 0.6 }
                                }}
                            >
                                <ProjectCard
                                    project={projects[currentIndex]}
                                    theme={theme}
                                    onClick={() => {
                                        setSelectedProject(projects[currentIndex]);
                                        setIsAutoPlaying(false);
                                    }}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center items-center gap-3 mt-10">
                        {projects.map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: isTransitioning ? 1 : 1.3 }}
                                onClick={() => goToSlide(index)}
                                disabled={isTransitioning}
                                className={`rounded-full transition-all duration-300
                                    ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
                                    ${index === currentIndex
                                        ? theme === 'dark'
                                            ? 'w-10 h-3 bg-gradient-to-r from-cyan-400 to-blue-500'
                                            : 'w-10 h-3 bg-gradient-to-r from-blue-600 to-cyan-600'
                                        : theme === 'dark'
                                            ? 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                                            : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

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