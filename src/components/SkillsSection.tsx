import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "C++", "C"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "Linux", "Docker", "AWS"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Hugging Face", "LangChain", "LangGraph", "CrewAI", "FAISS", "FastAPI", "Streamlit"],
  },
  {
    label: "Core Areas",
    skills: ["Generative AI", "Machine Learning", "Deep Learning", "LLMs", "RAG", "Multi-Agent Systems", "NLP", "Neuro-Symbolic AI", "Computer Vision"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-mono text-base text-primary mb-4">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;