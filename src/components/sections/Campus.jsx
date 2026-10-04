import React from "react";
import { Check } from "lucide-react";
import Reveal from "../animation/Reveal";

export default function Campus() {
  return (
    <section id="campus" className="section campus-section">
      <Reveal>
        <div className="section-label">03 / CAMPUS LIFE</div>

        <div className="campus-layout">
          <div>
            <h2>More than a campus.<br /><span>A place to belong.</span></h2>
            <p>
              From residential life to arts, athletics and community,
              TIS gives students room to become independent, confident
              and curious.
            </p>

            <div className="check-list">
              <span><Check size={15} /> Fully residential & co-educational</span>
              <span><Check size={15} /> Holistic learning environment</span>
              <span><Check size={15} /> Leadership & community experiences</span>
            </div>
          </div>

          <div className="campus-visual">
            <div className="campus-image">
              <span>THE TULAS<br /><b>EXPERIENCE</b></span>
            </div>
            <div className="campus-badge">DEHRADUN<br /><b>22 ACRES</b></div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
