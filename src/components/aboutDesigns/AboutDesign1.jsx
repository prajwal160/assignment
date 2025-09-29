import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Brain, Award, Code, GraduationCap, Zap } from "lucide-react";

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            rotateX: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const skillsData = [
        { name: "Full-Stack", level: 90, color: "from-cyan-400 to-blue-500" },
        { name: "MERN Stack", level: 85, color: "from-green-400 to-teal-500" },
        { name: "Auth Systems", level: 80, color: "from-purple-400 to-pink-500" },
        { name: "Algorithms", level: 88, color: "from-orange-400 to-red-500" }
    ];

    const contactData = [
        { icon: MapPin, label: "Location", value: "Vijayapur, Karnataka", color: "text-red-400" },
        { icon: Mail, label: "Email", value: "alaladinniprajwal@gmail.com", color: "text-blue-400" },
        { icon: Phone, label: "Phone", value: "+91 9148776414", color: "text-green-400" },
        // { icon: Brain, label: "LeetCode", value: "1536", color: "text-yellow-400" },
        // { icon: Award, label: "AWS", value: "Coursera Certified", color: "text-purple-400" }
    ];

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
                ></motion.div>
                <motion.div
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 0.8, 1]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
                ></motion.div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-7xl mx-auto px-4 relative z-10"
            >
                {/* Header */}
                <motion.div
                    variants={cardVariants}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg shadow-blue-500/25"
                    >
                        <Code className="w-10 h-10 text-white" />
                    </motion.div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                    ></motion.div>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Main Profile Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ 
                            y: -10,
                            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                        }}
                        className="lg:col-span-8 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                        <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                            
                            <motion.div
                                variants={floatingVariants}
                                animate="animate"
                                className="flex items-start mb-8"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                                    <span className="text-2xl font-bold text-white">P</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Prajwal</h3>
                                    <div className="flex items-center text-blue-400">
                                        <GraduationCap className="w-5 h-5 mr-2" />
                                        <span>Computer Science Engineer</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-gray-300 text-lg leading-relaxed mb-8"
                            >
                                B.Tech (CSE) graduate from <span className="text-blue-400 font-semibold">IIIT Nagpur</span> (2020–2024). 
                                Passionate about building full-stack applications using MERN, designing secure authentication systems, 
                                and solving complex algorithmic problems. Experienced in frontend & full-stack development with 
                                production deployments for real users.
                            </motion.p>

                            {/* Skills Progress */}
                            {/* <div className="space-y-4">
                                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                                    <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                                    Core Skills
                                </h4>
                                {skillsData.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                        className="relative"
                                    >
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ delay: 1 + index * 0.1, duration: 1 }}
                                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                            ></motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div> */}
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Education Card */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ 
                                y: -5,
                                boxShadow: "0 15px 30px rgba(34, 197, 94, 0.15)"
                            }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
                            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                                        <GraduationCap className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-white">Education</h4>
                                </div>
                                <div className="text-gray-300">
                                    <p className="font-medium text-green-400 mb-1">IIIT Nagpur</p>
                                    <p className="text-sm text-gray-400">B.Tech Computer Science</p>
                                    <p className="text-sm text-gray-500">2020 - 2024</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ 
                                y: -5,
                                boxShadow: "0 15px 30px rgba(168, 85, 247, 0.15)"
                            }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-white">Contact Info</h4>
                                </div>
                                
                                <div className="space-y-4">
                                    {contactData.map((item, index) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.8 + index * 0.1 }}
                                            whileHover={{ 
                                                x: 5,
                                                transition: { duration: 0.2 }
                                            }}
                                            className="flex items-center p-3 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all cursor-pointer group"
                                        >
                                            <item.icon className={`w-5 h-5 ${item.color} mr-3 group-hover:scale-110 transition-transform`} />
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</p>
                                                <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Achievement Badge */}
                        {/* <motion.div
                            variants={cardVariants}
                            whileHover={{ 
                                scale: 1.02,
                                rotate: 1,
                                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)"
                            }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur-xl"></div>
                            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center">
                                <motion.div
                                    animate={{ 
                                        rotate: [0, 5, -5, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                                >
                                    <Award className="w-8 h-8 text-white" />
                                </motion.div>
                                <h5 className="text-lg font-semibold text-white mb-2">Production Ready</h5>
                                <p className="text-gray-400 text-sm">
                                    Deployed applications serving real users with secure authentication systems
                                </p>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "60%" }}
                                    transition={{ delay: 1.2, duration: 0.8 }}
                                    className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mt-4"
                                ></motion.div>
                            </div>
                        </motion.div> */}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}