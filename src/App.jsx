import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Layers, 
  Zap, 
  ChevronRight, 
  Monitor, 
  Globe, 
  Menu, 
  X,
  Send,
  MessageSquare,
  CheckCircle2,
  Rocket,
  Bird
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Mock Data ---
const projects = [
  {
    title: "E-Commerce Website",
    desc: "React + Tailwind based responsive UI. Product listing & Add to Cart system with API integrated dynamic data.",
    tech: ["React", "Tailwind", "API"],
    live: "https://velourafashions.netlify.app/",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Health Management System",
    desc: "Responsive UI with structured dashboard and full-stack based features for health monitoring.",
    tech: ["React", "Dashboard", "Full-Stack"],
    live: "https://healthcheck-pro-bd.netlify.app/",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Pet Adoption Website",
    desc: "Clean and responsive design built with core web technologies for a seamless adoption experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://sifat668916.github.io/Peddy-Pet-Adoption/",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80"
  }
];

const skills = {
  "Programming Languages": [
    { name: "Javascript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Typescript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" }
  ],
  "Front End": [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
  ],
  "CMS": [
    { name: "WIX", logo: "https://www.vectorlogo.zone/logos/wix/wix-icon.svg" },
    { name: "Wordpress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" }
  ],
  "Database": [
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ],
  "Deployment": [
    { name: "Hostinger", logo: "https://www.vectorlogo.zone/logos/hostinger/hostinger-icon.svg" },
    { name: "Netlify", logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
    { name: "Vercel", logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" }
  ]
};

const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/sifathossain04/",
  github: "https://github.com/Sifat668916",
  twitter: "https://x.com/SifatHo72418378",
  email: "mailto:isifat733@gmail.com"
};

const blogs = [
  {
    id: 1,
    title: "Mastering React Hooks",
    excerpt: "A deep dive into how hooks revolutionized state management in React...",
    content: "Full content about React hooks and their usage in modern web development. Hooks allow you to use state and other React features without writing a class. They provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle.",
    date: "April 20, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Tailwind CSS: Better Productivity",
    excerpt: "Why utility-first CSS is the best way to build responsive layouts quickly...",
    content: "Complete guide to Tailwind CSS and how it improves developer experience. Tailwind CSS works by scanning all of your HTML files, JavaScript components, and other templates for class names, generating the corresponding styles and then writing them to a static CSS file.",
    date: "April 22, 2026",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "The Power of TypeScript",
    excerpt: "How static typing can save your codebase from countless runtime errors...",
    content: "Detailed analysis of TypeScript features and integration with React applications. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing to your code, which catches errors early.",
    date: "April 25, 2026",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80"
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" className="text-3xl font-extrabold font-display bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Sifat
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-slate-100">
          {['Home', 'About', 'Skills', 'Projects', 'Blogs', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
              {link}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:scale-105 transition-all glow-purple text-white">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="flex flex-col p-6 gap-4 font-bold uppercase tracking-widest text-center">
              {['Home', 'About', 'Skills', 'Projects', 'Blogs', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="py-2 hover:text-purple-400">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: [0, 1, 1, 0],
      y: [20, 0, 0, -20],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatDelay: 1,
        times: [0, 0.1, 0.9, 1],
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block py-1 px-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-bold uppercase tracking-[0.2em]"
        >
          Frontend Developer
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight flex flex-wrap justify-center gap-x-4 tracking-tight"
        >
          <motion.span variants={item} className="text-white">Hi,</motion.span>
          <motion.span variants={item} className="text-white">I am</motion.span>
          <motion.span variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Sifat</motion.span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-medium"
        >
          A Junior Frontend Developer & Specialist in React.js
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="/resume.pdf" 
            download="Md_Sifat_Hossan_Resume.pdf"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg font-bold shadow-xl glow-purple hover:scale-105 transition-all flex items-center gap-2"
          >
            Download Resume
          </a>
          <a href="#projects" className="px-8 py-3 glass bg-white/5 rounded-lg font-bold border border-white/10 hover:bg-white/10 transition-all text-white">
            View My Work
          </a>
        </motion.div>
      </div>

      {/* Floating accents */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />
    </section>
  );
};

const About = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section id="about" className="py-32 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border-4 border-purple-500/20 bg-slate-900 glow-purple relative z-10 transition-transform group-hover:-translate-y-2">
            <img 
              src="https://github.com/Sifat668916.png" 
              alt="Md Sifat Hossan" 
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
          <div className="absolute -inset-4 border-2 border-dashed border-purple-500/20 rounded-3xl -z-0 rotate-3 group-hover:rotate-6 transition-all" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl font-display font-bold mb-6">About <span className="text-purple-500">Me</span></h2>
          <h3 className="text-2xl font-bold mb-6 text-slate-100">Md Sifat Hossan — Frontend Developer</h3>
          <p className="text-lg leading-relaxed text-slate-400 mb-8">
            "I am Sifat, a passionate Frontend Developer who loves building modern, responsive, and user-focused web applications. I specialize in JavaScript and React, creating clean and interactive interfaces with a strong focus on performance and usability. I am always eager to learn, improve, and bring ideas to life through code."
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><MapPin size={20} /></div>
              <div><span className="block text-slate-500 uppercase tracking-tighter">Location</span> Uttara, Dhaka</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Mail size={20} /></div>
              <div><span className="block text-slate-500 uppercase tracking-tighter">Email</span> isifat733@gmail.com</div>
            </div>
          </div>

          <button 
            onClick={() => setShowDetail(true)}
            className="px-8 py-3 bg-purple-600 rounded-lg font-bold glow-purple text-white hover:scale-105 transition-all"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Learn More Modal */}
      <AnimatePresence>
        {showDetail && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
              onClick={() => setShowDetail(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[3rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button 
                onClick={() => setShowDetail(false)}
                className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors text-white z-10"
              >
                <X />
              </button>

              <div className="grid lg:grid-cols-3 gap-12">
                {/* Left Column: Education & Ref */}
                <div className="lg:col-span-1 space-y-12">
                  <section>
                    <h2 className="text-2xl font-display font-bold mb-6 text-white border-b border-purple-500/30 pb-2 flex items-center gap-2">
                       <Code2 size={24} className="text-purple-500" /> Education
                    </h2>
                    <div className="space-y-6">
                      <div className="relative pl-6 border-l border-purple-500/30">
                        <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-purple-500" />
                        <h4 className="font-bold text-white text-sm">Diploma in Engineeing</h4>
                        <p className="text-xs text-purple-400 font-bold mb-1">Computer Science (2021-2025)</p>
                        <p className="text-xs text-slate-500">Dhaka Polytechnic Institute</p>
                      </div>
                      <div className="relative pl-6 border-l border-purple-500/30">
                        <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-purple-500" />
                        <h4 className="font-bold text-white text-sm">SSC - Science</h4>
                        <p className="text-xs text-purple-400 font-bold mb-1">2019-2021</p>
                        <p className="text-xs text-slate-500">Rani Bilash Moni Govt. Boys’ School</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-display font-bold mb-6 text-white border-b border-purple-500/30 pb-2">References</h2>
                    <div className="space-y-4 text-xs">
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                        <h4 className="font-bold text-white mb-1">Md. Mamun Ahmed</h4>
                        <p className="text-purple-400 mb-2">Instructor, Cumilla Polytechnic</p>
                        <p className="text-slate-500">+880 1919-713969</p>
                      </div>
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                        <h4 className="font-bold text-white mb-1">Mst. Ayesh Siddika</h4>
                        <p className="text-purple-400 mb-2">Chief Instructor, Dhaka Polytechnic</p>
                        <p className="text-slate-500">+880 1713-080117</p>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Right Column: Experience & Details */}
                <div className="lg:col-span-2 space-y-12">
                   <section>
                    <h2 className="text-2xl font-display font-bold mb-6 text-white border-b border-purple-500/30 pb-2">Project Portfolio Deep-Dive</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                       {projects.map((p, i) => (
                         <div key={i} className="p-5 bg-slate-950 rounded-2xl border border-slate-800 group hover:border-purple-500/30 transition-all">
                           <h4 className="font-bold text-white mb-2 group-hover:text-purple-400">{p.title}</h4>
                           <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{p.desc}</p>
                           <div className="mt-4 flex flex-wrap gap-1">
                             {p.tech.map(t => <span key={t} className="text-[10px] px-2 py-0.5 bg-slate-800 rounded text-slate-400 uppercase font-bold">{t}</span>)}
                           </div>
                         </div>
                       ))}
                    </div>
                   </section>

                   <section>
                    <h2 className="text-2xl font-display font-bold mb-6 text-white border-b border-purple-500/30 pb-2">Technical Proficiency</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                       {skills["Front End"].map(s => (
                         <div key={s.name} className="flex flex-col items-center gap-2 p-4 bg-slate-950 rounded-xl border border-slate-800">
                           <img src={s.logo} className="w-8 h-8 object-contain" alt={s.name} />
                           <span className="text-[10px] font-bold text-slate-500 uppercase">{s.name}</span>
                         </div>
                       ))}
                    </div>
                   </section>

                   <section>
                    <h2 className="text-2xl font-display font-bold mb-6 text-white border-b border-purple-500/30 pb-2">Core Competencies</h2>
                    <div className="flex flex-wrap gap-2">
                       {["React Lifecycle", "API Integration", "State Management", "Responsive Design", "Performance Optimization", "Clean UI/UX", "Full Stack (Basics)", "Version Control"].map(tag => (
                         <span key={tag} className="px-4 py-2 bg-purple-500/5 border border-purple-500/10 rounded-full text-xs font-semibold text-purple-300">{tag}</span>
                       ))}
                    </div>
                   </section>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl border border-white/5 text-center">
                 <p className="text-slate-400 mb-6">"Continuously learning modern frontend technologies and seeking opportunities to grow as a professional developer."</p>
                 <a href="#contact" onClick={() => setShowDetail(false)} className="px-8 py-3 bg-white text-slate-950 rounded-lg font-bold hover:bg-purple-100 transition-all uppercase tracking-widest text-xs">Let's Collaborate</a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Front End");

  return (
    <section id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-display font-bold mb-4">My <span className="text-purple-500">Skills</span></h2>
        <p className="text-slate-500 mb-16">The technologies and tools I excel in</p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(skills).map(category => (
            <button 
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeTab === category ? 'bg-purple-600 text-white glow-purple' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:bg-slate-800'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <AnimatePresence mode="wait">
            {skills[activeTab].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ delay: i * 0.05 }}
                className="p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-4 w-40 hover:border-purple-500/50 hover:-translate-y-2 transition-all shadow-xl group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="font-bold text-center text-xs text-slate-300">{skill.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const items = [
    { 
      title: "Front End Web Development", 
      desc: "Building fast, high-performance and SEO-friendly web applications with modern tech stacks.", 
      icon: Monitor 
    },
    { 
      title: "Wix Website Design", 
      desc: "Design Professional and fully Responsive Landing pages using Wix for an effective online presence.", 
      icon: Globe 
    }
  ];

  return (
    <section className="py-32 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-display font-bold mb-8">Services I <span className="text-purple-500">Provide</span></h2>
          <div className="space-y-8">
            {items.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-purple-500/30 transition-all flex gap-6"
              >
                <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center text-purple-400 shrink-0">
                  <item.icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] border-2 border-purple-500/10 rounded-full animate-spin-slow" />
          <div className="relative z-10 p-12 bg-purple-600/10 border border-purple-500/20 rounded-[4rem] flex items-center justify-center shadow-2xl backdrop-blur-3xl">
             <Code2 size={120} className="text-purple-500 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold mb-4">Featured <span className="text-purple-500">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-purple-500/30 transition-all flex flex-col"
            >
              <div className="h-60 relative overflow-hidden group">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-4 bg-white text-slate-950 rounded-full hover:scale-110 transition-transform">
                    <ExternalLink />
                  </a>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-800 border border-slate-700 text-xs font-bold uppercase text-slate-400 rounded-full">{t}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-100">{project.title}</h3>
                <p className="text-slate-500 mb-8 flex-1 leading-relaxed">{project.desc}</p>
                <div className="flex gap-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-purple-600 rounded-full text-sm font-bold glow-purple">Live Demo</a>
                  <button className="px-6 py-2 bg-slate-800 rounded-full text-sm font-bold hover:bg-slate-700">Code</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section id="blogs" className="py-32 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">Latest <span className="text-purple-500">Blogs</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <motion.div 
              key={blog.id} 
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all cursor-pointer group"
              onClick={() => setSelectedBlog(blog)}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-slate-500 uppercase mb-3 block">{blog.date}</span>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{blog.title}</h3>
                <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">{blog.excerpt}</p>
                <div className="mt-8 flex items-center gap-2 text-purple-400 font-bold text-sm">
                  Read More <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
              onClick={() => setSelectedBlog(null)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-slate-900 border border-slate-800 p-10 rounded-[3rem] max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
              >
                <X />
              </button>
              <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-64 object-cover rounded-2xl mb-8" />
              <span className="text-sm font-bold text-purple-500 uppercase tracking-widest block mb-4">{selectedBlog.date}</span>
              <h2 className="text-3xl font-bold mb-6">{selectedBlog.title}</h2>
              <p className="text-slate-400 leading-relaxed text-lg mb-8">{selectedBlog.content}</p>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={20} />
                <span className="font-bold">Skill Verified Article</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const GithubStats = () => {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-display font-bold mb-16">GitHub <span className="text-purple-500">Stats</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Total Contribs", val: "1.2k+", icon: Layers },
            { label: "Followers", val: "150+", icon: Rocket },
            { label: "Public Repos", val: "45+", icon: Github },
            { label: "Stars Earned", val: "200+", icon: Zap }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-slate-900/50 border border-slate-800 rounded-3xl"
            >
              <stat.icon className="mx-auto mb-6 text-purple-500" size={40} />
              <div className="text-3xl font-black mb-2 text-white">{stat.val}</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 p-1 bg-gradient-to-r from-purple-600/50 to-blue-600/50 rounded-3xl">
          <div className="bg-slate-950 p-8 rounded-[1.4rem]">
             <img src="https://github-readme-stats.vercel.app/api?username=Sifat668916&show_icons=true&theme=tokyonight&bg_color=030712&border_color=334155&title_color=a855f7" alt="Github Stats" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    // Using the access key provided by the user
    formData.append("access_key", "001e3dff-3892-4fab-afae-bbc2bc44ce1e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const data = await response.json();

      if (data.success) {
        setShowPopup(true);
        e.target.reset();
        setTimeout(() => setShowPopup(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">Get In <span className="text-purple-500">Touch</span></h2>
            <p className="text-lg text-slate-500 mb-12">I'm currently available for freelance work and full-time opportunities. Let's build something amazing together!</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 shrink-0"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold text-slate-400 text-xs uppercase mb-1">Email</h4>
                  <div className="text-lg font-bold text-slate-200">isifat733@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 shrink-0"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold text-slate-400 text-xs uppercase mb-1">Phone</h4>
                  <div className="text-lg font-bold text-slate-200">01566002081</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 shrink-0"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-slate-400 text-xs uppercase mb-1">Address</h4>
                  <div className="text-lg font-bold text-slate-200">Uttara, Dhaka</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-slate-400 text-xs uppercase mb-6">Socials</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, url: SOCIAL_LINKS.linkedin },
                  { icon: Github, url: SOCIAL_LINKS.github },
                  { icon: Twitter, url: SOCIAL_LINKS.twitter }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-slate-800 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-all hover:border-purple-600 hover:glow-purple group"
                  >
                    <social.icon size={20} className="group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-10 lg:p-16 rounded-[3rem] border border-slate-800">
            <h3 className="text-2xl font-bold mb-10">Send <span className="text-purple-500">Message</span></h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input required name="name" type="text" placeholder="Your Name" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:ring-2 focus:ring-purple-600 focus:outline-none transition-all text-white" />
                <input required name="email" type="email" placeholder="Your Email" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:ring-2 focus:ring-purple-600 focus:outline-none transition-all text-white" />
              </div>
              <input required name="subject" type="text" placeholder="Subject" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:ring-2 focus:ring-purple-600 focus:outline-none transition-all text-white" />
              <textarea required name="message" rows={5} placeholder="Your message here..." className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:ring-2 focus:ring-purple-600 focus:outline-none transition-all text-white" />
              <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all glow-purple">
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-600 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 text-slate-950 font-bold"
          >
            <CheckCircle2 size={32} />
            <div>
              <p className="text-xl">Email has been sent!</p>
              <p className="text-sm font-medium opacity-70">Sifat will get back to you soon.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#home" className="text-3xl font-black font-display bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 block">
              Sifat
            </a>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              A passionate Frontend Developer focused on building clean, user-centric web applications with React.
            </p>
            <div className="flex gap-4">
               {[
                 { Icon: Linkedin, url: SOCIAL_LINKS.linkedin },
                 { Icon: Github, url: SOCIAL_LINKS.github },
                 { Icon: Twitter, url: SOCIAL_LINKS.twitter },
                 { Icon: Mail, url: SOCIAL_LINKS.email }
               ].map((social, i) => (
                  <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-500 hover:text-purple-500 hover:border-purple-500 transition-all">
                    <social.Icon size={20} />
                  </a>
               ))}
            </div>
          </div>

          <div>
             <h4 className="font-bold text-slate-200 mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
             <div className="flex flex-col gap-4 text-slate-500 font-semibold">
                {['Home', 'About', 'Projects', 'Contact'].map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-purple-500 transition-colors uppercase tracking-tight text-sm">{link}</a>
                ))}
             </div>
          </div>

          <div>
             <h4 className="font-bold text-slate-200 mb-6 uppercase tracking-widest text-xs">Services</h4>
             <div className="flex flex-col gap-4 text-slate-500 font-semibold text-sm">
                <p>Web Development</p>
                <p>UI Engineering</p>
                <p>Wix Design</p>
             </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-slate-600 uppercase tracking-widest">
           <p>© 2026 Md Sifat Hossan. All Rights Reserved.</p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-purple-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-500 transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

const FlyingElements = () => {
  const elements = [
    { icon: <Bird size={32} />, delay: 0, yStart: "20vh", duration: 25 },
    { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8 opacity-40 shadow-glow-react" alt="React" />, delay: 5, yStart: "50vh", duration: 35 },
    { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-8 h-8 opacity-40" alt="MongoDB" />, delay: 12, yStart: "80vh", duration: 30 },
    { icon: <Bird size={24} className="opacity-20" />, delay: 18, yStart: "10vh", duration: 20 },
    { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-6 h-6 opacity-20" alt="React" />, delay: 22, yStart: "70vh", duration: 40 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ x: '-10vw', y: el.yStart }}
          animate={{
            x: '110vw',
            y: [el.yStart, '30vh', '60vh', el.yStart],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear"
          }}
          className="absolute"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              y: [0, -40, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-purple-500/30"
          >
            {el.icon}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-purple-500/30 selection:text-purple-200">
      <FlyingElements />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Blogs />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
