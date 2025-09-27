import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-12">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold mb-4">About Me</motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-[var(--card)] rounded-2xl p-6 shadow-soft-lg">
                    <p className="text-[var(--muted)]">
                        I’m Prajwal — B.Tech (CSE) from IIIT Nagpur (2020–2024). I enjoy building full-stack apps using MERN, designing secure auth systems, and solving algorithmic problems. I’ve done internships in frontend & full-stack roles and deployed production apps for real users.
                    </p>

                    <div className="mt-4">
                        <h4 className="font-semibold">Education</h4>
                        <p className="text-sm text-[var(--muted)] mt-1">Indian Institute of Information Technology, Nagpur — B.Tech. Computer Science (2020 - 2024)</p>
                    </div>
                </div>

                <div className="bg-[var(--card)] rounded-2xl p-6 text-sm shadow-soft-lg">
                    <h4 className="font-semibold">Quick facts</h4>
                    <ul className="mt-3 space-y-2 text-[var(--muted)]">
                        <li>📍 Vijayapur, Karnataka</li>
                        <li>✉️ alaladinniprajwal@gmail.com</li>
                        <li>📞 +91 9148776414</li>
                        <li>🧠 LeetCode: 1536</li>
                        <li>☁️ AWS certified (Coursera)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
