import React, { useState, useEffect } from "react";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import photo from "../assets/photo3.jpg";
import photop from "../assets/p.png";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");


  const handleScroll = () => {
    const sections = ["home", "about", "experience", "projects", "skills", "contact"];
    let scrollPos = window.scrollY + 100; 
    for (let sec of sections) {
      const element = document.getElementById(sec);
      if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
        setActive(sec);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    // { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/95 dark:bg-black/40 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
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
          {/* <span className="text-sm text-[var(--muted)] hidden md:inline">Aspiring Full-Stack Developer</span> */}
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} 
            // className="text-sm hover:text-primary-500 transition"
            className={`py-2 px-3 rounded-full transition-colors ${
            active === l.id ? "bg-cyan-400 text-black" : "text-slate-700 dark:text-white hover:bg-slate-200/60 dark:hover:bg-white/10"
        }`}
            >
              {l.label}
            </a>
          ))}
          <button
            className="p-2 rounded-md btn-focus text-slate-700 dark:text-white hover:bg-slate-200/60 dark:hover:bg-white/10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            className="p-2 rounded-md btn-focus text-slate-700 dark:text-white hover:bg-slate-200/60 dark:hover:bg-white/10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme small"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            className="p-2 rounded-md btn-focus text-slate-700 dark:text-white hover:bg-slate-200/60 dark:hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            <FiMenu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-3">
            {links.map(l => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="py-2 text-slate-700 dark:text-white hover:text-slate-900 dark:hover:text-cyan-300"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}



















// import React, { useState, useEffect, useRef } from "react";
// import { FiMoon, FiSun, FiMenu } from "react-icons/fi";
// import photo from "../assets/photo3.jpg";
// import photop from "../assets/p.png";

// export default function Navbar({ theme, setTheme }) {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState("home");
//   const [indicatorStyle, setIndicatorStyle] = useState({});
//   const [isScrolling, setIsScrolling] = useState(false);
//   const navRef = useRef(null);
//   const linksRef = useRef({});
//   const scrollTimeoutRef = useRef(null);

//   const handleScroll = () => {
//     // Don't update active state if user is manually scrolling after a click
//     if (isScrolling) return;

//     const sections = ["home", "about", "experience", "projects", "skills", "contact"];
//     let scrollPos = window.scrollY + 100; // add offset
//     for (let sec of sections) {
//       const element = document.getElementById(sec);
//       if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
//         setActive(sec);
//       }
//     }
//   };

//   const updateIndicator = (activeId) => {
//     const activeElement = linksRef.current[activeId];
//     if (activeElement && navRef.current) {
//       const navRect = navRef.current.getBoundingClientRect();
//       const activeRect = activeElement.getBoundingClientRect();
      
//       setIndicatorStyle({
//         width: `${activeRect.width}px`,
//         transform: `translateX(${activeRect.left - navRect.left}px)`,
//       });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     // Update indicator position when active changes
//     updateIndicator(active);
//   }, [active]);

//   useEffect(() => {
//     // Update indicator on window resize
//     const handleResize = () => updateIndicator(active);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [active]);

//   const handleNavClick = (id) => {
//     setActive(id);
//     setIsScrolling(true);
    
//     // Clear any existing timeout
//     if (scrollTimeoutRef.current) {
//       clearTimeout(scrollTimeoutRef.current);
//     }
    
//     // Smooth scroll to section
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
    
//     // Re-enable scroll handling after smooth scroll completes
//     scrollTimeoutRef.current = setTimeout(() => {
//       setIsScrolling(false);
//     }, 1000); // Adjust timing based on your smooth scroll duration
//   };

//   // Cleanup timeout on unmount
//   useEffect(() => {
//     return () => {
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current);
//       }
//     };
//   }, []);

//   const links = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "experience", label: "Experience" },
//     { id: "projects", label: "Projects" },
//     { id: "skills", label: "Skills" },
//     { id: "contact", label: "Contact" }
//   ];

//   return (
//     <nav className="sticky top-0 z-50 backdrop-blur bg-black/30 dark:bg-black/50 border-b border-cyan-400/30">
//       <div className="max-w-6xl mx-auto flex items-center justify-between">
//         <div className="flex items-center">
//           <div className="w-12 h-12 rounded-full overflow-hidden">
//             <img
//               src={photo}
//               alt="Prajwal Alaladinni"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="-ml-3 flex items-center">
//             <img src={photop} alt="Logo P" className="w-20" />
//             <div className="-ml-5 text-2xl font-bold">rajwal</div>
//           </div>
//         </div>

//         <div className="hidden md:flex items-center gap-6">
//           <div ref={navRef} className="relative flex items-center gap-6">
//             {/* Animated background indicator */}
//             <div
//               className="absolute top-0 h-full bg-cyan-400 rounded-md transition-all duration-300 ease-out"
//               style={indicatorStyle}
//             />
            
//             {links.map(l => (
//               <a 
//                 key={l.id} 
//                 ref={el => linksRef.current[l.id] = el}
//                 href={`#${l.id}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavClick(l.id);
//                 }}
//                 className={`relative z-10 py-2 px-3 rounded-md transition-colors duration-200 ${
//                   active === l.id ? "text-black font-medium" : "text-white hover:text-cyan-300"
//                 }`}
//               >
//                 {l.label}
//               </a>
//             ))}
//           </div>
          
//           <button
//             className="p-2 rounded-md btn-focus ml-4"
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             aria-label="Toggle theme"
//           >
//             {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
//           </button>
//         </div>

//         <div className="md:hidden flex items-center gap-3">
//           <button
//             className="p-2 rounded-md btn-focus"
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             aria-label="Toggle theme small"
//           >
//             {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
//           </button>

//           <button 
//             className="p-2 rounded-md btn-focus" 
//             onClick={() => setOpen(!open)} 
//             aria-label="Open menu"
//           >
//             <FiMenu size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="md:hidden px-6 pb-6">
//           <div className="flex flex-col gap-3">
//             {links.map(l => (
//               <a 
//                 key={l.id} 
//                 href={`#${l.id}`} 
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setOpen(false);
//                   handleNavClick(l.id);
//                 }} 
//                 className={`py-2 transition-colors ${
//                   active === l.id ? "text-cyan-400 font-medium" : "text-white"
//                 }`}
//               >
//                 {l.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
