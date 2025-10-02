// import { useState } from "react";

// const experiences = [
//     {
//         company: "Isourse Technologies Pvt Ltd",
//         role: "Software Engineer intern",
//         duration: "June 2025 - Present",
//         location: "in-office (Delhi)",
//         details: [
//             "Developed responsive web apps with JavaScript",
//             "Integrated REST APIs for real-time updates",
//             "Worked on optimizing performance & SEO",
//         ],
//     },
//     {
//         company: "IEEE Bombay Section + Alhansat internship",
//         role: "Software Engineer internship",
//         duration: "Mar 2023 - Apr 2024",
//         location: "Remote",
//         details: [
//             "Worked on SMS Automations",
//             "Integrated Hubspot and Mailchimp",
//             "Built automated workflows from scratch",
//         ],
//     },
//     {
//         company: "NullClass",
//         role: "Fullstack Developer internship",
//         duration: "May 2024 - Present",
//         location: "Remote",
//         details: [
//             "Building fullstack apps with MERN stack",
//             "Implemented authentication & authorization",
//             "Worked on cloud deployment with AWS",
//         ],
//     },
// ];

// export default function WorkExperience() {
//     const [active, setActive] = useState(2); // Default Emitrr

//     return (
//         <section id="experience" className="max-w-6xl mx-auto px-6 py-12">
//             <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Work Experience</h2>
//             <p className="text-gray-600 dark:text-gray-400 mb-8">
//                 I switch a lot of companies. It's mostly about the culture.
//             </p>

//             <div className="flex flex-col md:flex-row gap-8">
//                 {/* Left Sidebar */}
//                 <div className="flex flex-col space-y-2 md:w-1/4">
//                     {experiences.map((exp, index) => (
//                         <button
//                             key={exp.company}
//                             onClick={() => setActive(index)}
//                             className={`text-left px-4 py-2 rounded-lg transition ${active === index
//                                     ? "bg-blue-500 text-white font-semibold"
//                                     : "text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-200/30 dark:hover:bg-blue-500/40"
//                                 }`}
//                         >
//                             {exp.company}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Right Content */}
//                 <div className="md:w-3/4 bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
//                     <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                         {experiences[active].role}{" "}
//                         <span className="text-blue-500 dark:text-blue-400">
//                             @{experiences[active].company}
//                         </span>
//                     </h3>
//                     <p className="text-gray-700 dark:text-gray-400 mt-1">{experiences[active].duration}</p>
//                     <p className="text-gray-600 dark:text-gray-500 mb-4">{experiences[active].location}</p>

//                     <ul className="space-y-2">
//                         {experiences[active].details.map((item, i) => (
//                             <li key={i} className="flex items-start gap-2 text-gray-800 dark:text-gray-300">
//                                 <span className="text-green-500">✔</span> {item}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     );
// }


import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Isourse Technologies Pvt Ltd",
        role: "Software Engineer intern",
        duration: "June 2025 - Present",
        location: "in-office (Delhi)",
        details: [
            "Developed responsive web apps with JavaScript",
            "Integrated REST APIs for real-time updates",
            "Worked on optimizing performance & SEO",
        ],
    },
    {
        company: "IEEE Bombay Section + Alhansat internship",
        role: "Software Engineer internship",
        duration: "Mar 2023 - Apr 2024",
        location: "Remote",
        details: [
            "Worked on SMS Automations",
            "Integrated Hubspot and Mailchimp",
            "Built automated workflows from scratch",
        ],
    },
    {
        company: "NullClass",
        role: "Fullstack Developer internship",
        duration: "May 2024 - Present",
        location: "Remote",
        details: [
            "Building fullstack apps with MERN stack",
            "Implemented authentication & authorization",
            "Worked on cloud deployment with AWS",
        ],
    },
];

export default function WorkExperience() {
    const [active, setActive] = useState(0); // Default active
    const btnRefs = useRef({});
    const [dotPosition, setDotPosition] = useState({ top: 0 });

    // Update dot position whenever active changes
    useEffect(() => {
        if (btnRefs.current[active]) {
            const el = btnRefs.current[active];
            setDotPosition({ top: el.offsetTop + el.offsetHeight / 2 - 6 }); // center dot vertically
        }
    }, [active]);

    return (
        <section id="experience" style={{ scrollMarginTop: "40px" }} className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Work Experience</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                I switch a lot of companies. It's mostly about the culture.
            </p>

            <div className="flex flex-col md:flex-row gap-8 relative">

                {/* Left Sidebar */}
                <div className="relative md:w-1/4 flex flex-col items-start pl-6 space-y-3">
                    <div className="relative w-full space-y-3">
                        {/* Left Vertical Line (outside sidebar) */}
                        <div className="absolute -left-5 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>

                        {/* Animated Dot */}
                        <motion.div
                            layout
                            initial={false}
                            animate={{ top: dotPosition.top }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className="absolute -left-6 w-3 h-3 bg-cyan-400 rounded-full shadow-lg z-10"
                        />

                        {/* Buttons */}
                        {experiences.map((exp, index) => (
                            <button
                                key={exp.company}
                                ref={(el) => (btnRefs.current[index] = el)}
                                onClick={() => setActive(index)}
                                className={`text-left px-6 py-2 w-full rounded-lg transition-colors ${active === index
                                    ? "bg-blue-500 text-white font-semibold"
                                    : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-200/30 dark:hover:bg-blue-500/40"
                                    }`}
                            >
                                {exp.company}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Content */}
                <div className="md:w-3/4 bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {experiences[active].role}{" "}
                        <span className="text-blue-500 dark:text-blue-400">
                            @{experiences[active].company}
                        </span>
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400 mt-1">{experiences[active].duration}</p>
                    <p className="text-gray-600 dark:text-gray-500 mb-4">{experiences[active].location}</p>

                    <ul className="space-y-2">
                        {experiences[active].details.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-800 dark:text-gray-300">
                                <span className="text-green-500">✔</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
