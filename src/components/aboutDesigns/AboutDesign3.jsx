import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Brain, Award } from "lucide-react";

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const glowVariants = {
        initial: { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
        hover: { 
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
            transition: { duration: 0.3 }
        }
    };

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-blue-900/10 blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10"
            >
                <motion.h2 
                    variants={itemVariants}
                    className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                    About Me
                </motion.h2>

                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                    {/* Main bio card */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover="hover"
                        initial="initial"
                        {...glowVariants}
                        className="lg:col-span-2 bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                        <div className="relative z-10">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6"
                            >
                                <span className="text-2xl font-bold text-white">P</span>
                            </motion.div>

                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="text-gray-300 text-lg leading-relaxed mb-8"
                            >
                                I'm <span className="text-blue-400 font-semibold">Prajwal</span> — B.Tech (CSE) from IIIT Nagpur (2020–2024). 
                                I enjoy building full-stack apps using MERN, designing secure auth systems, and solving algorithmic problems. 
                                I've done internships in frontend & full-stack roles and deployed production apps for real users.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/30"
                            >
                                <h4 className="font-semibold text-white mb-3 flex items-center">
                                    <Award className="w-5 h-5 mr-2 text-blue-400" />
                                    Education
                                </h4>
                                <p className="text-gray-400">
                                    Indian Institute of Information Technology, Nagpur<br />
                                    <span className="text-blue-400">B.Tech. Computer Science</span> (2020 - 2024)
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Quick facts card */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
                        <div className="relative z-10">
                            <h4 className="font-semibold text-white mb-6 text-xl">Quick Facts</h4>
                            <ul className="space-y-4">
                                {[
                                    { icon: MapPin, text: "Vijayapur, Karnataka", color: "text-red-400" },
                                    { icon: Mail, text: "alaladinniprajwal@gmail.com", color: "text-green-400" },
                                    { icon: Phone, text: "+91 9148776414", color: "text-blue-400" },
                                    { icon: Brain, text: "LeetCode: 1536", color: "text-yellow-400" },
                                    { icon: Award, text: "AWS certified (Coursera)", color: "text-orange-400" }
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                                        className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer group"
                                    >
                                        <item.icon className={`w-5 h-5 mr-3 ${item.color} group-hover:scale-110 transition-transform`} />
                                        <span className="text-sm">{item.text}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
