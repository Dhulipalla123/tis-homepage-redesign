import React from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import Reveal from "../animation/Reveal";

export default function Admissions() {
  return (
    <section id="admissions" className="admission-section">
      <div className="admission-glow" />

      <Reveal>
        <div className="section-label light">05 / ADMISSIONS</div>

        <h2>Give your child<br /><em>room to grow.</em></h2>

        <p>
          Registrations are open for Classes IV–IX and XI.
          Begin the journey to Tulas International School.
        </p>

        <div className="admission-actions">
          <a
            className="light-btn"
            href="https://admission.tis.edu.in/"
            target="_blank"
            rel="noreferrer"
          >
            Start application <ArrowUpRight size={18} />
          </a>

          <a className="phone-link" href="tel:+919837983791">
            <Phone size={17} /> +91 98379 83791
          </a>
        </div>
      </Reveal>
    </section>
  );
}
