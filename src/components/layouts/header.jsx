import React, { useState, useEffect } from "react";
import "../../assets/css/layouts/header.css";

import logo from "../../assets/images/logo/logo.png";

import { FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";

import { FiPhoneCall } from "react-icons/fi";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "Products", link: "#products" },
    { id: 3, name: "Industries", link: "#industries" },
    { id: 4, name: "Projects", link: "#projects" },
    { id: 5, name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (link) => {
    const section = document.querySelector(link);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",

        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className={`concretepipe-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="concretepipe-navbar">
        {/* LOGO */}

        <div className="concretepipe-logo">
          <img
            src={logo}
            alt="Concrete Pipe Logo"
            className="concretepipe-logo-img"
            onClick={() => handleClick("#home")}
          />
        </div>

        {/* MENU */}

        <ul className={`concretepipe-nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((item) => (
            <li key={item.id}>
              <button
                className="concretepipe-nav-link-btn"
                onClick={() => handleClick(item.link)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* CONTACT INFO */}

        <div className="concretepipe-location">
          <div className="location-row">
            <FaMapMarkerAlt className="location-icon" />

            <span>Coimbatore, Tamil Nadu</span>
          </div>

          <div className="location-row">
            <FiPhoneCall className="phone-icon" />

            <span>+91 94865 44451</span>
          </div>
        </div>

        {/* BUTTON */}

        <div className="header-right">
          <button
            className="header-quote-btn"
            onClick={() => handleClick("#contact")}
          >
            Book Order
          </button>
        </div>

        {/* HAMBURGER */}

        <div className="header-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
