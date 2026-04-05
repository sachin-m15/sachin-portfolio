import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    display: "sachinofficial223204@gmail.com",
    href: "mailto:sachinofficial223204@gmail.com",
    accent: { color: "hsl(var(--primary))", bg: "hsl(var(--primary) / 0.08)", border: "hsl(var(--primary) / 0.25)" },
  },
  {
    icon: Phone,
    label: "Phone",
    display: "+91 73765 62159",
    href: "tel:+917376562159",
    accent: { color: "hsl(200 80% 60%)", bg: "hsl(200 80% 60% / 0.08)", border: "hsl(200 80% 60% / 0.25)" },
  },
  {
    icon: MapPin,
    label: "Location",
    display: "Noida, India",
    accent: { color: "hsl(35 90% 58%)", bg: "hsl(35 90% 58% / 0.08)", border: "hsl(35 90% 58% / 0.25)" },
  },
  {
    icon: Github,
    label: "GitHub",
    display: "github.com/sachin-m15",
    href: "https://github.com/sachin-m15",
    accent: { color: "hsl(270 60% 65%)", bg: "hsl(270 60% 65% / 0.08)", border: "hsl(270 60% 65% / 0.25)" },
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    display: "linkedin.com/in/sachin-mishra",
    href: "https://www.linkedin.com/in/sachin-mishra-325444271/",
    accent: { color: "hsl(210 90% 60%)", bg: "hsl(210 90% 60% / 0.08)", border: "hsl(210 90% 60% / 0.25)" },
  },
];

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_mehqiz1",  
        "template_bdxtpr8", 
        formRef.current,
        "7bF70EuO8emoldLIs"   
      )
      .then(() => {
        alert("Message sent 🚀");
        formRef.current?.reset();
        setLoading(false);
      })
      .catch(() => {
        alert("Failed ❌");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-xs uppercase mb-3 text-primary">Contact</p>
          <h2 className="text-3xl text-foreground mb-3">
            Let's build something together.
          </h2>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid gap-4 mb-12">
          {contacts.map(({ icon: Icon, label, display, href, accent }, i) => {
            const Tag = href ? motion.a : motion.div;

            return (
              <Tag
                key={label}
                href={href}
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl border"
                style={{
                  border: "1px solid hsl(var(--border))",
                  background: "hsl(var(--card))",
                }}
              >
                <div
                  style={{
                    background: accent.bg,
                    border: `1px solid ${accent.border}`,
                    color: accent.color,
                  }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg"
                >
                  <Icon size={16} />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm text-foreground">{display}</p>
                </div>

                {href && <ArrowUpRight className="ml-auto" />}
              </Tag>
            );
          })}
        </div>

        {/* 🔥 EMAIL FORM (MATCHED UI) */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl space-y-5"
          style={{
            border: "1px solid hsl(var(--border))",
            background: "hsl(var(--card))",
          }}
        >
          <h3 className="text-xl text-foreground text-center">
            Connect With Me 🚀
          </h3>

          {/* INPUTS */}
          {[
            { name: "user_email", placeholder: "Your Email", type: "email" },
            { name: "user_name", placeholder: "Your Name", type: "text" },
            { name: "subject", placeholder: "Subject", type: "text" },
          ].map((input) => (
            <input
              key={input.name}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              required={input.name !== "subject"}
              className="w-full p-3 rounded-lg outline-none"
              style={{
                border: "1px solid hsl(var(--border))",
                background: "transparent",
                color: "hsl(var(--foreground))",
              }}
            />
          ))}

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            className="w-full p-3 rounded-lg outline-none"
            style={{
              border: "1px solid hsl(var(--border))",
              background: "transparent",
              color: "hsl(var(--foreground))",
            }}
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold"
            style={{
              background: "hsl(var(--primary))",
              color: "white",
            }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default ContactSection;
