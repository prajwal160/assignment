import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_9nbhncv", //YOUR_SERVICE_ID from EmailJS dashboard
      "template_5ji252a",    //TTemplate Id from EmailJS dashboard
      form,
       process.env.REACT_APP_EMAILJS_KEY // public key from EmailJS dashboard
    ).then(
      (result) => {
        alert("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      },
      (error) => {
        alert("Failed to send ❌");
      }
    );
  };

  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
      <div className="bg-[var(--card)] rounded-2xl p-6 shadow-soft-lg max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-3 rounded bg-transparent border border-white/6"
            placeholder="Your name"
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})} />
          <input className="w-full p-3 rounded bg-transparent border border-white/6"
            placeholder="Your email"
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})} />
          <textarea rows="5" className="w-full p-3 rounded bg-transparent border border-white/6"
            placeholder="Message"
            value={form.message}
            onChange={e => setForm({...form, message: e.target.value})} />
          <div>
            <button type="submit" className="px-5 py-3 rounded-full bg-primary-500 hover:bg-primary-700 text-white">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}