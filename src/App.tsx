/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Globe, 
  Network, 
  Cloud, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  ChevronRight,
  Download,
  Terminal,
  Server,
  Zap
} from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' }
];

const skills = {
  Programming: ['Python', 'C', 'C++', 'Arduino (Advanced)'],
  'Networking & Security': ['CCNA Basics', 'VLAN', 'Routing', 'Switching', 'Linux Basics'],
  'Cloud & Tools': ['AWS Basics', 'VS Code', 'GitHub', 'Docker'],
  Other: ['MS Office', 'Canva', 'SEO', 'Content Writing', 'Communication']
};

const experience = [
  {
    title: 'STEAM Teacher',
    company: 'Nepatronix',
    period: '2026–Present',
    description: 'Teaching robotics, electronics, and programming. Conducting hands-on workshops and guiding student projects.'
  },
  {
    title: 'R&D Intern',
    company: 'Robotics Association of Nepal',
    period: '2023–2024',
    description: 'Arduino-based system development, circuit design (Proteus, EasyEDA), and sensor integration/debugging.'
  },
  {
    title: 'Advisor | Deputy Campus Director | Graphics Designer',
    company: 'Hult Prize at Cosmos College',
    period: '2023–2026',
    description: 'Managed multiple leadership and creative responsibilities. Provided strategic guidance as an Advisor, oversaw campus operations as Deputy Campus Director, and led visual branding as a Graphics Designer.'
  }
];

const projects = [
  {
    title: 'Smart Helmet for Accident Prevention',
    category: 'IoT + Safety System',
    description: 'Accident detection with GSM alert and GPS tracking system integrated into a motorcycle helmet.',
    tech: ['ESP32', 'GSM', 'GPS', 'Sensors'],
    image: 'https://i.postimg.cc/vZtZKm0n/Whats-App-Image-2026-02-15-at-13-36-52.jpg'
  },
  {
    title: 'Robotic Prosthetic Arm',
    category: 'Embedded Control',
    description: 'Sensor-controlled robotic arm using servo motors and advanced embedded control logic.',
    tech: ['Arduino', 'Servo Motors', 'EMG/Flex Sensors'],
    image: 'https://i.postimg.cc/X7hfvsW-w/Whats-App-Image-2024-09-03-at-19-41-15.jpg'
  },
  {
    title: 'Automatic Plant Watering System',
    category: 'Home Automation',
    description: 'Soil moisture automation system with LCD display and mobile monitoring via IoT protocols.',
    tech: ['NodeMCU', 'Soil Sensors', 'Blynk App'],
    image: 'https://i.postimg.cc/g222fWQg/baa0791b59bc18ff8084d45dbf8509d38368caaf.jpg'
  }
];

const services = [
  {
    title: 'Robotics Training',
    icon: <Cpu className="w-8 h-8" />,
    description: 'Comprehensive hands-on training for students and enthusiasts in robotics and automation.'
  },
  {
    title: 'Student Project Development',
    icon: <Zap className="w-8 h-8" />,
    description: 'End-to-end guidance and development support for engineering and academic projects.'
  },
  {
    title: 'PCB Design',
    icon: <Server className="w-8 h-8" />,
    description: 'Professional circuit design and PCB layout services using industry-standard tools.'
  },
  {
    title: 'IoT System Development',
    icon: <Globe className="w-8 h-8" />,
    description: 'Building custom IoT solutions with cloud integration and mobile monitoring.'
  }
];

const certifications = [
  'Generative AI Mastermind (2025)',
  'AWS Cloud Practitioner Training',
  'AWS Academy Cloud Architecting',
  'Google Tools Essentials',
  'Biomedical Instrumentation'
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Simple active section detection
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60] bg-white/5">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 nav-blur px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a 
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Terminal className="text-white w-5 h-5" />
            </div>
            <span className="text-gradient">Yubraj.S</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  activeSection === link.href.substring(1) ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px] animate-pulse delay-700" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 uppercase tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Available for Opportunities
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 flex flex-wrap gap-x-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Hi, I'm
              </motion.span>
              <span className="inline-block">
                {"Yubraj Shahi".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className={`text-gradient animate-gradient-x inline-block ${char === " " ? "mr-4" : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.6 + (index * 0.05), 
                      duration: 0.5,
                      ease: [0.215, 0.61, 0.355, 1]
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
            <motion.p 
              className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Electronics & Communication Engineer. Building smart systems with <span className="text-white font-medium">IoT</span>, <span className="text-white font-medium">Embedded Tech</span> & <span className="text-white font-medium">Cloud Integration</span>.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center gap-2 group transition-all">
                View Projects 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all">
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0] 
            }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
          >
            <div className="relative z-10 w-full max-w-[500px] mx-auto">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-white/10 card-blur relative group shadow-[0_0_50px_-12px_rgba(37,99,235,0.3)]">
                {/* Replace the URL below with your actual photo path */}
                <img 
                  src="https://i.postimg.cc/cLpJgxRC/IMG-9267.jpg" 
                  alt="Yubraj Shahi" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
                
                {/* Floating Badges */}
                <motion.div 
                  className="absolute -right-6 top-1/4 p-4 rounded-2xl bg-blue-600/90 backdrop-blur-md border border-white/20 shadow-2xl hidden lg:block"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <Cpu className="w-6 h-6 text-white mb-2" />
                  <div className="text-[10px] font-bold text-blue-100 uppercase tracking-widest">Specialist</div>
                  <div className="text-sm font-bold text-white">IoT Systems</div>
                </motion.div>

                <motion.div 
                  className="absolute -left-6 bottom-1/4 p-4 rounded-2xl bg-emerald-600/90 backdrop-blur-md border border-white/20 shadow-2xl hidden lg:block"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <Cloud className="w-6 h-6 text-white mb-2" />
                  <div className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest">Architect</div>
                  <div className="text-sm font-bold text-white">Cloud & Networking</div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row gap-16 items-center"
            {...fadeIn}
          >
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm mb-4">
                <span className="w-8 h-[1px] bg-blue-400/50" /> 01. About Me
              </div>
              <h2 className="text-4xl font-bold mb-8">Engineering a <span className="text-gradient">Smarter</span> Future</h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>
                  I am a passionate Electronics and Communication Engineering graduate based in Kathmandu, Nepal. My core expertise lies at the intersection of IoT systems, embedded development, and networking fundamentals.
                </p>
                <p>
                  With hands-on experience in building real-world solutions like smart safety systems and robotics, I bridge the gap between physical hardware and digital intelligence. Currently, I'm channeling my curiosity into Cloud Computing, Cybersecurity, and Data engineering to build more secure and scalable infrastructures.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-2xl font-bold text-white mb-1">Eng.</div>
                    <div className="text-sm">Bachelors Completed</div>
                  </div>
                  <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-2xl font-bold text-white mb-1">STEAM</div>
                    <div className="text-sm">Active Educator</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative group">
              <div className="aspect-square rounded-3xl overflow-hidden relative border-2 border-white/10 group-hover:border-blue-500/30 transition-all">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" alt="Engineering" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay group-hover:bg-transparent transition-all" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-3xl -z-10 blur-2xl opacity-50 group-hover:opacity-100 transition-all" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm mb-4">
              <span className="w-8 h-[1px] bg-blue-400/50" /> 02. Skills
            </div>
            <h2 className="text-4xl font-bold">Tech <span className="text-gradient">Stack</span> & Focus</h2>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {Object.entries(skills).map(([category, items]) => (
              <motion.div 
                key={category}
                variants={fadeIn}
                className="p-8 rounded-3xl card-blur"
              >
                <div className="flex items-center gap-3 mb-6">
                  {category === 'Programming' && <Code2 className="text-blue-500 w-6 h-6" />}
                  {category === 'Web' && <Globe className="text-emerald-500 w-6 h-6" />}
                  {category === 'Networking & Security' && <Network className="text-cyan-500 w-6 h-6" />}
                  {category === 'Cloud & Tools' && <Cloud className="text-blue-400 w-6 h-6" />}
                  {category === 'Other' && <Terminal className="text-purple-400 w-6 h-6" />}
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-300 hover:bg-white/10 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm mb-4">
              <span className="w-8 h-[1px] bg-blue-400/50" /> 03. Experience
            </div>
            <h2 className="text-4xl font-bold mb-4">Professional <span className="text-gradient">Journey</span></h2>
          </div>

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                className="flex gap-6 md:gap-12 relative"
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                  </div>
                  {idx !== experience.length - 1 && <div className="w-[2px] h-full bg-gradient-to-b from-blue-500/30 to-transparent mt-4" />}
                </div>
                <div className="pb-12">
                  <div className="text-sm font-mono text-emerald-400 mb-2 uppercase tracking-tighter">{exp.period}</div>
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <div className="text-blue-400 font-medium mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    {exp.company}
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm mb-4">
                <span className="w-8 h-[1px] bg-blue-400/50" /> 04. Projects
              </div>
              <h2 className="text-4xl font-bold">Engineering <span className="text-gradient">Showcase</span></h2>
            </div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group underline decoration-blue-500/30 underline-offset-4">
              View All on GitHub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                className="group rounded-3xl overflow-hidden card-blur flex flex-col"
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-blue-600 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-blue-600 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-xs font-mono text-blue-400 mb-2 uppercase tracking-widest">{project.category}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-8 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold px-2 py-1 bg-white/5 border border-white/5 rounded-md text-gray-400 uppercase tracking-tighter">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {['Weather Station (Cloud IoT)', 'Home Automation', 'Smart Parking', 'Obstacle Avoiding Robot', 'Gas Leakage Detection', 'Air Quality Monitoring'].map((p, i) => (
              <motion.div 
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors group flex items-center justify-between"
                {...fadeIn}
                transition={{ delay: 0.1 * i }}
              >
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-gray-200">{p}</h4>
                  <span className="text-[10px] font-mono text-gray-500 uppercase mt-1">Experimental Project</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm mb-4">
              <span className="w-8 h-[1px] bg-blue-400/50" /> 05. Services
            </div>
            <h2 className="text-4xl font-bold leading-tight">What I <span className="text-gradient">Deliver</span></h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                className="p-8 rounded-3xl card-blur text-center group hover:-translate-y-2 transition-all duration-300"
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-4">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-24 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-sm mb-4">
              <span className="w-8 h-[1px] bg-emerald-400/50" /> Education
            </div>
            <h2 className="text-3xl font-bold mb-8">Academic <span className="text-gradient">Foundation</span></h2>
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all">
                <div className="text-sm font-mono text-emerald-400 mb-2">2021 – 2025</div>
                <h3 className="text-xl font-bold mb-1">Bachelor in Electronics & Communication</h3>
                <p className="text-gray-400 text-sm">Engineering College, Nepal</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-sm font-mono text-gray-500 mb-2">2019 – 2021</div>
                <h3 className="text-lg font-bold mb-1">+2 Science</h3>
                <p className="text-gray-400 text-sm">Secondary Education</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm mb-4">
              <span className="w-8 h-[1px] bg-cyan-400/50" /> Certifications
            </div>
            <h2 className="text-3xl font-bold mb-8">Professional <span className="text-gradient">Growth</span></h2>
            <div className="grid gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-default">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-300 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Banner */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 py-16 bg-blue-600 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)] opacity-20" />
          <motion.div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12" {...fadeIn}>
            <div className="max-w-md">
              <Award className="w-12 h-12 text-white mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Recognized <span className="text-blue-200 italic">Excellence</span></h2>
              <div className="flex flex-col gap-4 text-blue-50 text-lg">
                <div className="flex items-center gap-3"><ChevronRight className="w-5 h-5" /> Full Scholarship (Engineering)</div>
                <div className="flex items-center gap-3"><ChevronRight className="w-5 h-5" /> 1st Runner-Up EEPEX Competition</div>
                <div className="flex items-center gap-3"><ChevronRight className="w-5 h-5" /> Robust Project Execution</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
               <button className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:scale-105 transition-transform flex items-center gap-3">
                 <Download className="w-6 h-6" /> Download Portfolio CV
               </button>
               <div className="text-center text-blue-100 text-sm font-medium">Over 10+ Tech Events Organized</div>
            </div>
          </motion.div>

          {/* Floating Blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm mb-4">
                <span className="w-8 h-[1px] bg-blue-400/50" /> 06. Contact
              </div>
              <h2 className="text-5xl font-bold mb-8">Get In <span className="text-gradient">Touch</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                I'm currently seeking opportunities in networking, cybersecurity, and IoT engineering. Whether you have a question or just want to connect, my inbox is always open.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-mono">Email Me</div>
                    <div className="text-xl font-bold hover:text-blue-400 transition-colors cursor-pointer">yubrajshahi395@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-mono">Call Me</div>
                    <div className="text-xl font-bold hover:text-emerald-400 transition-colors cursor-pointer">+977 9801799303</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/yubraj-shahi-02bb6b36a" },
                  { icon: <Github className="w-5 h-5" />, href: "#" },
                  { icon: <Globe className="w-5 h-5" />, href: "#" }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <motion.div {...fadeIn} className="p-10 rounded-[2.5rem] card-blur relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/10 select-none">
                SECURE_FORM_V3.0 // 128_BIT_ENCRYPTION
              </div>
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                  <input type="text" placeholder="Project Inquiry" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea placeholder="Your message here..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all font-medium resize-none" />
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            © 2026 Yubraj Shahi. Built with <span className="text-blue-500">React</span> & <span className="text-emerald-500">Tailwind</span>.
          </div>
          <div className="flex gap-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-xs text-gray-500 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
             <div className="w-2 h-2 rounded-full bg-emerald-500" /> Nepal, Kathmandu
          </div>
        </div>
      </footer>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-[#030712] border-l border-white/10 z-[70] p-8 flex flex-col gap-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gradient">Yubraj.S</span>
                <button onClick={() => setIsMenuOpen(false)}><X /></button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map(link => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold hover:text-blue-500"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="mt-auto">
                 <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl">
                   Resume / CV
                 </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
