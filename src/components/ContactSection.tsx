import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-3">
            Get In Touch
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          {[
            { icon: Mail, label: "Email", value: "sachinofficial223204@gmail.com", href: "mailto:sachinofficial223204@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 7376562159", href: "tel:+917376562159" },
            { icon: MapPin, label: "Location", value: "Noida, India" },
            { icon: Github, label: "GitHub", value: "github.com/sachin-m15", href: "https://github.com/sachin-m15" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sachin-mishra-325444271", href: "https://www.linkedin.com/in/sachin-mishra-325444271/" },
          ].map(({ icon: Icon, label, value, href }, i) => (
            <a
              key={label}
              href={href}
              target={href?.startsWith('http') ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass rounded-xl p-4 flex items-center gap-3 group hover:border-glow transition-all duration-300"
            >
              <Icon size={20} className="text-primary" />
              <span className="text-foreground text-sm">{value}</span>
            </a>
          ))}
        </motion.div>

        <motion.p
          className="mt-20 text-center font-mono text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Designed & Built by Sachin Mishra
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;