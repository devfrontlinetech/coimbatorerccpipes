import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

import "../../assets/css/elements/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    const message = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}
`;

    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <span>CONTACT US</span>

        <h2>Let's Build Strong Infrastructure Together</h2>

        <p>
          Contact our team for RCC pipes, precast concrete products, drainage
          solutions, culverts, and customized infrastructure requirements.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            We manufacture premium RCC pipes and precast concrete products for
            infrastructure, municipal, industrial, and commercial projects.
          </p>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <div>
              <h4>Factory Address</h4>
              <p>
                4, Sama layout, Cbe, Ramanathapuram, Coimbatore, Tamil Nadu
                623545
              </p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <div>
              <h4>Call Us</h4>
              <p>+91 94865 44451</p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>info@coimbatorerccpipes.in</p>
            </div>
          </div>

          <div className="contact-item">
            <FaClock />
            <div>
              <h4>Working Hours</h4>
              <p>Mon - Sat : 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form-box">
          <h3>Request a Quote</h3>

          <form>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project requirements..."
              onChange={handleChange}
            ></textarea>

            <button
              type="button"
              className="contact-whatsapp-btn"
              onClick={handleWhatsApp}
            >
              <FaWhatsapp />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-section">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501269.1640863238!2d77.0183514!3d11.0262184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85712318e29d3%3A0x52de0e2436523566!2sCoimbatore%20Cement%20Pipes%20RCC%20Hume%20pipes!5e0!3m2!1sen!2sin!4v1783745336888!5m2!1sen!2sin"
          width="100%" /* Pro-tip: set to 100% so it's beautifully responsive on mobile screens! */
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
