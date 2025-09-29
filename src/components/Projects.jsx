import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiStar, FiArrowUpRight } from 'react-icons/fi';
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
            features: [
                "Developed a full-featured EdTech platform using the MERN stack",
                "Engineered secure RESTful APIs for authentication and payment integration",
                "Leveraged MongoDB Atlas and Cloudinary for scalable storage"
            ],
            repo: "#",
            live: "#"
        },
        {
            id: 2,
            title: "Stack Overflow Clone",
            desc: "A fully responsive Stack Overflow clone with comprehensive Q&A functionality and user management system.",
            image: "https://via.placeholder.com/400x200/f97316/ffffff?text=Stack+Overflow",
            tech: ["React", "MongoDB", "JavaScript", "HTML", "CSS"],
            features: [
                "Executed a fully responsive Stack Overflow clone with key features",
                "Configured efficient authentication system with seamless functionality",
                "Facilitated posting, deletion, and sharing of questions/answers"
            ],
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
                <h2 className="text-5xl leading-normal font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                    Featured Projects
                </h2>
                <p className="text-[var(--muted)] text-xl max-w-2xl mx-auto">
                    Explore my latest work showcasing full-stack development expertise and modern web technologies
                </p>
            </motion.div>

            {/* Projects Grid - Changed to single column for horizontal cards */}
            <div className="max-w-6xl mx-auto space-y-8">
                {projectsData.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-[var(--muted)] text-lg">No projects found. Please check your data file.</p>
                    </div>
                ) : (
                    projectsData.map((project, index) => {
                        const gradient = gradientThemes[index % gradientThemes.length];

                        const loopAnim = shouldReduce ? {} : {
                            scale: [1, 1.01, 1],
                            transition: {
                                duration: 6 + index * 0.5,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 4
                            }
                        };

                        return (
                            <motion.div
                                key={project.id}
                                className="group relative bg-[var(--card)]/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                                variants={cardVariants}
                                initial="hidden"
                                animate={{ opacity: 1, y: 0, ...loopAnim }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {/* Gradient Border Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>

                                <div className="relative flex flex-col lg:flex-row h-full min-h-[400px]">
                                    {/* Image Section */}
                                    <div className="lg:w-96 h-64 lg:h-auto relative overflow-hidden flex-shrink-0">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-sm h-sm object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30"></div>

                                        {/* Project Icon/Number */}
                                        <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center text-xl font-bold text-white`}>
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        {/* Floating Action Button */}
                                        <motion.div
                                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            whileHover={{ rotate: 45 }}
                                        >
                                            <FiArrowUpRight size={24} className="text-white bg-black/50 rounded-full p-1 backdrop-blur-sm" />
                                        </motion.div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1 p-8 flex flex-col justify-between">
                                        <div>
                                            {/* Project Title and Description */}
                                            <div className="mb-6">
                                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-[var(--muted)] leading-relaxed">
                                                    {project.desc}
                                                </p>
                                            </div>

                                            {/* Key Features (if available) */}
                                            {project.features && project.features.length > 0 && (
                                                <div className="mb-6">
                                                    <div className="flex items-center mb-4">
                                                        <FiStar className="text-cyan-400 mr-2" size={18} />
                                                        <span className="text-sm font-semibold text-[var(--muted)]">Key Highlights</span>
                                                    </div>
                                                    <div className="space-y-3">
                                                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                                                            <motion.div
                                                                key={featureIndex}
                                                                className="flex items-start space-x-3 text-gray-300"
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                                                            >
                                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-2 flex-shrink-0`}></div>
                                                                <p className="text-sm leading-relaxed">{feature}</p>
                                                            </motion.div>
                                                        ))}
                                                        {project.features.length > 3 && (
                                                            <p className="text-xs text-cyan-400 font-medium ml-5">
                                                                + {project.features.length - 3} more key features
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Technologies */}
                                            <div className="mb-6">
                                                <div className="flex items-center mb-4">
                                                    <FiCode className="text-purple-400 mr-2" size={18} />
                                                    <span className="text-sm font-semibold text-[var(--muted)]">Technologies Used</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {(project.tech || []).map((tech, techIndex) => (
                                                        <motion.span
                                                            key={techIndex}
                                                            className="px-3 py-2 text-sm font-medium rounded-full bg-white/10 text-gray-200 border border-white/20 hover:border-white/30 transition-colors"
                                                            whileHover={{ scale: 1.05 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4 pt-4">
                                            <motion.a
                                                href={project.repo || "#"}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-xl border border-white/20 hover:border-white/30 hover:bg-white/5 transition-all duration-300 font-medium"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <FiGithub size={18} />
                                                <span>View Code</span>
                                            </motion.a>

                                            <motion.a
                                                href={project.live || "#"}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-gradient-to-r ${gradient} hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-medium text-white`}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <FiExternalLink size={18} />
                                                <span>Live Demo</span>
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Gradient Line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
                            </motion.div>
                        );
                    })
                )}
            </div>
        </section>
    );
}












// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// // Sample projects data (replace with your actual data)
// const projectsData = [
//     {
//         id: 1,
//         title: "StudyNotion EdTech Platform",
//         desc: "A comprehensive EdTech platform built with MERN stack featuring course creation, learning management, and secure payment integration.",
//         image: "https://via.placeholder.com/400x200",
//         features: [
//             "Interactive course dashboard",
//             "Secure Razorpay payment gateway",
//             "Instructor and student modules",
//             "Gamified learning experience",
//         ],
//         tech: ["MongoDB", "Express", "React", "Node.js", "Razorpay"],
//     },
//     {
//         id: 2,
//         title: "AI Resume Builder",
//         desc: "AI-powered resume builder that suggests skills and formats optimized for ATS systems.",
//         image: "https://via.placeholder.com/400x200",
//         features: [
//             "ATS-optimized formatting",
//             "AI-based skill recommendations",
//             "Export in PDF and DOCX",
//             "Custom templates",
//         ],
//         tech: ["Next.js", "Tailwind", "OpenAI API", "MongoDB"],
//     },
// ];

// // ---------------- Masonry Layout ----------------
// const MasonryCard = ({ project }) => (
//     <motion.div
//         layout
//         whileHover={{ scale: 1.05 }}
//         className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
//     >
//         <div className="relative">
//             <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//             <div className="absolute bottom-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-lg">
//                 {project.tech.join(", ")}
//             </div>
//         </div>
//         <div className="p-4">
//             <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
//             <p className="text-sm text-gray-600 dark:text-gray-400">{project.desc}</p>
//         </div>
//     </motion.div>
// );

// // ---------------- Accordion Layout ----------------
// const AccordionCard = ({ project, expandedCard, setExpandedCard }) => {
//     const isOpen = expandedCard === project.id;

//     return (
//         <motion.div
//             layout
//             initial={{ borderRadius: 10 }}
//             className="mb-4 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
//         >
//             <button
//                 className="flex justify-between items-center w-full px-4 py-3 bg-gray-100 dark:bg-gray-700"
//                 onClick={() => setExpandedCard(isOpen ? null : project.id)}
//             >
//                 <span className="font-medium">{project.title}</span>
//                 <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
//                     <ChevronDown />
//                 </motion.span>
//             </button>

//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="px-4 py-3"
//                     >
//                         <p className="text-sm text-gray-600 dark:text-gray-300">{project.desc}</p>
//                         <ul className="list-disc list-inside text-sm mt-2 space-y-1">
//                             {project.features.map((f, i) => (
//                                 <li key={i}>{f}</li>
//                             ))}
//                         </ul>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </motion.div>
//     );
// };

// // ---------------- Timeline Layout ----------------
// const TimelineCard = ({ project, index }) => {
//     const isLeft = index % 2 === 0;
//     return (
//         <motion.div
//             className={`flex items-center w-full mb-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
//         >
//             <div className="w-1/2 px-4">
//                 <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
//                     <h3 className="text-lg font-bold">{project.title}</h3>
//                     <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.desc}</p>
//                     <div className="flex flex-wrap gap-2 mt-3">
//                         {project.tech.map((t, i) => (
//                             <span
//                                 key={i}
//                                 className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs"
//                             >
//                                 {t}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="w-1/2 flex justify-center relative">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full z-10" />
//                 <div className="absolute w-px bg-gray-300 h-full"></div>
//             </div>
//         </motion.div>
//     );
// };

// // ---------------- Main Component ----------------
// const ProjectsPreview = () => {
//     const [designType, setDesignType] = useState("masonry");
//     const [expandedCard, setExpandedCard] = useState(null);

//     return (
//         <div className="w-full py-10 px-6">
//             {/* Toggle Buttons */}
//             <div className="flex justify-center mb-8 space-x-4">
//                 {["masonry", "accordion", "timeline"].map((type) => (
//                     <button
//                         key={type}
//                         onClick={() => setDesignType(type)}
//                         className={`px-4 py-2 rounded-lg ${designType === type
//                                 ? "bg-blue-600 text-white"
//                                 : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
//                             }`}
//                     >
//                         {type.charAt(0).toUpperCase() + type.slice(1)}
//                     </button>
//                 ))}
//             </div>

//             {/* Layouts */}
//             {designType === "masonry" && (
//                 <div className="grid md:grid-cols-2 gap-6">
//                     {projectsData.map((project) => (
//                         <MasonryCard key={project.id} project={project} />
//                     ))}
//                 </div>
//             )}

//             {designType === "accordion" && (
//                 <div>
//                     {projectsData.map((project) => (
//                         <AccordionCard
//                             key={project.id}
//                             project={project}
//                             expandedCard={expandedCard}
//                             setExpandedCard={setExpandedCard}
//                         />
//                     ))}
//                 </div>
//             )}

//             {designType === "timeline" && (
//                 <div className="relative">
//                     {projectsData.map((project, index) => (
//                         <TimelineCard key={project.id} project={project} index={index} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProjectsPreview;
