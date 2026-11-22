import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import content from "../data/content";
import useTypewriter from "../hooks/useTypewriter";
import { BaseDuck, WobbleDuck } from "../assets/duck";
import EasterEggTerminal from "./EasterEggTerminal";

export default function Hero() {
  const navigate = useNavigate();
  const { displayText } = useTypewriter(content.hero.phrases);
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % content.hero.statusBadges.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 text-center"
    >
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <WobbleDuck onClick={() => setShowTerminal(true)} className="mb-6">
          <BaseDuck size={140} />
        </WobbleDuck>

        <div className="h-8 mb-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={badgeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs font-bold px-4 py-1.5 rounded-full border border-accent-yellow/30"
            >
              {content.hero.statusBadges[badgeIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary mb-4 tracking-tight">
          {content.hero.name}
        </h1>

        <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-lg mx-auto" style={{ whiteSpace: 'pre-line' }}>
          {content.hero.tagline}
        </p>

        <div className="text-accent-mint text-base md:text-lg font-semibold h-8">
          <span>exploring </span>
          <span className="text-accent-yellow">{displayText}</span>
          <span className="animate-pulse ml-0.5 text-accent-yellow">|</span>
        </div>
        <div className="mt-8 max-w-3xl mx-auto" aria-labelledby="hero-tech-stack">
          <h2 id="hero-tech-stack" className="text-sm font-bold tracking-widest uppercase text-text-secondary mb-4">
            Tech Stack
          </h2>
          <div className="space-y-3">
            <ul aria-label="Programming languages" className="flex flex-wrap justify-center gap-2">
              {content.skills.categories[0].items.map((item) => (
                <li key={item} className="text-sm font-semibold px-3 py-1.5 rounded-full border border-accent-yellow/20 bg-accent-yellow/10 text-accent-yellow">
                  {item}
                </li>
              ))}
            </ul>
            <ul aria-label="Technologies" className="flex flex-wrap justify-center gap-2">
              {content.skills.categories.slice(1, 3).flatMap((category) => category.items).map((item) => (
                <li key={item} className="text-sm font-semibold px-3 py-1.5 rounded-full border border-accent-mint/20 bg-accent-mint/10 text-accent-mint">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <EasterEggTerminal
        show={showTerminal}
        onClose={() => setShowTerminal(false)}
        navigate={navigate}
      />
    </section>
  );
}
