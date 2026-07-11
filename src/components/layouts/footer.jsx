import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../../assets/images/logo/logo.png";
import "../../assets/css/layouts/footer.css";

const Footer = () => {
  const handleClick = (link) => {
    const section = document.querySelector(link);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-column">
          <img
            src={logo}
            alt="Concrete Pipe Logo"
            className="concretepipe-logo-img"
            onClick={() => handleClick("#home")}
          />

          <p>
            Leading manufacturer of RCC pipes, box culverts, precast concrete
            products, drainage solutions, and infrastructure materials for
            government, industrial, and commercial projects.
          </p>

          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#home");
                }}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#about");
                }}
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#products");
                }}
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="#industries"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#industries");
                }}
              >
                Industries
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#projects");
                }}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-column">
          <h3>Our Products</h3>

          <ul>
            <li>RCC Pipes</li>
            <li>NP2 Pipes</li>
            <li>NP3 Pipes</li>
            <li>Jack Pipes</li>
            <li>Box Culverts</li>
            <li>Precast Concrete Products</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Info</h3>

          <div className="footer-contact">
            <FaMapMarkerAlt />
            <span>
              4, Sama layout, Cbe, Ramanathapuram, Coimbatore, Tamil Nadu 623545
            </span>
          </div>

          <div className="footer-contact">
            <FaPhoneAlt />
            <span>+91 94865 44451</span>
          </div>

          <div className="footer-contact">
            <FaEnvelope />
            <span>info@coimbatorerccpipes.in</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p className="copyright-text">
          Copyright {new Date().getFullYear()} RCC Pipes. Designed By{" "}
          <a
            href="https://frontlinetechnologies.org/"
            rel="noreferrer"
            target="_blank"
          >
            Frontline Technologies
          </a>
          . All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
