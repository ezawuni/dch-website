"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { 
    label: "Advisory", 
    content: "We deliver consulting services and solutions to startups, scaleups, and established organizations, refining strategic direction and embedding robust controls for performance and growth." 
  },
  { 
    label: "Technical Assistance", 
    content: "Tailored technical assistance to strengthen institutions, build capacity, and enhance service delivery across Ghana and West Africa. Our support spans agencies, private sector actors, and development partners." 
  },
  { 
    label: "Evaluation & MEL", 
    content: "Trusted partner for high-quality project and program evaluation. We bring methodological rigor and actionable insights to strategic decision-making and impact measurement." 
  },
  { 
    label: "Tech & Innovation", 
    content: "Database development, secure record management, digital payments, analytics dashboards, and AI-assisted reporting—enabling real-time, evidence-based decisions for clients." 
  },
];

const projects = [
  { 
    title: "Ghana Jobs & Skills Project", 
    description: "Nationwide tracer surveys and mixed-methods evaluation of a US $200m skills and jobs programme (World Bank)." 
  },
  { 
    title: "SME Grants Evaluation", 
    description: "End-of-grants evaluation, COVID-19 & SME windows, drafting World Bank Implementation Completion & Results Report (Ministry of Tourism)." 
  },
  { 
    title: "UNICEF Sahel Survey", 
    description: "Multi-round household survey across nine high-risk districts; emergency readiness analytics (UNICEF Ghana)." 
  },
];

const clients = ["World Bank", "UNICEF", "USAID", "GIZ", "Mastercard Foundation", "EU", "British Council"];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="font-sans bg-white">
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-emerald-800 text-white overflow-hidden">
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,77.3C1248,80,1344,64,1392,56L1440,48L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        {/* Logo Animation */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src="/logo.png" 
            alt="DCH Logo" 
            className="w-32 h-32 mb-6"
          />
        </motion.div>
        
        {/* Hero Content with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.3 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Powering Development<br/>Through Evidence Across Africa
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Helping governments, NGOs & businesses make data-driven decisions.
          </p>
          
          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg"
            >
              Get in Touch
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-white text-green-800 hover:bg-gray-100 transition-all duration-300 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg"
            >
              Explore Services
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "15+", label: "Countries Served" },
              { number: "120+", label: "Analytics Dashboards Built" },
              { number: "50+", label: "Active Partnerships" },
              { number: "1M+", label: "People Impacted" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="text-4xl font-bold text-green-700 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Latest Insights</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Protecting Ghana’s Cocoa Children: Insights from an Endline Evaluation</h3>
              <p className="text-gray-600 mb-4">
                Read how DCH partnered with Fairtrade Africa to support safer communities and improve child protection outcomes in Ghana's cocoa sector...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">August 15, 2023 • 5 min read</span>
                <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">Read more →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Floating Cards */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Who We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Mission",
                description: "Partnering with organisations to generate reliable evidence and turn it into practical actions that improve lives."
              },
              {
                icon: "🌐",
                title: "Vision",
                description: "A future where choices are guided by rigorous data, maximizing impact for all."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "Digital tools embedded from field data to real-time analytics, ensuring evidence-based decisions."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-green-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-green-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Tabbed Interface */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Our Services</h2>
          <div className="flex justify-center mb-8 gap-2 flex-wrap">
            {services.map((service, index) => (
              <button
                key={service.label}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-white text-green-800 border border-green-300 hover:border-green-400"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {service.label}
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <p className="text-gray-700 leading-relaxed">{services[activeTab].content}</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section with Card Grid */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Flagship Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
                className="bg-green-50 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-green-900 mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section with Animated Logos */}
      <section id="clients" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Valued Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 shadow-sm text-center"
              >
                <div className="text-green-800 font-semibold text-lg">{client}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Map Placeholder */}
      <section id="contact" className="py-16 px-4 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="mb-8">
            <div>12 Kenniffe Close, Tema Community 22, Ghana</div>
            <div>Phone: <a href="tel:+233203817101" className="hover:underline">+233 (0)203 817 101</a></div>
            <div>Email: <a href="mailto:devchangehub@gmail.com" className="hover:underline">devchangehub@gmail.com</a></div>
          </div>
          <div className="bg-green-800 bg-opacity-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-green-700 bg-opacity-50 border border-green-600" />
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-green-700 bg-opacity-50 border border-green-600" />
              <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded bg-green-700 bg-opacity-50 border border-green-600"></textarea>
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded font-semibold transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="bg-green-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <div className="text-xl font-bold mb-2">Development Change Hub</div>
              <div className="text-green-200">Powering development through evidence</div>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white hover:text-green-200 transition-colors">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-white hover:text-green-200 transition-colors">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-white hover:text-green-200 transition-colors">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="border-t border-green-700 mt-6 pt-6 text-center text-green-200">
            © {new Date().getFullYear()} Development Change Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
