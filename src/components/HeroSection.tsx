import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Image - subtle gradient ring instead of glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full p-[3px] bg-gradient-to-br from-primary/40 via-primary/20 to-accent/40">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/image_1.png" 
                    alt="Sachin Mishra" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name - slightly smaller */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground tracking-wide"
          >
            Sachin Mishra
          </motion.h1>

          {/* Role headline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl font-medium gradient-text mb-4"
          >
            LLM Systems & RAG Engineer
          </motion.p>

          {/* Shortened value proposition */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-8"
          >
            Building scalable LLM systems with RAG and multi-agent architectures. Deploying production-ready AI systems.
          </motion.p>

          {/* CTA Buttons - Primary + Secondaries */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Primary CTA - View Projects */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 font-mono text-sm font-semibold px-8 py-3.5 rounded-lg text-background transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
              style={{ background: "linear-gradient(135deg, hsl(160 100% 50%), hsl(170 90% 45%))" }}
            >
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              View Projects
            </a>
            
            {/* Secondary Buttons */}
            <a
              href="/Sachin_Mishra_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm font-medium px-6 py-3.5 rounded-lg border border-border/60 text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            >
              <FileText size={16} />
              Resume
            </a>
            <a
              href="https://github.com/sachin-m15"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm font-medium px-6 py-3.5 rounded-lg border border-border/60 text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-mishra-325444271/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm font-medium px-6 py-3.5 rounded-lg border border-border/60 text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </motion.div>

          {/* Open to opportunities */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xs text-muted-foreground/70 font-mono"
          >
            Open to Work <span className="text-primary/50">|</span> AI/ML Roles
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="inline-block text-primary/60 hover:text-primary transition-colors animate-bounce">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;