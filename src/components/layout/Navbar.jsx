import React from "react";
import { Menu, Moon, Sun, X, ArrowUpRight } from "lucide-react";
import { navItems } from "../../data/siteData";

export default function Navbar({ dark, setDark, menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="brand" onClick={closeMenu}>
        <span className="brand-mark">T</span>
        <span>
          <strong>TULAS</strong>
          <small>INTERNATIONAL SCHOOL</small>
        </span>
      </a>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
        ))}
        <a className="nav-apply" href="#admissions" onClick={closeMenu}>
          Apply now <ArrowUpRight size={16} />
        </a>
      </nav>

      <div className="nav-actions">
        <button className="theme-btn" onClick={() => setDark(v => !v)} aria-label="Toggle theme">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
