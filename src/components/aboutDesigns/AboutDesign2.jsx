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
        { key: "leetcode", value: "1536", icon: Brain },
        { key: "aws_cert", value: "Coursera Certified", icon: Award }
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
