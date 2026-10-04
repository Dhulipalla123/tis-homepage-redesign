import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Academics from "./components/sections/Academics";
import Campus from "./components/sections/Campus";
import Sports from "./components/sections/Sports";
import Admissions from "./components/sections/Admissions";

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorActive, setCursorActive] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  useEffect(() => {
    const saved = localStorage.getItem("tis-theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("tis-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const move = (event) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    const over = (event) => {
      setCursorActive(Boolean(event.target.closest("a, button")));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div className="app">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className={`custom-cursor ${cursorActive ? "active" : ""}`} />

      <Navbar
        dark={dark}
        setDark={setDark}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <Hero />
        <About />
        <Academics />
        <Campus />
        <Sports />
        <Admissions />
      </main>

      <Footer />
    </div>
  );
}

export default App;
