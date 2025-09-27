import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
    const shouldReduce = useReducedMotion();

    return (
        <section id="projects" className="py-12">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((p, i) => {
                    const loopAnim = shouldReduce ? {} : {
                        y: [40, 0, -40],
                        opacity: [0, 1, 0],
                        transition: {
                            duration: 8 + i * 1.2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 2
                        }
                    };

                    return (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={loopAnim}
                            whileHover={{ scale: 1.02 }}
                            className="group bg-[var(--card)] rounded-2xl overflow-hidden shadow-soft-lg relative"
                        >
                            <div className="h-40 bg-gradient-to-br from-black/10 to-white/3 overflow-hidden">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="p-4">
                                <h3 className="font-semibold mb-1">{p.title}</h3>
                                <p className="text-[var(--muted)] text-sm mb-3">{p.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-3">
                                    {p.tech.map((t, idx) => <span className="text-xs bg-white/5 px-2 py-1 rounded" key={idx}>{t}</span>)}
                                </div>

                                <div className="flex gap-3">
                                    <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md border border-white/6 hover:bg-white/5">GitHub</a>
                                    <a href={p.live} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md bg-primary-500 hover:bg-primary-700 text-white">Live Demo</a>
                                </div>
                            </div>

                            {/* hover overlay to emphasize disappearance into dark -- small glow effect */}
                            <div className="pointer-events-none absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100">
                                <div className="w-full h-full bg-gradient-to-b from-transparent to-black/60 mix-blend-overlay" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
