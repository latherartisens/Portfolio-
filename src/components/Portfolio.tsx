import { motion } from 'motion/react';
import { Terminal, Github, Linkedin, Twitter, ArrowRight, Code2, Globe, Cpu, Smartphone, Layout, Rocket, MessageSquare, ChevronRight, Star, CheckCircle2, User, Calendar, ExternalLink, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for merging tailwind classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Navigation ---
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border-subtle py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-accent-pink flex items-center justify-center overflow-hidden border border-white/20">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad" 
              alt="Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-sans font-extrabold text-xl tracking-tighter">AHMAD<span className="text-accent-green">.DEV</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary px-6 py-2 rounded-xl text-xs uppercase tracking-tighter neon-glow-green">
            Hire me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-accent-pink text-background px-6 py-3 rounded-full font-bold text-center mt-2">
            Hire me
          </button>
        </motion.div>
      )}
    </nav>
  );
}

// --- Hero Section ---
export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-green/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-pink/5 blur-[120px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-border-subtle mb-8 backdrop-blur-sm neon-glow-green">
          <span className="text-[11px] font-mono font-bold text-accent-green uppercase tracking-[0.2em]">$ git commit -m "initial-thought-to-code"</span>
        </div>

        <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter">
          Transforming<br />
          ideas<br />
          into <span className="text-accent-green">impactful</span> code
        </h1>

        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Full-Stack Engineer specializing in high-performance SaaS architectures 
          and fluid interactive experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto btn-primary px-8 py-4 rounded-xl flex items-center justify-center gap-2 neon-glow-green">
            VIEW PROJECTS <Rocket size={18} />
          </button>
          <a 
            href="https://wa.me/923228038959"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-secondary px-8 py-4 rounded-xl flex items-center justify-center gap-2 uppercase text-xs tracking-widest font-bold"
          >
            CONTACT ME
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-gray-500 mb-6 flex items-center gap-2">
            <span className="w-10 h-[1px] bg-white/20" />
            Trusted by innovators
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="flex items-center gap-2 font-display font-bold text-2xl">Logosipsum</div>
             <div className="flex items-center gap-2 font-display font-bold text-2xl">LIII!!I</div>
             <div className="flex items-center gap-2 font-display font-bold text-2xl">IPSUM*</div>
             <div className="flex items-center gap-2 font-display font-bold text-2xl">Logo</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// --- Skills & Services ---
export function Services() {
  const services = [
    {
      title: "Frontend development",
      description: "Building responsive, accessible, and high-performance user interfaces with modern React.",
      icon: <Layout className="text-accent-pink" size={32} />,
      color: "pink"
    },
    {
      title: "Mobile app development",
      description: "Cross-platform mobile experiences that feel native and perform beautifully on all devices.",
      icon: <Smartphone className="text-accent-green" size={32} />,
      color: "green"
    },
    {
      title: "Wearables app development",
      description: "Specialized interfaces for smartwatches and IoT devices with focus on glancing information.",
      icon: <Cpu className="text-accent-green" size={32} />,
      color: "green"
    },
    {
      title: "Backend development",
      description: "Robust server-side logic, API design, and database architectures built for scale.",
      icon: <Code2 className="text-accent-pink" size={32} />,
      color: "pink"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-start mb-16">
         <span className="text-[11px] uppercase letter-spacing-[2px] font-bold text-accent-green mb-4 tracking-[0.3em]">Expertise</span>
         <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
            Core capabilities
         </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, i) => (
          <motion.div 
            key={service.title}
            whileHover={{ y: -5 }}
            className="group relative p-8 rounded-3xl glass neon-glow-green/20"
          >
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-border-subtle bg-white/5",
              service.color === 'green' ? "text-accent-green" : "text-accent-pink"
            )}>
              {service.icon}
            </div>
            <h3 className="text-xl font-extrabold mb-3">{service.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --- Featured Projects ---
export function Projects() {
  const projects = [
    {
      title: "Boorne",
      type: "Mobile app",
      year: "2025",
      image: "https://picsum.photos/seed/mobile/1200/800",
      color: "pink"
    },
    {
      title: "Oracle",
      type: "Landing page",
      year: "2025",
      image: "https://picsum.photos/seed/dash/1200/800",
      color: "green"
    },
    {
      title: "Sven",
      type: "Landing page",
      year: "2025",
      image: "https://picsum.photos/seed/sven/1200/800",
      color: "green"
    },
    {
      title: "Hookd",
      type: "Landing page & mobile app",
      year: "2025",
      image: "https://picsum.photos/seed/hookd/1200/800",
      color: "pink"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-start mb-16">
         <span className="text-[11px] uppercase letter-spacing-[2px] font-bold text-accent-pink mb-4 tracking-[0.3em]">Portfolio</span>
         <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
            Featured projects
         </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group glass p-5 rounded-[32px] overflow-hidden"
          >
            <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                <div>
                   <h3 className="text-xl font-extrabold tracking-tight mb-1">{project.title}</h3>
                   <p className="text-text-secondary text-xs">{project.type}</p>
                </div>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center glass",
                  project.color === 'green' ? "text-accent-green" : "text-accent-pink"
                )}>
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --- Testimonials ---
export function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
       <div className="flex flex-col items-center text-center mb-16">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
             <MessageSquare size={20} className="text-accent-green" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
             <span className="text-accent-green mr-4 opacity-50 font-mono italic">{'>'}</span>
             Testimonials
          </h2>
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Words of trust from my clients</p>
       </div>

       <div className="relative glass neon-glow-pink p-12 md:p-24 rounded-[40px] overflow-hidden">
          <div className="absolute top-5 right-5 bg-accent-pink text-background text-[10px] font-black px-3 py-1 rounded-full uppercase">Client Review</div>
          
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10" />

          <div className="text-center max-w-3xl mx-auto">
             <div className="w-16 h-16 rounded-full mx-auto mb-8 overflow-hidden border border-border-subtle p-1 bg-white/5">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Myrtle" 
                  alt="Client"
                  className="w-full h-full rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
             <p className="text-xl md:text-3xl font-bold tracking-tight leading-tight mb-8">
                "Exceptional work and an highly intelligent person, exceeds my expectations on every level!"
             </p>
             <div>
                <h4 className="font-extrabold text-accent-pink text-lg tracking-tight">Myrtle Leffler</h4>
                <p className="text-text-secondary text-xs font-bold tracking-widest uppercase mt-2">Sr. Creative Ass., Nikolaus Inc.</p>
             </div>
          </div>

          {/* Navigation */}
          <div className="absolute inset-y-0 left-8 flex items-center">
             <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all">
                <ChevronRight className="rotate-180" size={20} />
             </button>
          </div>
          <div className="absolute inset-y-0 right-8 flex items-center">
             <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all">
                <ChevronRight size={20} />
             </button>
          </div>
       </div>
    </section>
  );
}

// --- Process Section ---
export function Process() {
  const steps = [
    {
      id: "1",
      title: "Discovery",
      description: "Discuss your idea over call (or if you are based in Indonesia, let's meet up instead)",
      details: "Comprehensive research phase where we define user personas, business goals, and technical requirements."
    },
    {
      id: "2",
      title: "Ideation",
      description: "I'll brew your idea and vision into a pot of solutions for up to a week (may vary each project)",
      details: "Drafting wireframes, moodboards, and architectural diagrams to ensure the path forward is solid."
    },
    {
      id: "3",
      title: "Execution",
      description: "With your acceptance, I will bring the solution to life using all my skills (and some coffee)",
      details: "High-performance coding phase with regular updates, testing, and refine-as-we-go approach."
    },
    {
      id: "4",
      title: "Publish & Maintenance",
      description: "Test the execution and publish when satisfied. I will also be around for a set of time after.",
      details: "Deployment to production, SEO optimization, and a 30-day support window to fix any hiccups."
    }
  ];

  return (
    <section id="process" className="py-24 px-6 max-w-7xl mx-auto">
       <div className="flex flex-col items-center text-center mb-16">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
             <Cpu size={20} className="text-accent-pink" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
             <span className="text-accent-pink mr-4 opacity-50 font-mono italic">{'>'}</span>
             Creative process
          </h2>
       </div>

       <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step) => (
             <motion.div 
               key={step.id} 
               layout
               className="group glass rounded-3xl overflow-hidden hover:border-accent-pink transition-all"
             >
                <div className="p-8 flex flex-col md:flex-row md:items-center gap-8">
                   <div className="text-5xl font-black text-white/5 transition-colors duration-500">{step.id}</div>
                   <div className="flex-1">
                      <div className="border-l-2 border-accent-green pl-6 py-1">
                        <h3 className="text-xl font-extrabold mb-1">{step.title}</h3>
                        <p className="text-text-secondary text-sm font-medium tracking-tight group-hover:text-text-primary transition-colors">{step.description}</p>
                      </div>
                   </div>
                   <div className="hidden md:block">
                      <ChevronRight className="text-white/20 group-hover:text-accent-green transition-colors" />
                   </div>
                </div>
             </motion.div>
          ))}
       </div>
    </section>
  );
}

// --- Journey/Experience ---
export function Journey() {
  const experiences = [
    { year: "2025", role: "Staff Frontend Engineer", company: "Consola Solutions", period: "2024 - present", active: true },
    { year: "2024", role: "Lead Frontend Engineer", company: "Orbital Labs", period: "2023 - 2024", active: false },
    { year: "2023", role: "Sr. Frontend Engineer", company: "Synapse Systems", period: "2023", active: false },
    { year: "2023", role: "Frontend Engineer", company: "Synapse Systems", period: "2022 - 2023", active: false },
    { year: "2022", role: "Frontend Engineer", company: "InnovateAI Inc", period: "2022", active: false },
    { year: "2020", role: "Jr. Frontend Engineer", company: "InnovateAI Inc", period: "2020 - 2022", active: false }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
       <div className="flex flex-col items-center text-center mb-16">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
             <Globe size={20} className="text-accent-green" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
             <span className="text-accent-green mr-4 opacity-50 font-mono italic">{'>'}</span>
             Work journey
          </h2>
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">My employment history, for trust purposes</p>
       </div>

       <div className="max-w-3xl mx-auto glass p-10 rounded-[40px] neon-glow-pink">
          <div className="grid grid-cols-1 gap-8">
             {experiences.map((exp, i) => (
                <div key={i} className="flex gap-6 items-start">
                   <div className="text-accent-green font-mono font-bold text-xs bg-accent-green/5 px-3 py-1 rounded border border-accent-green/10 whitespace-nowrap">{exp.year}</div>
                   <div className="flex-1 border-b border-border-subtle pb-6 last:border-0 last:pb-0">
                      <h4 className="text-xl font-extrabold mb-1">{exp.company}</h4>
                      <p className="text-xs text-text-secondary font-bold uppercase tracking-widest">{exp.role}</p>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}

// --- Pricing ---
export function Pricing() {
  const [activePlan, setActivePlan] = useState('Regular');

  const plans = [
    {
      name: "Regular",
      icon: "⭐",
      completion: "2-3 weeks",
      price: "10000",
      features: [
        "Figma file for design system, wireframe, and high-fidelity design.",
        "2 major revisions, 10 minor revisions",
        "Free custom .com/.co domain for publishing",
        "2-months maintenance and content updates",
        "Lifetime support"
      ]
    },
    {
      name: "Pro",
      icon: "💎",
      completion: "3-5 weeks",
      price: "15000",
      features: [
        "Everything in Regular",
        "Advanced animations & interactions",
        "CMS integration for blog/content",
        "Basic SEO optimization",
        "4 major revisions"
      ]
    },
    {
      name: "Custom",
      icon: "🚀",
      completion: "By Timeline",
      price: "30000",
      features: [
        "Everything in Pro",
        "Custom technical integrations",
        "Performance & scalability audit",
        "Priority infrastructure setup",
        "Unlimited revisions"
      ]
    }
  ];

  const currentPlan = plans.find(p => p.name === activePlan) || plans[0];

  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
       <div className="flex flex-col items-center text-center mb-16">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
             <Star size={20} className="text-accent-pink" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
             <span className="text-accent-pink mr-4 opacity-50 font-mono italic">{'>'}</span>
             Project pricing
          </h2>
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Transparent and easy pricing information that suits your needs</p>
       </div>

       <div className="flex justify-center mb-12">
          <div className="bg-surface p-1 rounded-full border border-white/10 flex gap-2">
             {plans.map((p) => (
                <button 
                  key={p.name}
                  onClick={() => setActivePlan(p.name)}
                  className={cn(
                    "px-6 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap",
                    activePlan === p.name ? "bg-accent-pink text-background" : "text-gray-400 hover:text-white"
                  )}
                >
                  {p.icon} {p.name}
                </button>
             ))}
          </div>
       </div>

       <div className="max-w-md mx-auto">
          <motion.div 
            key={currentPlan.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative glass rounded-[40px] p-10 neon-glow-pink border-border-subtle"
          >
             <div className="absolute top-8 right-8 bg-accent-pink text-background text-[10px] font-black px-3 py-1 rounded-full uppercase">Popular</div>
             
             <div className="mb-10">
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-accent-green mb-4 block">Selected Plan</span>
                <h3 className="text-4xl font-black mb-2">{currentPlan.name}</h3>
                <p className="text-[11px] text-text-secondary font-bold uppercase tracking-widest flex items-center gap-2">
                   <Calendar size={14} className="text-accent-pink" /> {currentPlan.completion} Delivery
                </p>
             </div>

             <div className="space-y-4 mb-12">
                {currentPlan.features.map((feature, i) => (
                   <div key={i} className="flex gap-4 items-start group">
                      <CheckCircle2 size={16} className="text-accent-green mt-1 flex-shrink-0" />
                      <span className="text-sm text-text-secondary font-medium group-hover:text-text-primary transition-colors leading-relaxed">{feature}</span>
                   </div>
                ))}
             </div>

             <div className="flex items-center justify-between gap-6">
                <div className="flex flex-col">
                   <div className="flex items-start">
                      <span className="text-6xl font-black tracking-tighter uppercase">{currentPlan.price}</span>
                   </div>
                </div>
                <a 
                  href={`https://wa.me/923228038959?text=I'm interested in the ${currentPlan.name} plan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary py-5 rounded-2xl neon-glow-green text-xs uppercase tracking-widest flex items-center justify-center"
                >
                   HIRE ME
                </a>
             </div>
          </motion.div>
       </div>
    </section>
  );
}

// --- Stats Section ---
export function Stats() {
  const stats = [
    { label: "Clients", value: "30+" },
    { label: "Years", value: "5+" },
    { label: "Awards", value: "7" }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
             <div key={i} className="glass p-8 rounded-[32px] flex flex-col items-center text-center group hover:border-accent-green transition-all">
                <div className="text-4xl md:text-5xl font-black tracking-tighter mb-2 group-hover:text-accent-green transition-colors">{stat.value}</div>
                <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-text-secondary">{stat.label}</div>
             </div>
          ))}
          <div className="glass p-8 rounded-[32px] flex items-center justify-center neon-glow-pink">
             <div className="w-12 h-12 rounded-full border-4 border-accent-pink flex items-center justify-center font-black text-sm">98%</div>
             <div className="ml-4">
                <div className="text-lg font-black leading-none">Trust</div>
                <div className="text-[10px] text-text-secondary font-bold uppercase">Rating</div>
             </div>
          </div>
       </div>
    </section>
  );
}

// --- Blog Section ---
export function Blog() {
  const posts = [
    { id: 1, title: "I don't think JavaScript is going anywhere anytime soon", date: "Aug 22", image: "https://picsum.photos/seed/js/200/200" },
    { id: 2, title: "I don't think JavaScript is going anywhere anytime soon", date: "Aug 22", image: "https://picsum.photos/seed/code/200/200" },
    { id: 3, title: "I don't think JavaScript is going anywhere anytime soon", date: "Aug 22", image: "https://picsum.photos/seed/tech/200/200" },
    { id: 4, title: "I don't think JavaScript is going anywhere anytime soon", date: "Aug 22", image: "https://picsum.photos/seed/comp/200/200" },
  ];

  return (
    <section id="blog" className="py-24 px-6 max-w-4xl mx-auto">
       <div className="flex flex-col items-center text-center mb-16">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
             <MessageSquare size={20} className="text-accent-green" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
             <span className="text-accent-green mr-4 opacity-50 font-mono italic">{'>'}</span>
             Blog
          </h2>
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Journal of my life that may or may not be related to work</p>
       </div>

       <div className="space-y-4">
          {posts.map((post) => (
             <motion.div 
               key={post.id} 
               whileHover={{ x: 10 }}
               className="group flex items-center gap-6 p-4 rounded-3xl border border-transparent hover:border-white/5 hover:bg-white/5 transition-all cursor-pointer"
             >
                <div className="w-16 h-16 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                   <img src={post.image} alt="post" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                   <h3 className="font-bold text-lg md:text-xl line-clamp-1 group-hover:text-accent-green transition-colors">{post.title}</h3>
                </div>
                <div className="text-sm font-mono text-gray-600">{post.date}</div>
             </motion.div>
          ))}
       </div>

       <div className="text-center mt-12">
          <button className="text-sm font-mono text-accent-green uppercase tracking-widest border-b border-accent-green pb-1 px-4 hover:bg-accent-green/10 transition-all">
             {'>'} More posts {'<'}
          </button>
       </div>
    </section>
  );
}

// --- Contact Section ---
export function Contact() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
       <div className="bg-accent-green/20 rounded-[40px] p-1 overflow-hidden">
          <div className="bg-background rounded-[39px] p-8 md:p-16 border border-accent-green/30">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Contact me</h2>
                <div className="flex flex-col items-end gap-1">
                   <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">Fill in form below or call</p>
                   <p className="text-xl font-bold text-accent-green">+92 3228038959</p>
                </div>
             </div>

             <div className="flex items-center gap-2 mb-10 text-xs font-mono text-gray-500">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span>Busy - I'm currently occupied but I'll try to respond to your message ASAP</span>
             </div>

             <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="relative group">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-accent-green transition-colors" size={20} />
                      <input 
                        type="text" 
                        placeholder="Your name"
                        className="w-full glass border-border-subtle rounded-2xl py-5 px-16 outline-none focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/20 transition-all text-sm"
                      />
                   </div>
                   <div className="relative group">
                      <MessageSquare className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-accent-green transition-colors" size={20} />
                      <input 
                        type="email" 
                        placeholder="Your email"
                        className="w-full glass border-border-subtle rounded-2xl py-5 px-16 outline-none focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/20 transition-all text-sm"
                      />
                   </div>
                </div>
                <div className="relative group">
                   <Terminal className="absolute left-6 top-6 text-gray-600 group-focus-within:text-accent-green transition-colors" size={20} />
                   <textarea 
                     rows={5}
                     placeholder="Your message"
                     className="w-full glass border-border-subtle rounded-2xl py-5 px-16 outline-none focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/20 transition-all resize-none text-sm"
                   />
                </div>
                <button type="button" className="w-full btn-primary py-5 rounded-2xl neon-glow-green text-xs uppercase tracking-widest font-black">
                   Send message
                </button>
             </form>
          </div>
       </div>
    </section>
  );
}

// --- Footer ---
export function Footer() {
  return (
    <footer className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
       <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 overflow-hidden">
             <img 
               src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad" 
               alt="Ahmad Raza"
               className="w-full h-full object-cover grayscale opacity-80"
               referrerPolicy="no-referrer"
             />
          </div>
          <h3 className="text-2xl font-bold mb-1 tracking-tight">Ahmad Raza</h3>
          <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-12">Software engineer</p>

          <div className="flex gap-8 text-gray-500 mb-12">
             <a href="#" className="hover:text-accent-pink transition-colors"><Twitter size={20} /></a>
             <a href="#" className="hover:text-accent-pink transition-colors"><Linkedin size={20} /></a>
             <a href="#" className="hover:text-accent-pink transition-colors"><Github size={20} /></a>
          </div>

          <div className="flex flex-col md:flex-row justify-between w-full text-[10px] uppercase tracking-widest text-gray-600 gap-4">
             <p>© 2025. All Rights Reserved.</p>
             <p>Template by @lovesardine</p>
          </div>
       </div>
    </footer>
  );
}
