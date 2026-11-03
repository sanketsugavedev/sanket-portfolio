import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowUpRight, BrainCircuit,
  BriefcaseBusiness, Code2, Database, Github,
  GraduationCap, Laptop, Linkedin, Mail, Menu, Moon, Sun, X,
  MapPin, Sparkles, Terminal, Workflow, ChevronUp, ExternalLink,
  Layers3, Cpu, Globe2, BookOpen, Send
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const skills = [
  {
    number: "01",
    eyebrow: "SOFTWARE ENGINEERING",
    title: <>Full Stack<br />Development</>,
    description: "Building web experiences across the frontend, backend, APIs and databases.",
    icon: Code2,
    tags: ["HTML5", "CSS3", "JavaScript", "React.js", "React Router", "Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "MySQL", "Tailwind CSS", "TypeScript", "Next.js · learning"],
    note: "Currently expanding my React and Next.js skills."
  },
  {
    number: "02",
    eyebrow: "DATA & INTELLIGENCE",
    title: <>AI & Machine<br />Learning</>,
    description: "Developing foundations in data analysis, machine learning and modern AI systems.",
    icon: BrainCircuit,
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "SQL", "EDA", "Scikit-learn", "TensorFlow", "PyTorch", "Deep Learning", "Hugging Face", "LangChain", "LLMs", "RAG", "Vector Databases", "AI Agents"],
    note: "Currently learning machine learning fundamentals."
  },
];

const tools = [
  ["Git & GitHub", Github], ["Vercel", Globe2], ["Render", Workflow],
  ["MongoDB", Database], ["REST APIs", Layers3], ["Authentication", BriefcaseBusiness]
];

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const [showTop, setShowTop] = useState(false);
  const phrases = ["Full Stack Development", "Artificial Intelligence", "Machine Learning"];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    let phraseIndex = 0, charIndex = 0, deleting = false, timeout;
    const tick = () => {
      const phrase = phrases[phraseIndex];
      charIndex += deleting ? -1 : 1;
      setTyped(phrase.slice(0, charIndex));
      let delay = deleting ? 35 : 70;
      if (!deleting && charIndex === phrase.length) { deleting = true; delay = 1450; }
      else if (deleting && charIndex === 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; delay = 350; }
      timeout = setTimeout(tick, delay);
    };
    timeout = setTimeout(tick, 450);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 550);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme(current => current === "dark" ? "light" : "dark");

  return (
    <>
      <style>{`
        .brand-fullname { font-size: 15px !important; letter-spacing: .11em; white-space: nowrap; }
        .brand-fullname span { color: var(--accent, #6d8dff); }
        .hero-name { font-size: clamp(4.2rem, 9vw, 8.8rem) !important; line-height: .88 !important; letter-spacing: -.085em !important; font-weight: 850 !important; margin: 18px 0 20px !important; }
        .hero-kicker { letter-spacing: .22em; }
        .hero-role { font-size: clamp(15px, 1.5vw, 19px); font-weight: 650; margin: 0 0 18px; }
        .hero-role span { color: var(--accent, #6d8dff); padding: 0 5px; }
        .portrait-visual { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 15px; }
        .portrait-frame { width: min(100%, 390px); aspect-ratio: 4 / 5; position: relative; overflow: hidden; border-radius: 190px 190px 18px 18px; border: 1px solid rgba(120,145,255,.35); background: linear-gradient(145deg, #18223b, #080b13 75%); box-shadow: 0 30px 90px rgba(0,0,0,.28); }
        .portrait-frame img { width: 100%; height: 100%; object-fit: cover; object-position: center 25%; display: block; }
        .portrait-placeholder { display: none; position: absolute; inset: 0; place-content: center; justify-items: center; gap: 12px; color: #fff; background: radial-gradient(circle at 50% 35%, #314b83, #101522 65%); }
        .portrait-placeholder span { font-size: 90px; font-weight: 800; letter-spacing: -.09em; }
        .portrait-placeholder small { letter-spacing: .2em; font-size: 10px; color: #b9c7e9; }
        .portrait-caption { font-size: 10px; letter-spacing: .16em; opacity: .8; display: flex; gap: 9px; align-items: center; }
        .portrait-index { position: absolute; right: 0; bottom: 4%; font-size: 10px; letter-spacing: .18em; opacity: .55; }
        .hero-description { max-width: 560px; }
        @media (max-width: 760px) { .brand-fullname { font-size: 12px !important; } .hero-name { font-size: clamp(4rem, 17vw, 6.2rem) !important; } .portrait-frame { width: min(78vw, 330px); } .portrait-index { display: none; } }
      `}</style>
      <div className="scroll-progress" />
      <header className="header">
        <nav className="nav container">
          <a className="brand brand-fullname" href="#home" onClick={closeMenu} aria-label="Sanket Sugave home">SANKET <span>SUGAVE.</span></a>
          <button className="icon-button mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {[["About", "#about"], ["Expertise", "#expertise"], ["Projects", "#projects"], ["Education", "#education"], ["Contact", "#contact"]].map(([label, href]) =>
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            )}
          </div>
          <div className="nav-actions">
            <button className="icon-button theme-button" onClick={toggleTheme} aria-label="Toggle color theme">
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>
              <span className="status-dot" /> OPEN TO OPPORTUNITIES <span className="eyebrow-divider" /> LATUR, INDIA
            </motion.div>
            <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>HELLO, I'M</motion.p>
            <motion.h1 className="hero-name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .7 }}>
              SANKET<br /><span className="gradient-text">SUGAVE.</span>
            </motion.h1>
            <motion.p className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .38 }}>Full Stack Developer <span>·</span> AI/ML Enthusiast</motion.p>
            <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}>
              I build for the web and explore intelligent systems. This is my portfolio — a place for my skills, projects and the work I’m growing toward.
            </motion.p>
            <motion.div className="typed-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>
              <span>I’m focused on</span> <strong>{typed}<i className="typing-caret">|</i></strong>
            </motion.div>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }}>
              <a className="button button-primary" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
              <a className="button button-secondary" href="#expertise">Explore my work <ArrowDown size={16} /></a>
            </motion.div>
            <motion.div className="social-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>
              <a href="https://github.com/sanketsugavedev" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
              <a href="https://www.linkedin.com/in/sanket-sugave" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
              <a href="mailto:sanketsugave.dev@gmail.com" aria-label="Email"><Mail size={19} /></a>
            </motion.div>
          </div>

          <motion.div className="hero-visual portrait-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .3, duration: .9 }}>
            <div className="portrait-frame">
              <img src="/profile.jpg" alt="Portrait of Sanket Sugave" onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling.style.display = "grid"; }} />
              <div className="portrait-placeholder"><span>SS</span><small>ADD YOUR PHOTO</small></div>
            </div>
            <div className="portrait-caption"><span className="status-dot" /> LATUR, MAHARASHTRA, INDIA</div>
            <div className="portrait-index">PORTFOLIO / 2026</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="section about-section" id="about">
          <div className="container">
            <SectionHeading number="01" label="A LITTLE INTRODUCTION" title={<>Curiosity across<br /><span className="muted-heading">different disciplines.</span></>} />
            <div className="about-grid">
              <motion.div className="about-copy" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>
                <p className="lead-copy">I’m <span className="accent-text">Sanket</span> — a technology-focused learner interested in building useful digital products and understanding the systems behind them.</p>
                <p>My interests span full stack web development and machine learning. I enjoy learning how things work, experimenting with tools and steadily expanding what I can build.</p>
                <p>This portfolio is a living snapshot of that journey. I’ll continue adding projects, experiments and new skills as I develop them.</p>
                <a className="inline-link" href="mailto:sanketsugave.dev@gmail.com">Start a conversation <ArrowUpRight size={15} /></a>
              </motion.div>
              <motion.div className="fact-list" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>
                <Fact icon={MapPin} label="BASED IN" value="Latur, Maharashtra, India" />
                <Fact icon={Laptop} label="CORE FOCUS" value="Full Stack Development" />
                <Fact icon={BrainCircuit} label="EXPLORING" value="Machine Learning & AI" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="container">
            <SectionHeading number="02" label="WHAT I EXPLORE" title={<>Skills & <span className="gradient-text">expertise.</span></>} description="A growing toolkit across software development, data analysis and artificial intelligence. Technologies are presented as areas studied and explored, not as a claim of professional mastery in every tool." />
            <div className="expertise-grid">
              {skills.map((skill, index) => <SkillCard key={skill.number} skill={skill} index={index} />)}
            </div>
            <motion.div className="toolkit-panel" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>
              <div className="toolkit-heading"><span className="mini-label">DEVELOPER TOOLKIT</span><h3>Tools I work with</h3></div>
              <div className="toolkit-list">{tools.map(([name, Icon]) => <span key={name}><Icon size={16} />{name}</span>)}</div>
            </motion.div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading number="03" label="SELECTED WORK" title={<>Projects in <span className="muted-heading">progress.</span></>} description="This space is reserved for real projects and experiments. It will grow as I build and publish more work." />
            <motion.div className="project-empty" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>
              <div className="empty-art">
                <div className="empty-orbit" />
                <div className="empty-window">
                  <div className="window-top"><span /><span /><span /><small>your-next-project.jsx</small></div>
                  <div className="code-preview"><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-white">idea</span> = <span className="code-green">"something meaningful"</span>;<br />
                    <span className="code-muted">02</span> <span className="code-purple">function</span> <span className="code-blue">build</span>() {"{"}<br />
                    <span className="code-muted">03</span> &nbsp;&nbsp;<span className="code-purple">return</span> <span className="code-green">"coming soon"</span>;<br />
                    <span className="code-muted">04</span> {"}"}
                  </div>
                </div>
              </div>
              <div className="empty-copy">
                <span className="coming-label"><span className="status-dot" /> THE NEXT CHAPTER</span>
                <h3>Good work takes<br /><span className="gradient-text">building.</span></h3>
                <p>I’m preparing this space for projects I can share with confidence. Once published, each project will include its overview, technology stack, live demo and source code.</p>
                <a className="inline-link" href="https://github.com/sanketsugavedev" target="_blank" rel="noreferrer">Follow my GitHub <ArrowUpRight size={15} /></a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="container">
            <SectionHeading number="04" label="LEARNING JOURNEY" title={<>Education & <span className="muted-heading">foundations.</span></>} />
            <div className="education-layout">
              <motion.div className="education-intro" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="education-icon"><GraduationCap size={25} /></div>
                <h3>Learning is<br /><span className="gradient-text">a continuous process.</span></h3>
                <p>My academic background in information technology supports my ongoing exploration of software engineering and AI.</p>
              </motion.div>
              <div className="timeline">
                <TimelineItem date="CURRENT / STATUS TO CONFIRM" title="B.Tech in Computer Engineering" place="Higher education" detail="Currently pursuing / admission status to be confirmed." />
                <TimelineItem date="DIPLOMA" title="Diploma in Information Technology" place="Government Polytechnic, Puranmal Lahoti, Latur" detail="67% · Information Technology" />
                <TimelineItem date="SECONDARY EDUCATION" title="Class 10" place="Maharashtra" detail="93%" />
                <TimelineItem date="COURSE" title="Full Stack Web Development" place="Udemy" detail="Completed online course." />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="container">
            <motion.div className="contact-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>
              <div className="contact-orb orb-one" /><div className="contact-orb orb-two" />
              <div className="contact-content">
                <p className="section-label">05 / GET IN TOUCH</p>
                <h2>Have an idea?<br /><span className="gradient-text">Let’s connect.</span></h2>
                <p>I’m open to meaningful conversations about opportunities, collaborations and interesting projects.</p>
                <a className="button button-primary" href="mailto:sanketsugave.dev@gmail.com">Email me <Send size={16} /></a>
              </div>
              <div className="contact-details">
                <a href="mailto:sanketsugave.dev@gmail.com"><span className="contact-icon"><Mail size={18} /></span><span><small>EMAIL</small><strong>sanketsugave.dev@gmail.com</strong></span><ArrowUpRight size={17} /></a>
                <a href="https://github.com/sanketsugavedev" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={18} /></span><span><small>GITHUB</small><strong>github.com/sanketsugavedev</strong></span><ArrowUpRight size={17} /></a>
                <a href="https://www.linkedin.com/in/sanket-sugave" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={18} /></span><span><small>LINKEDIN</small><strong>linkedin.com/in/sanket-sugave</strong></span><ArrowUpRight size={17} /></a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">S<span>.</span></a>
          <p>© {new Date().getFullYear()} Sanket Sugave. Built with curiosity.</p>
          <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && <motion.a className="to-top" href="#home" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} aria-label="Back to top"><ChevronUp size={19} /></motion.a>}
      </AnimatePresence>
    </>
  );
}

function SectionHeading({ number, label, title, description }) {
  return (
    <motion.div className="section-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>
      <p className="section-label"><span>{number}</span> / {label}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </motion.div>
  );
}

function Fact({ icon: Icon, label, value }) {
  return <div className="fact-row"><span className="fact-icon"><Icon size={18} /></span><div><small>{label}</small><strong>{value}</strong></div></div>;
}

function SkillCard({ skill, index }) {
  const Icon = skill.icon;
  return (
    <motion.article className="skill-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} transition={{ delay: index * .08 }}>
      <div className="skill-card-top"><span className="skill-icon"><Icon size={21} /></span><span className="skill-number">{skill.number}</span></div>
      <p className="card-eyebrow">{skill.eyebrow}</p>
      <h3>{skill.title}</h3>
      <p className="skill-description">{skill.description}</p>
      <div className="tag-cloud">{skill.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <p className="skill-note"><Sparkles size={14} /> {skill.note}</p>
    </motion.article>
  );
}

function TimelineItem({ date, title, place, detail }) {
  return <motion.div className="timeline-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>
    <span className="timeline-dot" /><div className="timeline-content"><small>{date}</small><h3>{title}</h3><p className="timeline-place">{place}</p><p>{detail}</p></div>
  </motion.div>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
