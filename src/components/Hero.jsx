import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import "../index.css";
import BlobHero from "./BlobHero";
import DynamicText from "./DynamicText";

export default function Hero() {
    return (
        <section id="home" className="py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <motion.h1
                        initial={{ x: -40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white"
                    >
                        Hi, I'm Prajwal
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className="mt-3 text-lg text-[var(--muted)] max-w-2xl"
                    >
                        I am a <DynamicText />.
                        <br />
                        I build scalable web apps and enjoy solving problems with clean code.
                    </motion.p>

                    <div className="mt-6 flex flex-wrap gap-4 items-center">
                        <a
                            href="https://drive.google.com/file/d/1aMNTK1fcDaWLw3zQ6i4fUR8UngxfKGyj/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-900 dark:hover:bg-cyan-400 shadow"
                        >
                            Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-6 flex gap-4 items-center">
                        <a
                            href="https://www.linkedin.com/in/prajwal-alaladinni-070939245/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/prajwal160"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://leetcode.com/u/alaladinniprajwal/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LeetCode"
                            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10"
                        >
                            <SiLeetcode size={24} />
                        </a>
                        <a
                            href="https://www.geeksforgeeks.org/user/prajwal_160/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GeeksforGeeks"
                            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10"
                        >
                            <SiGeeksforgeeks size={24} />
                        </a>
                    </div>
                </div>

                <BlobHero />
            </div>
        </section>
    );
}
