import React, { useState } from "react";
import "../../assets/css/common/bottom-nav.css";

import {
  FaHome,
  FaBoxOpen,
  FaIndustry,
  FaProjectDiagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Bottomnav({ onMenuClick }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer-section">
      <div className={`corepipe-radial-menu ${open ? "active" : ""}`}>
        {/* Toggle */}

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          title={open ? "Close Menu" : "Open Menu"}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <button
          className="menu-item item1"
          onClick={() => onMenuClick("home")}
          aria-label="Home"
          title="Home"
        >
          <FaHome aria-hidden="true" />
        </button>

        <button
          className="menu-item item2"
          onClick={() => onMenuClick("products")}
          aria-label="Products"
          title="Products"
        >
          <FaBoxOpen aria-hidden="true" />
        </button>

        <button
          className="menu-item item3"
          onClick={() => onMenuClick("industries")}
          aria-label="Industries"
          title="Industries"
        >
          <FaIndustry aria-hidden="true" />
        </button>

        <button
          className="menu-item item4"
          onClick={() => onMenuClick("projects")}
          aria-label="Projects"
          title="Projects"
        >
          <FaProjectDiagram aria-hidden="true" />
        </button>

        <button
          className="menu-item item5"
          onClick={() => onMenuClick("contact")}
          aria-label="Contact"
          title="Contact"
        >
          <FaPhoneAlt aria-hidden="true" />
        </button>
      </div>

      {/* WhatsApp */}

      <a
        href="https://wa.me/919486544451"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>

      {/* Call */}

      <a
        href="tel:+919486544451"
        className="call-btn"
        aria-label="Call us"
        title="Call"
      >
        <FaPhoneAlt aria-hidden="true" />
      </a>
    </div>
  );
}

export default Bottomnav;
