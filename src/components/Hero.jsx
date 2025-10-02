import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

import photo from "../assets/photo3-removebg-preview.png";
import "../index.css";
import BlobHero from './BlobHero'; 

export default function Hero() {
    return (
        <section id="home" className="py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <motion.h1 initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        Hi, I’m Prajwal <span className="wave-hand" aria-hidden="true">👋</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-3 text-lg text-[var(--muted)] max-w-2xl">
                        Full-Stack Developer • MERN • Java Enthusiast. I build scalable web apps and enjoy solving problems with clean code.
                    </motion.p>

                    <div className="mt-6 flex flex-wrap gap-4 items-center">
                        <a href="https://drive.google.com/file/d/1aMNTK1fcDaWLw3zQ6i4fUR8UngxfKGyj/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary-500 hover:bg-primary-700 text-white shadow">
                            Download Resume
                        </a>
                        <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-white">
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-6 flex gap-4 items-center">
                        <a href="https://www.linkedin.com/in/prajwal-alaladinni-070939245/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-white/6"><FaLinkedin size={24} /></a>
                        <a href="https://github.com/prajwal160" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-white/6"><FaGithub size={24} /></a>
                        <a href="https://leetcode.com/u/alaladinniprajwal/" target="_blank" rel="noreferrer" aria-label="LeetCode" className="p-2 rounded-lg hover:bg-white/6"><SiLeetcode size={24} /></a>
                        <a href="https://www.geeksforgeeks.org/user/prajwal_160/" target="_blank" rel="noreferrer" aria-label="GeeksforGeeks" className="p-2 rounded-lg hover:bg-white/6"><SiGeeksforgeeks size={24} /></a>
                    </div>
                </div>

                {/* <motion.div className="w-full flex justify-center md:justify-end">
                    <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="w-60 h-66 md:w-72 md:h-76 rounded-lg overflow-hidden ring-2 ring-primary-500/40">
                        <img src={photo} alt="Prajwal profile" className="w-full h-full object-cover" />
                    </motion.div>
                </motion.div> */}
                <BlobHero />
            </div>
        </section>
    );
}
