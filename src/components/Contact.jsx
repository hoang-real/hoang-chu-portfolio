import { motion } from "framer-motion";
import content from "../data/content";
import { EnvelopeDuck, WobbleDuck } from "../assets/duck";

function Icon({ children }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const links = [
  {
    icon: (
      <Icon>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6 12 13 2 6" />
      </Icon>
    ),
    href: `mailto:${content.contact.email}`,
    label: content.contact.email,
    color: "hover:text-accent-peach",
  },
  {
    icon: (
      <Icon>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </Icon>
    ),
    href: content.contact.linkedin,
    label: `@${content.contact.linkedin?.split("/").filter(Boolean).pop()}`,
    color: "hover:text-accent-mint",
  },
  {
    icon: (
      <Icon>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </Icon>
    ),
    href: content.contact.github,
    label: `@${content.contact.github?.split("/").filter(Boolean).pop()}`,
    color: "hover:text-accent-yellow",
  },
].filter((link) => link.href);

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-6 text-text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        Let's Connect
      </motion.h2>

      <motion.p
        className="text-text-secondary mb-10 text-base"
        style={{ whiteSpace: 'pre-line' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      >
        {content.contact.inviteLine}
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      >
        {links.map(({ icon, href, label, color }) => (
          <motion.a
            key={href}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-3 bg-bg-card rounded-2xl px-6 py-3 text-text-secondary transition-colors ${color}`}
          >
            {icon}
            <span className="text-sm font-semibold">{label}</span>
          </motion.a>
        ))}
      </motion.div>

      <WobbleDuck>
        <EnvelopeDuck size={80} />
      </WobbleDuck>

      <p className="mt-12 text-text-muted text-xs">
        Built with React, Tailwind, and a rubber duck 🦆
      </p>
    </section>
  );
}
