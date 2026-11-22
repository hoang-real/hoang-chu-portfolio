import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

const Thoughts = lazy(() => import("./pages/Thoughts"));

function PortfolioLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg" />}>
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="/thoughts" element={<Thoughts />} />
      </Routes>
    </Suspense>
  );
}
