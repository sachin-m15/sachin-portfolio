import { motion } from "framer-motion";
import { Briefcase, Users, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "AI Agent Developer Intern",
    organization: "Ushree (Clone Futura)",
    period: "Oct 2025 — Jan 2026",
    points: [
      "Built 4 autonomous AI agents for 50+ operational task categories",
      "Integrated into 34k+ line production system with 120+ APIs",
      "Automated 30+ workflows, reducing manual workload by 40%",
    ],
  },
  {
    type: "leadership",
    title: "Technical Head",
    organization: "AI/ML Hub",
    period: "2025 — 2026",
    points: [
      "Mentored 100+ students in ML and generative AI",
      "Organized 5+ workshops, hackathons, and technical events",
      "Built a strong AI/ML community within the institute",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold gradient-text">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${exp.type === 'work' ? 'bg-primary/10' : 'bg-violet-500/10'}`}>
                    {exp.type === 'work' ? <Briefcase size={18} className="text-primary" /> : <Users size={18} className="text-violet-400" />}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{exp.organization}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-1.5 ml-13">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary text-xs mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;