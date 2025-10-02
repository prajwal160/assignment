
// *! design1 
// import React from "react";
// import { motion } from "framer-motion";
// import { MapPin, Mail, Phone, Brain, Award, Code, GraduationCap, Zap } from "lucide-react";

// export default function About() {
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.15,
//                 delayChildren: 0.3
//             }
//         }
//     };

//     const cardVariants = {
//         hidden: { 
//             opacity: 0, 
//             y: 50,
//             rotateX: -15
//         },
//         visible: {
//             opacity: 1,
//             y: 0,
//             rotateX: 0,
//             transition: {
//                 duration: 0.8,
//                 ease: [0.25, 0.46, 0.45, 0.94]
//             }
//         }
//     };

//     const floatingVariants = {
//         animate: {
//             y: [0, -10, 0],
//             transition: {
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//             }
//         }
//     };

//     const skillsData = [
//         { name: "Full-Stack", level: 90, color: "from-cyan-400 to-blue-500" },
//         { name: "MERN Stack", level: 85, color: "from-green-400 to-teal-500" },
//         { name: "Auth Systems", level: 80, color: "from-purple-400 to-pink-500" },
//         { name: "Algorithms", level: 88, color: "from-orange-400 to-red-500" }
//     ];

//     const contactData = [
//         { icon: MapPin, label: "Location", value: "Vijayapur, Karnataka", color: "text-red-400" },
//         { icon: Mail, label: "Email", value: "alaladinniprajwal@gmail.com", color: "text-blue-400" },
//         { icon: Phone, label: "Phone", value: "+91 9148776414", color: "text-green-400" },
//         // { icon: Brain, label: "LeetCode", value: "1536", color: "text-yellow-400" },
//         // { icon: Award, label: "AWS", value: "Coursera Certified", color: "text-purple-400" }
//     ];

//     return (
//         <section id="about" className="py-20 relative overflow-hidden">
//             {/* Animated background elements */}
//             <div className="absolute inset-0">
//                 <motion.div
//                     animate={{
//                         rotate: [0, 360],
//                         scale: [1, 1.1, 1]
//                     }}
//                     transition={{
//                         duration: 20,
//                         repeat: Infinity,
//                         ease: "linear"
//                     }}
//                     className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
//                 ></motion.div>
//                 <motion.div
//                     animate={{
//                         rotate: [360, 0],
//                         scale: [1, 0.8, 1]
//                     }}
//                     transition={{
//                         duration: 25,
//                         repeat: Infinity,
//                         ease: "linear"
//                     }}
//                     className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
//                 ></motion.div>
//             </div>

//             <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-50px" }}
//                 className="max-w-7xl mx-auto px-4 relative z-10"
//             >
//                 {/* Header */}
//                 <motion.div
//                     variants={cardVariants}
//                     className="text-center mb-16"
//                 >
//                     <motion.div
//                         initial={{ scale: 0 }}
//                         whileInView={{ scale: 1 }}
//                         transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//                         className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg shadow-blue-500/25"
//                     >
//                         <Code className="w-10 h-10 text-white" />
//                     </motion.div>
//                     <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
//                         About Me
//                     </h2>
//                     <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: "100px" }}
//                         transition={{ delay: 0.8, duration: 0.8 }}
//                         className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
//                     ></motion.div>
//                 </motion.div>

//                 <div className="grid lg:grid-cols-12 gap-8">
//                     {/* Main Profile Card */}
//                     <motion.div
//                         variants={cardVariants}
//                         whileHover={{ 
//                             y: -10,
//                             boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
//                         }}
//                         className="lg:col-span-8 relative"
//                     >
//                         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
//                         <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 overflow-hidden">
//                             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                            
//                             <motion.div
//                                 variants={floatingVariants}
//                                 animate="animate"
//                                 className="flex items-start mb-8"
//                             >
//                                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
//                                     <span className="text-2xl font-bold text-white">P</span>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-3xl font-bold text-white mb-2">Prajwal</h3>
//                                     <div className="flex items-center text-blue-400">
//                                         <GraduationCap className="w-5 h-5 mr-2" />
//                                         <span>Computer Science Engineer</span>
//                                     </div>
//                                 </div>
//                             </motion.div>

//                             <motion.p
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.5 }}
//                                 className="text-gray-300 text-lg leading-relaxed mb-8"
//                             >
//                                 B.Tech (CSE) graduate from <span className="text-blue-400 font-semibold">IIIT Nagpur</span> (2020–2024). 
//                                 Passionate about building full-stack applications using MERN, designing secure authentication systems, 
//                                 and solving complex algorithmic problems. Experienced in frontend & full-stack development with 
//                                 production deployments for real users.
//                             </motion.p>

//                             {/* Skills Progress */}
//                             {/* <div className="space-y-4">
//                                 <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
//                                     <Zap className="w-5 h-5 mr-2 text-yellow-400" />
//                                     Core Skills
//                                 </h4>
//                                 {skillsData.map((skill, index) => (
//                                     <motion.div
//                                         key={skill.name}
//                                         initial={{ opacity: 0, x: -50 }}
//                                         whileInView={{ opacity: 1, x: 0 }}
//                                         transition={{ delay: 0.7 + index * 0.1 }}
//                                         className="relative"
//                                     >
//                                         <div className="flex justify-between mb-2">
//                                             <span className="text-gray-300 font-medium">{skill.name}</span>
//                                             <span className="text-gray-400">{skill.level}%</span>
//                                         </div>
//                                         <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
//                                             <motion.div
//                                                 initial={{ width: 0 }}
//                                                 whileInView={{ width: `${skill.level}%` }}
//                                                 transition={{ delay: 1 + index * 0.1, duration: 1 }}
//                                                 className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
//                                             ></motion.div>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </div> */}
//                         </div>
//                     </motion.div>

//                     {/* Sidebar */}
//                     <div className="lg:col-span-4 space-y-8">
//                         {/* Education Card */}
//                         <motion.div
//                             variants={cardVariants}
//                             whileHover={{ 
//                                 y: -5,
//                                 boxShadow: "0 15px 30px rgba(34, 197, 94, 0.15)"
//                             }}
//                             className="relative group"
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
//                             <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
//                                 <div className="flex items-center mb-4">
//                                     <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
//                                         <GraduationCap className="w-6 h-6 text-white" />
//                                     </div>
//                                     <h4 className="text-xl font-semibold text-white">Education</h4>
//                                 </div>
//                                 <div className="text-gray-300">
//                                     <p className="font-medium text-green-400 mb-1">IIIT Nagpur</p>
//                                     <p className="text-sm text-gray-400">B.Tech Computer Science</p>
//                                     <p className="text-sm text-gray-500">2020 - 2024</p>
//                                 </div>
//                             </div>
//                         </motion.div>

//                         {/* Contact Info */}
//                         <motion.div
//                             variants={cardVariants}
//                             whileHover={{ 
//                                 y: -5,
//                                 boxShadow: "0 15px 30px rgba(168, 85, 247, 0.15)"
//                             }}
//                             className="relative group"
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
//                             <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
//                                 <div className="flex items-center mb-6">
//                                     <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
//                                         <Mail className="w-6 h-6 text-white" />
//                                     </div>
//                                     <h4 className="text-xl font-semibold text-white">Contact Info</h4>
//                                 </div>
                                
//                                 <div className="space-y-4">
//                                     {contactData.map((item, index) => (
//                                         <motion.div
//                                             key={item.label}
//                                             initial={{ opacity: 0, x: 20 }}
//                                             whileInView={{ opacity: 1, x: 0 }}
//                                             transition={{ delay: 0.8 + index * 0.1 }}
//                                             whileHover={{ 
//                                                 x: 5,
//                                                 transition: { duration: 0.2 }
//                                             }}
//                                             className="flex items-center p-3 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all cursor-pointer group"
//                                         >
//                                             <item.icon className={`w-5 h-5 ${item.color} mr-3 group-hover:scale-110 transition-transform`} />
//                                             <div>
//                                                 <p className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</p>
//                                                 <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
//                                                     {item.value}
//                                                 </p>
//                                             </div>
//                                         </motion.div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </motion.div>

//                         {/* Achievement Badge */}
//                         {/* <motion.div
//                             variants={cardVariants}
//                             whileHover={{ 
//                                 scale: 1.02,
//                                 rotate: 1,
//                                 boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)"
//                             }}
//                             className="relative"
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur-xl"></div>
//                             <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center">
//                                 <motion.div
//                                     animate={{ 
//                                         rotate: [0, 5, -5, 0],
//                                         scale: [1, 1.05, 1]
//                                     }}
//                                     transition={{
//                                         duration: 4,
//                                         repeat: Infinity,
//                                         ease: "easeInOut"
//                                     }}
//                                     className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
//                                 >
//                                     <Award className="w-8 h-8 text-white" />
//                                 </motion.div>
//                                 <h5 className="text-lg font-semibold text-white mb-2">Production Ready</h5>
//                                 <p className="text-gray-400 text-sm">
//                                     Deployed applications serving real users with secure authentication systems
//                                 </p>
//                                 <motion.div
//                                     initial={{ width: 0 }}
//                                     whileInView={{ width: "60%" }}
//                                     transition={{ delay: 1.2, duration: 0.8 }}
//                                     className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mt-4"
//                                 ></motion.div>
//                             </div>
//                         </motion.div> */}
//                     </div>
//                 </div>
//             </motion.div>
//         </section>
//     );
// }



//*! coding design 2
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, User, MapPin, Mail, Phone, Brain, Award } from "lucide-react";

export default function About() {
    const [typedText, setTypedText] = useState("");
    const fullText = "whoami";

    useEffect(() => {
        const timer = setTimeout(() => {
            if (typedText.length < fullText.length) {
                setTypedText(fullText.substring(0, typedText.length + 1));
            }
        }, 150);
        return () => clearTimeout(timer);
    }, [typedText]);

    const terminalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const lineVariants = {
        hidden: { opacity: 0, width: 0 },
        visible: {
            opacity: 1,
            width: "100%",
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    };

    const factItems = [
        { key: "location", value: "Vijayapur, Karnataka", icon: MapPin },
        { key: "email", value: "alaladinniprajwal@gmail.com", icon: Mail },
        { key: "phone", value: "+91 9148776414", icon: Phone },
        // { key: "leetcode", value: "1536", icon: Brain },
        // { key: "aws_cert", value: "Coursera Certified", icon: Award }
    ];

    return (
        <section id="about" className="py-20 font-mono">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto px-4"
            >
                {/* Terminal Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center bg-gray-900 border border-green-500/30 rounded-lg px-4 py-2 mb-4">
                        <Terminal className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-green-400">~/portfolio/about</span>
                        <span className="ml-2 text-gray-500">$</span>
                        <span className="ml-2 text-white">{typedText}</span>
                        <span className="ml-1 animate-pulse">|</span>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Terminal Window */}
                    <motion.div
                        variants={terminalVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-gray-950 border border-green-500/30 rounded-lg overflow-hidden shadow-2xl shadow-green-500/10"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center bg-gray-900 px-4 py-3 border-b border-green-500/20">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex-1 text-center text-sm text-gray-400">
                                prajwal@portfolio: ~/about
                            </div>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-6 text-sm">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mb-4"
                            >
                                <span className="text-green-400">prajwal@dev:~$</span>
                                <span className="text-white ml-2">cat about.txt</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="border-l-2 border-green-500/50 pl-4 mb-6"
                            >
                                <motion.div
                                    variants={lineVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ delay: 1.5 }}
                                    className="h-px bg-gradient-to-r from-green-500 to-transparent mb-4"
                                ></motion.div>

                                {/* <p className="text-gray-300 leading-relaxed mb-4">
                                    <span className="text-green-400">#!/bin/bash</span><br />
                                    <span className="text-blue-400"># Developer Profile</span><br /><br />
                                    NAME=<span className="text-yellow-400">"Prajwal"</span><br />
                                    DEGREE=<span className="text-yellow-400">"B.Tech (CSE) from IIIT Nagpur (2020–2024)"</span><br />
                                    SKILLS=<span className="text-yellow-400">("MERN Stack" "Auth Systems" "Algorithms")</span><br />
                                    EXPERIENCE=<span className="text-yellow-400">"Frontend & Full-stack Internships"</span><br />
                                    STATUS=<span className="text-yellow-400">"Production Apps Deployed"</span>
                                </p> */}
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    <span className="text-green-400">#!/bin/bash</span><br />
                                    <span className="text-blue-400"># Developer Profile</span><br /><br />
                                    I'm <span className="text-yellow-400">Prajwal</span> — B.Tech (CSE) from <span className="text-yellow-400">IIIT Nagpur (2020–2024)</span>. I enjoy building full-stack apps using <span className="text-yellow-400">MERN Stack</span>, designing secure auth systems, and solving algorithmic problems. I've done internships in frontend & full-stack roles and deployed production apps for real users.
                                </p>

                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.8 }}
                                className="bg-gray-900/50 rounded-lg p-4 border border-green-500/20"
                            >
                                <div className="text-green-400 mb-2 flex items-center">
                                    <Award className="w-4 h-4 mr-2" />
                                    Education.log
                                </div>
                                <p className="text-gray-400 text-xs">
                                    [2020-2024] Indian Institute of Information Technology, Nagpur<br />
                                    [PROGRAM] B.Tech. Computer Science & Engineering<br />
                                    [STATUS] <span className="text-green-400">COMPLETED</span>
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 2.1 }}
                                className="mt-4"
                            >
                                <span className="text-green-400">prajwal@dev:~$</span>
                                <span className="text-white ml-2 animate-pulse">_</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* System Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="bg-gray-950 border border-green-500/30 rounded-lg overflow-hidden shadow-2xl shadow-green-500/10"
                    >
                        <div className="bg-gray-900 px-4 py-3 border-b border-green-500/20">
                            <div className="text-sm text-gray-400 flex items-center">
                                <User className="w-4 h-4 mr-2 text-green-400" />
                                system.info
                            </div>
                        </div>

                        <div className="p-4 space-y-4 text-xs">
                            {factItems.map((item, index) => (
                                <motion.div
                                    key={item.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.0 + index * 0.2 }}
                                    whileHover={{
                                        backgroundColor: "rgba(34, 197, 94, 0.1)",
                                        transition: { duration: 0.2 }
                                    }}
                                    className="p-3 rounded border border-green-500/20 hover:border-green-500/50 transition-all cursor-pointer group"
                                >
                                    <div className="flex items-start justify-between mb-1">
                                        <span className="text-green-400 font-medium group-hover:text-green-300">
                                            {item.key}:
                                        </span>
                                        <item.icon className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="text-gray-300 break-words group-hover:text-white">
                                        {item.value}
                                    </div>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 2.5 }}
                                className="pt-4 border-t border-green-500/20"
                            >
                                <div className="text-green-400 text-xs mb-2">uptime:</div>
                                <div className="text-gray-400 text-xs">
                                    <span className="text-green-400">●</span> online since 2020
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}


//*! design three
// import React from "react";
// import { motion } from "framer-motion";
// import { MapPin, Mail, Phone, Brain, Award } from "lucide-react";

// export default function About() {
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.2
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 30, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.6,
//                 ease: "easeOut"
//             }
//         }
//     };

//     const glowVariants = {
//         initial: { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
//         hover: { 
//             boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
//             transition: { duration: 0.3 }
//         }
//     };

//     return (
//         <section id="about" className="py-20 relative overflow-hidden">
//             {/* Background glow effects */}
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-blue-900/10 blur-3xl"></div>
//             <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

//             <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-100px" }}
//                 className="relative z-10"
//             >
//                 <motion.h2 
//                     variants={itemVariants}
//                     className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
//                 >
//                     About Me
//                 </motion.h2>

//                 <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
//                     {/* Main bio card */}
//                     <motion.div 
//                         variants={itemVariants}
//                         whileHover="hover"
//                         initial="initial"
//                         {...glowVariants}
//                         className="lg:col-span-2 bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden"
//                     >
//                         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
//                         <div className="relative z-10">
//                             <motion.div
//                                 initial={{ scale: 0 }}
//                                 whileInView={{ scale: 1 }}
//                                 transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//                                 className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6"
//                             >
//                                 <span className="text-2xl font-bold text-white">P</span>
//                             </motion.div>

//                             <motion.p 
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.5, duration: 0.6 }}
//                                 className="text-gray-300 text-lg leading-relaxed mb-8"
//                             >
//                                 I'm <span className="text-blue-400 font-semibold">Prajwal</span> — B.Tech (CSE) from IIIT Nagpur (2020–2024). 
//                                 I enjoy building full-stack apps using MERN, designing secure auth systems, and solving algorithmic problems. 
//                                 I've done internships in frontend & full-stack roles and deployed production apps for real users.
//                             </motion.p>

//                             <motion.div
//                                 initial={{ opacity: 0, x: -20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: 0.7, duration: 0.6 }}
//                                 className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/30"
//                             >
//                                 <h4 className="font-semibold text-white mb-3 flex items-center">
//                                     <Award className="w-5 h-5 mr-2 text-blue-400" />
//                                     Education
//                                 </h4>
//                                 <p className="text-gray-400">
//                                     Indian Institute of Information Technology, Nagpur<br />
//                                     <span className="text-blue-400">B.Tech. Computer Science</span> (2020 - 2024)
//                                 </p>
//                             </motion.div>
//                         </div>
//                     </motion.div>

//                     {/* Quick facts card */}
//                     <motion.div 
//                         variants={itemVariants}
//                         whileHover={{ y: -10 }}
//                         className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden"
//                     >
//                         <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
//                         <div className="relative z-10">
//                             <h4 className="font-semibold text-white mb-6 text-xl">Quick Facts</h4>
//                             <ul className="space-y-4">
//                                 {[
//                                     { icon: MapPin, text: "Vijayapur, Karnataka", color: "text-red-400" },
//                                     { icon: Mail, text: "alaladinniprajwal@gmail.com", color: "text-green-400" },
//                                     { icon: Phone, text: "+91 9148776414", color: "text-blue-400" },
//                                     { icon: Brain, text: "LeetCode: 1536", color: "text-yellow-400" },
//                                     { icon: Award, text: "AWS certified (Coursera)", color: "text-orange-400" }
//                                 ].map((item, index) => (
//                                     <motion.li
//                                         key={index}
//                                         initial={{ opacity: 0, x: -20 }}
//                                         whileInView={{ opacity: 1, x: 0 }}
//                                         transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
//                                         whileHover={{ x: 10, transition: { duration: 0.2 } }}
//                                         className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer group"
//                                     >
//                                         <item.icon className={`w-5 h-5 mr-3 ${item.color} group-hover:scale-110 transition-transform`} />
//                                         <span className="text-sm">{item.text}</span>
//                                     </motion.li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </motion.div>
//                 </div>
//             </motion.div>
//         </section>
//     );
// }




//*! switch between designs
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// import AboutDesign1 from "./aboutDesigns/AboutDesign1";
// import AboutDesign2 from "./aboutDesigns/AboutDesign2";
// import AboutDesign3 from "./aboutDesigns/AboutDesign3";

// export default function AboutSwitcher() {
//   const [currentDesign, setCurrentDesign] = useState(1);

//   const designs = [
//     <AboutDesign1 key={1} />,
//     <AboutDesign2 key={2} />,
//     <AboutDesign3 key={3} />
//   ];

//   const handleNext = () => {
//     setCurrentDesign(prev => (prev === 3 ? 1 : prev + 1));
//   };

//   const handlePrev = () => {
//     setCurrentDesign(prev => (prev === 1 ? 3 : prev - 1));
//   };

//   return (
//     <section className="relative py-20">
//       <div className="max-w-7xl mx-auto px-4 mb-8 flex justify-center space-x-4">
//         <button
//           onClick={handlePrev}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
//         >
//           Next
//         </button>
//       </div>

//       <div className="max-w-7xl mx-auto px-4">
//         {designs.map((design, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: currentDesign === index + 1 ? 1 : 0, y: currentDesign === index + 1 ? 0 : 20 }}
//             transition={{ duration: 0.3 }}
//             style={{ display: currentDesign === index + 1 ? "block" : "none" }}
//           >
//             {design}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
