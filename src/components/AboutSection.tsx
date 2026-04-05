import { motion } from "framer-motion";
import { Bot, Brain, Code2, Database, Cpu, Users } from "lucide-react";

const workAreas = [
  { icon: Bot, text: "LLM systems and optimized RAG pipelines" },
  { icon: Brain, text: "Multi-agent AI architectures and workflow automation" },
  { icon: Cpu, text: "Neuro-symbolic reasoning and validation layers" },
  { icon: Database, text: "Machine learning and deep learning applications" },
  { icon: Code2, text: "Backend systems using FastAPI and API integrations" },
];

const strengths = [
  "Strong foundation in data structures, algorithms, and system design",
  "Building efficient and scalable AI systems",
  "Mentoring 100+ students as Technical Coordinator at AI/ML Hub",
  "Leading workshops, hackathons, and hands-on sessions in ML & GenAI",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-2">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Short intro */}
          <div className="glass rounded-xl p-6">
            <p className="text-base text-muted-foreground leading-relaxed">
              AI/ML developer focused on building production-ready intelligent systems using Large Language Models (LLM), Retrieval-Augmented Generation (RAG), and multi-agent architectures. I design and deploy end-to-end AI applications that integrate machine learning models, vector databases, and scalable backend systems.
            </p>
          </div>

          {/* What I work on */}
          <div className="glass rounded-xl p-6">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">What I Work On</h3>
            <div className="space-y-3">
              {workAreas.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional strengths */}
          <div className="glass rounded-xl p-6">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">Additional Strengths</h3>
            <ul className="space-y-2">
              {strengths.map((strength, i) => (
                <motion.li
                  key={strength}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                >
                  <span className="text-primary text-xs">▹</span>
                  {strength}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;