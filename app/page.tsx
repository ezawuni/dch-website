"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { label: "Advisory", content: "We deliver consulting services and solutions to startups, scaleups, and established organizations, refining strategic direction and embedding robust controls for performance and growth." },
  { label: "Technical Assistance", content: "Tailored technical assistance to strengthen institutions, build capacity, and enhance service delivery across Ghana and West Africa. Our support spans agencies, private sector actors, and development partners." },
  { label: "Evaluation & MEL", content: "Trusted partner for high-quality project and program evaluation. We bring methodological rigor and actionable insights to strategic decision-making and impact measurement." },
  { label: "Tech & Innovation", content: "Database development, secure record management, digital payments, analytics dashboards, and AI-assisted reporting—enabling real-time, evidence-based decisions for clients." },
];

const projects = [
  { title: "Ghana Jobs & Skills Project", description: "Nationwide tracer surveys and mixed-methods evaluation of a US $200m skills and jobs programme (World Bank)." },
  { title: "SME Grants Evaluation", description: "End-of-grants evaluation, COVID-19 & SME windows, drafting World Bank Implementation Completion & Results Report (Ministry of Tourism)." },
  { title: "UNICEF Sahel Survey", description: "Multi-round household survey across nine high-risk districts; emergency readiness analytics (UNICEF Ghana)." },
];

const clients = ["World Bank", "UNICEF", "USAID", "GIZ", "Mastercard Foundation", "EU", "British Council"];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-green-900 text-white text-center px-4">
        <motion.img src="/logo.png" alt="DCH Logo" className="z-10 w-36 h-36 mb-6"
          initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5 }} />
        <motion.h1 className="z-10 text-4xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1.3 }}>
          Powering Development <br /> Through Evidence Across Africa
        </motion.h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">Helping governments, NGOs & businesses make data-driven decisions.</p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <motion.a href="#contact" whileHover={{ scale: 1.07 }}
            className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded text-lg font-semibold">
            Get in Touch
          </motion.a>
          <motion.a href="#services" whileHover={{ scale: 1.07 }}
            className="bg-white text-green-900 hover:bg-gray-100 transition px-8 py-3 rounded text-lg font-semibold">
            Our Services
          </motion.a>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { k: "15+", v: "Countries" },
            { k: "120+", v: "Dashboards" },
            { k: "50+", v: "Partners" },
            { k: "1M+", v: "People Reached" }
          ].map(stat => (
            <div key={stat.v} className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-extrabold text-green-700">{stat.k}</div>
              <div className="text-gray-600">{stat.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Latest from Our Blog</h2>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Protecting Ghana’s Cocoa Children: Insights from an Endline Evaluation</h3>
          <p className="text-sm text-gray-700">Read how DCH partnered with Fairtrade Africa to support safer communities and improve child protection outcomes in Ghana's cocoa sector...</p>
          <a href="/blog" className="text-orange-600 underline">Read more</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Who We Are</h2>
        <p className="mb-4 text-gray-700">Development Change Hub (DCH) is a Ghana-incorporated, Africa-rooted consultancy that converts hard evidence into high-impact action.</p>
        <div className="flex flex-col md:flex-row gap-6 mt-8 justify-center">
          {[
            { title: "Mission", body: "Partnering with organisations to generate reliable evidence and turn it into practical actions." },
            { title: "Vision", body: "A future where choices are guided by rigorous data, maximizing impact." },
            { title: "Innovation", body: "Digital tools embedded from field data to real-time analytics." }
          ].map(item => (
            <motion.div key={item.title} className="flex-1 bg-gray-100 rounded-xl p-6 shadow-md"
              whileHover={{ scale: 1.03 }}>
              <div className="font-bold text-green-700 text-xl mb-2">{item.title}</div>
              <div className="text-gray-700">{item.body}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Our Services</h2>
        <div className="flex justify-center mb-8 gap-2 flex-wrap">
          {services.map((s, i) => (
            <button key={s.label}
              className={`px-5 py-2 rounded-lg font-semibold ${activeTab === i ? "bg-green-600 text-white" : "bg-white text-green-800 border"}`}
              onClick={() => setActiveTab(i)}>
              {s.label}
            </button>
          ))}
        </div>
        <motion.div key={activeTab} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto bg-white rounded-xl p-6 shadow">
          <p className="text-gray-700">{services[activeTab].content}</p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Flagship Projects</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {projects.map(proj => (
            <motion.div key={proj.title} whileHover={{ scale: 1.04 }} className="flex-1 bg-green-50 p-6 rounded-xl shadow-md">
              <div className="font-semibold text-green-900 text-lg mb-2">{proj.title}</div>
              <div className="text-gray-700 text-sm">{proj.description}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="bg-white py-14 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">Clients & Partners</h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
          className="flex flex-wrap justify-center gap-8">
          {clients.map(client => (
            <div key={client} className="bg-gray-50 rounded-full shadow px-6 py-3 font-semibold text-green-900">
              {client}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-green-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="mb-4">
          <div>12 Kenniffe Close, Tema Community 22, Ghana</div>
          <div>Phone: <a className="underline" href="tel:+233203817101">+233 (0)203 817 101</a></div>
          <div>Email: <a className="underline" href="mailto:devchangehub@gmail.com">devchangehub@gmail.com</a></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4">
        © {new Date().getFullYear()} Development Change Hub (DCH). All Rights Reserved.
      </footer>
    </main>
  );
}
