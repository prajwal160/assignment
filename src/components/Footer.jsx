import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import photo from "../assets/photo3.jpg";
import photop from "../assets/p.png";

export default function Footer() {
    return (
        <footer className="mt-12 py-8 border-t border-[var(--border)] bg-white/90 dark:bg-black/20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
                <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                            src={photo}
                            alt="Prajwal Alaladinni"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="-ml-3 flex items-center">
                        <img src={photop} alt="Logo P" className="w-20" />
                        <div className="-ml-5 text-2xl font-bold text-slate-900 dark:text-white">rajwal</div>
                    </div>
                </div>

                <div className="flex items-center gap-6 text-slate-700 dark:text-white">
                    <a
                        href="https://www.linkedin.com/in/prajwal-alaladinni-070939245/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-500 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/prajwal160"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-500 transition"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://leetcode.com/u/alaladinniprajwal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-500 transition"
                    >
                        <SiLeetcode size={24} />
                    </a>
                </div>

                <div className="text-sm text-slate-500 dark:text-white/70 text-center mt-4">
                    (c) {new Date().getFullYear()} Prajwal Alaladinni - Built with React + Tailwind
                    <br />
                    Made with love
                </div>
            </div>
        </footer>
    );
}
