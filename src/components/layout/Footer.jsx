import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="brand footer-brand">
          <span className="brand-mark">T</span>
          <span>
            <strong>TULAS</strong>
            <small>INTERNATIONAL SCHOOL</small>
          </span>
        </div>

        <p>
          The Modern Gurukul<br />
          Dhoolkot, Dehradun, Uttarakhand
        </p>

        <a href="mailto:info@tis.edu.in">info@tis.edu.in</a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tulas International School</span>
        <div><a href="#home">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
