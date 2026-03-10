import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, GraduationCap } from "lucide-react";

export default function About() {
    const contactData = [
        { icon: MapPin, label: "Location", value: "Vijayapur, Karnataka" },
        { icon: Mail, label: "Email", value: "alaladinniprajwal@gmail.com" },
        { icon: Phone, label: "Phone", value: "+91 9148776414" }
    ];

    return (
        <section id="about" className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">About</h2>
                    <p className="mt-2 text-[var(--muted)] max-w-2xl">
                        A clear snapshot of who I am, what I build, and how I work.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-md"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-wide text-[var(--muted)]">Prajwal Alaladinni</p>
                                <h3 className="mt-1 text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
                                    Full Stack Developer
                                </h3>
                            </div>
                            <div className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:bg-cyan-400/20 dark:text-cyan-300">
                                Open to roles
                            </div>
                        </div>

                        <p className="mt-5 text-[var(--muted)] leading-relaxed">
                            Full Stack Developer specializing in the MERN stack with a B.Tech in Computer Science from IIIT Nagpur (2020-2024).
                            Experienced in building production-ready applications across EdTech, Q and A platforms, and enterprise systems.
                            Delivered solutions such as an AI-powered assessment platform using the Gemini API, secure payment workflows with Razorpay,
                            and employee monitoring tools with real-time tracking. Proven team collaborator with experience leading development teams
                            and shipping tools used by thousands of monthly users. Strong technical foundation with a LeetCode rating of 1536,
                            AWS certification, and deep expertise in RESTful APIs, authentication systems (JWT, OAuth, Firebase), and cloud deployments
                            using Vercel, Render, and MongoDB Atlas.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-5 shadow-md"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-700 dark:bg-cyan-400/20 dark:text-cyan-300 flex items-center justify-center">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--muted)]">Education</p>
                                    <p className="font-semibold text-slate-900 dark:text-white">IIIT Nagpur</p>
                                    <p className="text-sm text-[var(--muted)]">B.Tech Computer Science (2020-2024)</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-5 shadow-md"
                        >
                            <p className="text-sm text-[var(--muted)] mb-3">Contact</p>
                            <div className="space-y-3">
                                {contactData.map((item) => (
                                    <div key={item.label} className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200 flex items-center justify-center border border-slate-200/70 dark:border-white/10">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-[var(--muted)]">{item.label}</p>
                                            <p className="text-sm text-slate-900 dark:text-white">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

