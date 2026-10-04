import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CirclePlay, GraduationCap, Sparkles } from "lucide-react";
import Reveal from "../animation/Reveal";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <div className="hero-content">
        <Reveal>
          <div className="eyebrow"><Sparkles size={15} /> THE MODERN GURUKUL</div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1>Where <em>curiosity</em><br />becomes a way of life.</h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p>
            A contemporary CBSE boarding and day school in Dehradun,
            designed to help young minds learn, explore, lead and grow.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="hero-actions">
            <a className="primary-btn" href="#admissions">
              Explore admissions <ArrowRight size={18} />
            </a>
            <a className="play-link" href="#campus">
              <span className="play-icon"><CirclePlay size={18} /></span>
              Discover campus life
            </a>
          </div>
        </Reveal>
      </div>

      <motion.div
        className="hero-art"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="hero-photo">
          <div className="photo-overlay" />
          <div className="hero-card">
            <span>EST. 2012</span>
            <strong>Learn.<br />Lead.<br /><i>Live.</i></strong>
          </div>
        </div>

        <div className="floating-note">
          <GraduationCap size={20} />
          <span>Academic excellence<br /><b>with a human touch</b></span>
        </div>
      </motion.div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line" />
        <span>DEHRADUN · INDIA</span>
      </div>
    </section>
  );
}
