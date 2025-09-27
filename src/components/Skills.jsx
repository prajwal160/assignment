import React from "react";
import { motion } from "framer-motion";
import {
    SiJavascript, SiPython, SiHtml5, SiCss3, SiReact, SiRedux, SiNodedotjs, SiMongodb, SiBootstrap, SiTailwindcss, SiFigma, SiDjango
} from "react-icons/si";
import { FaJava, FaCloud } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";

// Optional: import custom images for skills without icons
import RazorpayImg from "../assets/razorpay.png";
import MaterialUI from "../assets/MaterialUI.svg";

// Skill categories
const categories = {
    "Course Work": [
        "Computer Networks",
        "DBMS",
        "OOP",
        "Operating Systems",
        "Data Structures & Algorithms",
        "Big Data",
        "Cloud Computing",
    ],
    "Programming Languages": ["JavaScript", "Java", "Python", "SQL"],
    "Markup & Styling": ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "Material UI", "Figma"],
    "Frameworks & Libraries": ["React", "Redux", "Node.js", "Express.js", "Django"],
    "Tools & Platforms": ["MongoDB", "Cloudinary", "Razorpay", "AWS", "Git"]
};

// Map skills to icons or images
const skillIcons = {
    "JavaScript": <SiJavascript size={16} />,
    "Java": <FaJava size={16} />,
    "Python": <SiPython size={16} />,
    "SQL": <BsDatabase size={16} />,
    "HTML": <SiHtml5 size={16} />,
    "CSS": <SiCss3 size={16} />,
    "Tailwind CSS": <SiTailwindcss size={16} />,
    "Bootstrap": <SiBootstrap size={16} />,
    "Material UI": <img src={MaterialUI} alt="Material UI" className="w-4 h-4 object-contain" />,
    "Figma": <SiFigma size={16} />,
    "React": <SiReact size={16} />,
    "Redux": <SiRedux size={16} />,
    "Node.js": <SiNodedotjs size={16} />,
    "Express.js": <FaCloud size={16} />,
    "Django": <SiDjango size={16} />,
    "MongoDB": <SiMongodb size={16} />,
    "Cloudinary": <FaCloud size={16} />,
    "Razorpay": <img src={RazorpayImg} alt="Razorpay" className="w-4 h-4 object-contain" />,
    "AWS": <FaCloud size={16} />,
    "Git": <FaCloud size={16} />,
    "Data Structures & Algorithms": <FaCloud size={16} />,
    "DBMS": <BsDatabase size={16} />,
    "Computer Networks": <GiNetworkBars size={16} />,
    "Operating Systems": <FaCloud size={16} />,
    "OOP": <FaCloud size={16} />,
    "Big Data": <FaCloud size={16} />,
    "Cloud Computing": <FaCloud size={16} />
};

export default function Skills() {
    return (
        <section id="skills" className="py-12">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(categories).map(([cat, items]) => (
                    <motion.div
                        key={cat}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[var(--card)] rounded-2xl p-4 shadow-soft-lg"
                    >
                        <h3 className="font-semibold mb-3">{cat}</h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-white/5 rounded text-sm flex items-center gap-1"
                                >
                                    {skillIcons[skill] && skillIcons[skill]} {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
