export const projects = [
    {
        id: 1,
        title: "StudyNotion EdTech Platform",
        desc: "A comprehensive EdTech platform built with MERN stack featuring course creation, learning management, and secure payment integration.", // Changed from 'description'
        tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Razorpay", "Cloudinary"], // Changed from 'technologies'
        features: [
            "Developed a full-featured EdTech platform using the MERN stack, enabling smooth user experiences for course creation, learning, and ratings",
            "Engineered secure RESTful APIs for authentication, course management, and Razorpay-based payment integration",
            "Leveraged MongoDB Atlas and Cloudinary for scalable storage and deployed on Vercel & Render for global access"
        ],
        repo: "#", // Changed from 'githubUrl'
        live: "#", // Changed from 'liveUrl'
        image: "https://via.placeholder.com/400x200/6366f1/ffffff?text=StudyNotion", // Added missing image
        gradient: "from-blue-600 via-purple-600 to-cyan-600",
        icon: "🎓"
    },
    {
        id: 2,
        title: "Stack Overflow Clone",
        desc: "A fully responsive Stack Overflow clone with comprehensive Q&A functionality and user management system.",
        tech: ["React", "MongoDB", "JavaScript", "HTML", "CSS"],
        features: [
            "Executed a fully responsive Stack Overflow clone with key features using the MERN stack",
            "Configured efficient authentication system with seamless signup and login functionality",
            "Facilitated posting, deletion, and sharing of questions/answers with subscription system for premium features",
            "Formulated user dashboard for account management including account deletion capabilities"
        ],
        repo: "#",
        live: "#",
        image: "https://via.placeholder.com/400x200/f97316/ffffff?text=Stack+Overflow", // Added missing image
        gradient: "from-orange-500 via-red-500 to-pink-500",
        icon: "💭"
    },
    {
        id: 3, // ✅ Fixed: Changed from 2 to 3
        title: "Another Awesome Project", // ✅ Fixed: Made it a different project
        desc: "Your third project description here.",
        tech: ["React", "Node.js", "PostgreSQL"],
        features: [
            "Feature 1 of your third project",
            "Feature 2 of your third project",
            "Feature 3 of your third project"
        ],
        repo: "#",
        live: "#",
        image: "https://via.placeholder.com/400x200/10b981/ffffff?text=Project+3",
        gradient: "from-green-500 via-teal-500 to-blue-500",
        icon: "🚀"
    }
];