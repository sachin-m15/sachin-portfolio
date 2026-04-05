import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  tags: string[];
  description: string[];
  liveUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Neurify",
    subtitle: "Neuro-Symbolic RAG Agent",
    tags: ["LLMs", "NLP", "Neuro-Symbolic AI", "Agentic AI", "RAG"],
    description: [
      "Iterative retrieval pipeline with 10 passages/query, reranking & query reformulation.",
      "Neuro-symbolic validation using RoBERTa-MNLI with 0.80 reliability threshold.",
      "344 MB FAISS vector index with OpenAI embeddings + GPT-4o-mini inference.",
    ],
    liveUrl: "https://neurify.streamlit.app",
    githubUrl: "https://github.com/sachin-m15/Neurify",
  },
  {
    title: "L.R.A",
    subtitle: "Legal Research Assistant",
    tags: ["LLMs", "Multi-Agent Systems", "RAG", "LangGraph"],
    description: [
      "LangGraph multi-agent pipeline with 6 reasoning stages powered by LLaMA 3 8B.",
      "384-dim FAISS vector DB from 1000-char legal document chunks.",
      "Integrated vector search with Tavily web retrieval + FastAPI endpoints.",
    ],
    liveUrl: "https://lara-legal-assistant.streamlit.app",
    githubUrl: "https://github.com/sachin-m15/LARA",
  },
  {
    title: "Forged Signature Verification",
    subtitle: "Deep Learning Authentication System",
    tags: ["Deep Learning", "Computer Vision", "TensorFlow"],
    description: [
      "DL signature verification pipeline processing 224×224 RGB images.",
      "Siamese Neural Network achieving 90% verification accuracy.",
    ],
    githubUrl: "https://github.com/sachin-m15/Forged-Signature",
    liveUrl: "https://forged-signature-verification.vercel.app",
  },
];

const moreProjects = [
  {
    title: "Sentiment Analyzer",
    subtitle: "LLM-powered sentiment analysis",
    tags: ["Transformer", "NLP", "LLM"],
    githubUrl: "https://github.com/sachin-m15/Transcript-Analyzer",
    liveUrl: "https://transcript-analyzergit-dp7f5bkbwg8pkxt4urubfc.streamlit.app/",
  },
  {
    title: "Video Transcript AI",
    subtitle: "LLM-Powered RAG Q&A System",
    tags: ["Python", "RAG", "LangChain", "FAISS", "SentenceTransformers", "Ollama", "Streamlit"],
    githubUrl: "https://github.com/sachin-m15/Transcript-based-RAG-"
  },
  {
    title: "Pokémon Battle Predictor",
    subtitle: "Ensemble ML-Based Battle Outcome Predictor",
    tags: ["Python, Scikit-learn", "Ensemble ML" , "Streamlit"],
    githubUrl: "https://github.com/sachin-m15/Pokemon-Battle-Predictor",
  },
  {
    title: "Movie Recommendation System",
    subtitle: "Content-Based Movie Recommender",
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Content-Based Filtering", "API Integration"],
    githubUrl: "https://github.com/sachin-m15/Movie-Recommender/tree/main"
  },
  {
    title: "Diabetes Prediction System",
    subtitle: "ML-Based Health Risk Predictor",
    tags: ["Python", "Scikit-learn", "NumPy", "Streamlit", "Machine Learning", "Healthcare AI"],
    githubUrl: "https://github.com/sachin-m15/Diabetes-Prediction/tree/main"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">
            What I've Built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-xl p-6 group hover:border-glow transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <div className="flex gap-2 items-center">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-mono hover:bg-primary/20 transition-colors">
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 flex-1">
                {project.description.map((desc, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">▹</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* More Projects - Compact list */}
        <div className="mt-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm text-primary mb-4"
          >
            More Projects
          </motion.h3>
          <div className="flex flex-col gap-2">
            {moreProjects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-lg p-3 group hover:border-primary/30 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <h4 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors shrink-0">
                    {project.title}
                  </h4>
                  <p className="text-xs text-muted-foreground truncate hidden sm:inline">{project.subtitle}</p>
                  <div className="flex gap-1 shrink-0">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  {project.liveUrl && (
                    <span className="text-xs text-primary">Demo</span>
                  )}
                  <Github size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;