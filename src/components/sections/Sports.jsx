import React from "react";
import { Trophy, Mountain, HeartPulse, Users } from "lucide-react";
import Reveal from "../animation/Reveal";
import { sports, stats } from "../../data/siteData";

const iconMap = { Mountain, Trophy, HeartPulse, Users };

export default function Sports() {
  return (
    <section id="sports" className="section sports-section">
      <Reveal>
        <div className="section-label">04 / BEYOND ACADEMICS</div>
        <div className="section-heading-row">
          <h2>Move. Play. <span>Discover.</span></h2>
          <p>
            “It’s not just a facility. At Tulas it’s the foundation!”
            Explore 16+ sports curated to bring joy and discipline to student life.
          </p>
        </div>
      </Reveal>

      <div className="sports-marquee">
        {[...sports, ...sports].map((sport, i) => (
          <div className="sport-pill" key={`${sport}-${i}`}>
            <Trophy size={16} /> {sport}
          </div>
        ))}
      </div>

      <div className="stats-grid">
        {stats.map(([value, label, iconName], i) => {
          const Icon = iconMap[iconName];
          return (
            <Reveal delay={i * 0.06} key={label}>
              <div className="stat-card">
                <Icon size={20} />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
