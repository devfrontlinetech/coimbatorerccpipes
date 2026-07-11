import React from "react";
import "../../assets/css/elements/hero.css";
import heroVideo from "../../assets/videos/hero-sec/hero-vid-01.mp4";

const Hero = () => {
  const features = [
    "IS Standard Products",
    "High Strength Concrete",
    "Timely Delivery",
    "Modern Manufacturing",
  ];

  const buttons = [
    {
      id: 1,
      title: "Explore Products",
      link: "#products",
      className: "btn",
    },
    {
      id: 2,
      title: "Get Quote",
      link: "#contact",
      className: "btn btn-outline",
    },
  ];

  return (
    <section id="home" className="hero">
      {/* Background Video */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-left">
          {/* <span className="hero-tagline">
            Trusted RCC Pipe Manufacturer
          </span> */}

          <h1>
            <span>Premium RCC & Concrete Pipes</span>
          </h1>

          <p>
            Delivering durable RCC pipes, precast concrete products, drainage
            systems, culverts, and infrastructure solutions for government,
            industrial, and commercial projects.
          </p>

          {/* Features */}
          <div className="hero-features">
            {features.map((feature, index) => (
              <div key={index}>✓ {feature}</div>
            ))}
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            {buttons.map((button) => (
              <a
                key={button.id}
                href={button.link}
                className={button.className}
              >
                {button.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
