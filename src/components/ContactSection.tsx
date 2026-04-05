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

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

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
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current?.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Failed to send message ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto">

        {/* HEADER */}
        <motion.div className="mb-16">
          <p className="text-xs uppercase mb-3 text-primary">Contact</p>
          <h2 className="text-3xl mb-3 text-white">
            Let's build something together.
          </h2>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="grid gap-4 mb-10">
          {contacts.map(({ icon: Icon, label, display, href, accent }, i) => {
            const Tag = href ? motion.a : motion.div;
            return (
              <Tag
                key={label}
                href={href}
                target="_blank"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="flex items-center gap-4 p-4 border rounded-xl"
              >
                <Icon />
                <div>
                  <p className="text-sm text-gray-400">{label}</p>
                  <p className="text-white">{display}</p>
                </div>
                {href && <ArrowUpRight />}
              </Tag>
            );
          })}
        </div>

        {/* 🔥 EMAIL FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-[#0c0a1a] border border-gray-700 rounded-2xl p-6 space-y-5"
        >
          <h2 className="text-2xl text-center text-white">
            Connect With Me 🚀
          </h2>

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 text-white"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 text-white"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 text-white"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 to-orange-500"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;
