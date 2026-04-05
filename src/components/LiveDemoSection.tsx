import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const liveDemos = [
  {
    title: "Neurify",
    subtitle: "Neuro-Symbolic RAG Agent",
    url: "https://neurify.streamlit.app",
  },
  {
    title: "L.R.A",
    subtitle: "Legal Research Assistant",
    url: "https://lara-legal-assistant.streamlit.app",
  },
  {
    title: "Forged Signature Verification",
    subtitle: "Deep Learning Authentication",
    url: "https://forged-signature-verification.vercel.app",
  },
];

const LiveDemoSection = () => {
  return (
    <section id="live-demo" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-3">
            Live Demos
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Try out my deployed projects live
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {liveDemos.map((demo, i) => (
            <motion.a
              key={demo.title}
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 group hover:border-glow transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <ExternalLink size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {demo.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{demo.subtitle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;