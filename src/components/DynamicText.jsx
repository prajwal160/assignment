// DynamicText.jsx
import { useState, useEffect } from "react";

export default function DynamicText() {
    const words = ["Software Developer", "Web Developer"];
    const [index, setIndex] = useState(0);       // which word
    const [subIndex, setSubIndex] = useState(0); // letter index
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[index];

        // typing speed
        const speed = deleting ? 80 : 120;

        const timeout = setTimeout(() => {
            setSubIndex((prev) =>
                deleting ? prev - 1 : prev + 1
            );

            // if complete word typed → start deleting
            if (!deleting && subIndex === currentWord.length) {
                setTimeout(() => setDeleting(true), 700);
            }

            // if deleted completely → next word
            else if (deleting && subIndex === 0) {
                setDeleting(false);
                setIndex((prev) => (prev + 1) % words.length);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [subIndex, deleting]);

    return (
        <span className="text-primary-500 font-semibold">
            {words[index].substring(0, subIndex)}
            <span className="animate-pulse">|</span>
        </span>
    );
}
