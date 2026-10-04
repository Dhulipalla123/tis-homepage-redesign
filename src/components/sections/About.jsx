import React from "react";
import Reveal from "../animation/Reveal";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-grid">
        <Reveal>
          <div className="section-label">01 / ABOUT TIS</div>
          <h2>School should feel like an <span>opportunity.</span></h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="lead">
            Tulas International School was established in 2012 under the
            aegis of Rishabh Educational Trust. TIS combines academic
            excellence with a nurturing environment where students can
            discover their strengths and build confidence.
          </p>
          <a className="text-link" href="#academics">
            Our approach <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>

      <div className="quote-panel">
        <div className="quote-mark">“</div>
        <Reveal>
          <p>
            At Tulas, school isn’t just about lessons — it’s about endless
            opportunities waiting to be explored.
          </p>
          <span>— Tulas International School</span>
        </Reveal>
      </div>
    </section>
  );
}
