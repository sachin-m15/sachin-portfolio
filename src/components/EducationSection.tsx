import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
  degree: "Bachelor of Technology (B.Tech), Computer Science",
  institution: "Jaypee Institute of Information Technology, Noida",
  year: "2023 – 2027",
  description: "Specializing in AI/ML with strong foundations in data structures and system design. Built multiple real-world projects including LLM systems, RAG pipelines, and multi-agent architectures."
  },
  {
  degree: "Class XII (ISC)",
  institution: "Boys’ High School & College, Prayagraj",
  year: "2023",
  description: "Completed higher secondary education with a focus on science and mathematics."
}
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-3">
            Education
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap size={22} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-primary font-mono text-base mt-1">
                  {edu.institution}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {edu.year}
                </p>
                <p className="text-muted-foreground mt-3">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;