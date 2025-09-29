import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiUser, FiMessageCircle, FiSend, FiCheck, FiGithub, FiLinkedin, FiCode  } from "react-icons/fi";
import emailjs from "emailjs-com";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.send(
      "service_9nbhncv",
      "template_5ji252a",
      form,
      PUBLIC_KEY
    ).then(
      (result) => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      },
      (error) => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    );
  };

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/prajwal160", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/prajwal-alaladinni-070939245/", label: "LinkedIn" },
    { icon: FiCode , href: "https://leetcode.com/u/alaladinniprajwal/", label: "Leetcode" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
              <FiMail size={40} className="text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-[var(--muted)] text-xl max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Info Cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <motion.div
                className="group p-6 rounded-2xl bg-[var(--card)]/50 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <FiMail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-[var(--muted)] text-sm">prajwalalaladinni8@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="group p-6 rounded-2xl bg-[var(--card)]/50 backdrop-blur-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <FiMessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Response Time</h4>
                    <p className="text-[var(--muted)] text-sm">Usually within 24 hours</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-[var(--card)]/50 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-[var(--muted)] hover:text-cyan-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-white mb-2">Open to Opportunities</h4>
                <p className="text-[var(--muted)] text-sm">
                  Currently available for freelance projects and full-time positions. Let's build something amazing together!
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Form Container */}
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
              
              <div className="relative bg-[var(--card)]/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-[var(--muted)] mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <motion.div
                        className="absolute left-4 top-1/2 -translate-y-1/2"
                        animate={{
                          color: focusedField === "name" ? "#06b6d4" : "#9ca3af"
                        }}
                      >
                        <FiUser size={20} />
                      </motion.div>
                      <motion.input
                        type="text"
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 outline-none"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-[var(--muted)] mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <motion.div
                        className="absolute left-4 top-1/2 -translate-y-1/2"
                        animate={{
                          color: focusedField === "email" ? "#06b6d4" : "#9ca3af"
                        }}
                      >
                        <FiMail size={20} />
                      </motion.div>
                      <motion.input
                        type="email"
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 outline-none"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>
                  </motion.div>

                  {/* Message Input */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-[var(--muted)] mb-2">
                      Your Message
                    </label>
                    <div className="relative">
                      <motion.div
                        className="absolute left-4 top-4"
                        animate={{
                          color: focusedField === "message" ? "#06b6d4" : "#9ca3af"
                        }}
                      >
                        <FiMessageCircle size={20} />
                      </motion.div>
                      <motion.textarea
                        rows="6"
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 outline-none resize-none"
                        placeholder="Ask me anything or share feedback..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      className="relative w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <span className="relative flex items-center justify-center space-x-2">
                        <AnimatePresence mode="wait">
                          {status === "idle" && (
                            <motion.span
                              key="idle"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="flex items-center space-x-2"
                            >
                              <FiSend size={18} />
                              <span>Send Message</span>
                            </motion.span>
                          )}
                          
                          {status === "sending" && (
                            <motion.span
                              key="sending"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="flex items-center space-x-2"
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                <FiSend size={18} />
                              </motion.div>
                              <span>Sending...</span>
                            </motion.span>
                          )}
                          
                          {status === "success" && (
                            <motion.span
                              key="success"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="flex items-center space-x-2"
                            >
                              <FiCheck size={18} />
                              <span>Message Sent!</span>
                            </motion.span>
                          )}
                          
                          {status === "error" && (
                            <motion.span
                              key="error"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                            >
                              Failed to send. Try again.
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}