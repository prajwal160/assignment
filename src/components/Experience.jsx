import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Isourse Technologies Pvt Ltd",
        role: "Software Engineer Intern",
        duration: "June 2025 - Present",
        location: "In-office (Delhi)",
        details: [
            "Developed an AI-powered assessment module using Gemini API to generate custom questions with difficulty levels (easy, medium, hard), enabling automated test creation and management",
            "Built a comprehensive task management system with role-based assignment, document uploads, approval workflows, and status tracking (pending, approval pending, approved, rejected)",
            "Implemented employee monitoring system with screen tracking via webcam, active hours calculation, break time monitoring, and Chrome extension for tab activity tracking",
            "Created secure authentication system with Google OAuth and JWT-based session management for offer letter generation platform",
            "Designed and integrated a vibrant reward system for user engagement with responsive frontend interface and backend logic"
        ]
    },
    {
        company: "IEEE Bombay Section and Alhansat Solutions",
        role: "Frontend Intern",
        duration: "Oct 2023 - Dec 2023",
        location: "Remote",
        details: [
            "Created a Svelte-based Dummy Text Generator tool with external API integration",
            "Led and coordinated a 5-member team to successfully launch the project",
            "Initiated and led efforts to identify and resolve issues, resulting in improved team cohesion and project efficiency",
            "Built a dynamic offer-letter creation system used by HR teams and client vendors to generate fully customizable offer letters with real-time preview and branding controls",
            "Implemented editable templates, drag-and-drop placeholders, signature configuration, and alignment options to streamline offer-letter formatting for both internal HR and external vendor partners"
        ]
    },
    {
        company: "NullClass",
        role: "Full Stack Developer Intern",
        duration: "May 2024 - Present",
        location: "Remote",
        details: [
            "Developed and deployed full-stack web applications using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB, ensuring seamless user experiences",
            "Designed a vibrant reward system for user engagement, integrating backend logic with a responsive frontend interface",
            "Implemented Google Authentication and secure user session management with Firebase Authentication and JWT"
        ]
    }
];

export default function WorkExperience() {
    const [active, setActive] = useState(0);
    const btnRefs = useRef({});
    const [dotPosition, setDotPosition] = useState({ top: 0 });

    useEffect(() => {
        if (btnRefs.current[active]) {
            const el = btnRefs.current[active];
            setDotPosition({ top: el.offsetTop + el.offsetHeight / 2 - 6 });
        }
    }, [active]);

    return (
        <section id="experience" style={{ scrollMarginTop: "40px" }} className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Work Experience</h2>
            <p className="text-[var(--muted)] mb-8">
                Focused on impact, ownership, and steady delivery.
            </p>

            <div className="flex flex-col md:flex-row gap-8 relative">
                <div className="relative md:w-1/4 flex flex-col items-start pl-6 space-y-3">
                    <div className="relative w-full space-y-3">
                        <div className="absolute -left-5 top-0 h-full w-0.5 bg-slate-200 dark:bg-gray-600"></div>

                        <motion.div
                            layout
                            initial={false}
                            animate={{ top: dotPosition.top }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className="absolute -left-6 w-3 h-3 bg-cyan-400 rounded-full shadow-lg z-10"
                        />

                        {experiences.map((exp, index) => (
                            <button
                                key={exp.company}
                                ref={(el) => (btnRefs.current[index] = el)}
                                onClick={() => setActive(index)}
                                className={`text-left px-6 py-2 w-full rounded-lg transition-colors ${active === index
                                    ? "bg-slate-900 text-white font-semibold dark:bg-cyan-500 dark:text-slate-900"
                                    : "bg-slate-100 dark:bg-gray-900 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-blue-500/40"
                                    }`}
                            >
                                {exp.company}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="md:w-3/4 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {experiences[active].role}{" "}
                        <span className="text-blue-500 dark:text-blue-400">
                            @{experiences[active].company}
                        </span>
                    </h3>
                    <p className="text-slate-700 dark:text-gray-400 mt-1">{experiences[active].duration}</p>
                    <p className="text-[var(--muted)] mb-4">{experiences[active].location}</p>

                    <ul className="space-y-2">
                        {experiences[active].details.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-800 dark:text-gray-300">
                                <span className="text-cyan-500">-</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

