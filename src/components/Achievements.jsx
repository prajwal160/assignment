import React from "react";

const achievements = [
    { title: "LeetCode Rating", value: "1536" },
    { title: "AWS Certification", value: "Coursera" },
    { title: "Nullclass Internship", value: "Jun 2024 - Dec 2024" },
    { title: "IEEE Fall Internship", value: "Oct 2023 - Dec 2023" }
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-12">
            <h2 className="text-2xl font-bold mb-6">Achievements</h2>
            <div className="grid md:grid-cols-4 gap-4">
                {achievements.map((a, i) => (
                    <div key={i} className="bg-[var(--card)] p-4 rounded-2xl shadow-soft-lg">
                        <div className="text-xs text-[var(--muted)]">{a.title}</div>
                        <div className="mt-2 font-semibold">{a.value}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
