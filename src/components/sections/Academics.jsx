import React from "react";
import { BookOpen, Palette, ShieldCheck, ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";

const features = [
  [BookOpen, "CBSE Curriculum", "A structured curriculum that prioritises reasoning, analytical thinking and skill-based learning."],
  [Palette, "Experiential Learning", "Project-based and art-integrated experiences encourage creativity and critical thinking."],
  [ShieldCheck, "Future Ready", "Digital classrooms, immersive technology and opportunities beyond the classroom."],
];

export default function Academics() {
  return (
    <section id="academics" className="section academic-section">
      <Reveal>
        <div className="section-label">02 / ACADEMICS</div>
        <div className="section-heading-row">
          <h2>A curriculum built for <span>tomorrow.</span></h2>
          <p>
            Reasoning over rote learning. Experience over memorisation.
            A CBSE journey shaped around the whole child.
          </p>
        </div>
      </Reveal>

      <div className="feature-grid">
        {features.map(([Icon, title, text], i) => (
          <Reveal delay={i * 0.08} key={title}>
            <article className="feature-card">
              <div className="icon-box"><Icon size={22} /></div>
              <span className="card-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpRight className="card-arrow" size={20} />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
