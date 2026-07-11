import React from "react";
import "../../assets/css/elements/about.css";
import aboutImg from "../../assets/images/products/about-02.jpg";

const About = () => {
  const features = [
    "High Strength Concrete",
    "IS Standard Manufacturing",
    "Modern Machinery",
    "Timely Delivery",
    // "Quality Assurance",
    // "Expert Team",
  ];

  // const stats = [
  //   {
  //     number: "500+",
  //     label: "Projects",
  //   },
  //   {
  //     number: "100+",
  //     label: "Clients",
  //   },
  //   {
  //     number: "50+",
  //     label: "Employees",
  //   },
  // ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left Image */}
        <div className="about-image-section">
          <img
            src={aboutImg}
            alt="RCC Pipe Manufacturing"
            className="about-image"
          />
          {/* 
          <div className="experience-box">
            <h3>20+</h3>
            <span>Years Experience</span>
          </div> */}
        </div>

        {/* Right Content */}
        <div className="about-content">
          <span className="about-tag">ABOUT OUR COMPANY</span>

          <h3>
            Leading Manufacturer of
            <span> RCC Pipes & Precast Concrete Products</span>
          </h3>

          <p>
            We are a trusted name in RCC pipe manufacturing, delivering
            high-quality concrete pipes, box culverts, drainage systems, and
            precast products for infrastructure and industrial projects.
          </p>

          <p>
            Our state-of-the-art manufacturing facility, skilled workforce, and
            strict quality control ensure every product meets the highest
            industry standards.
          </p>

          {/* Features */}
          <div className="about-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                ✓ {feature}
              </div>
            ))}
          </div>

          {/* Stats */}
          {/* <div className="about-stats">
            {stats.map((item, index) => (
              <div key={index} className="stat-box">
                <h3>{item.number}</h3>
                <span>{item.label}</span>
              </div>
            ))}
          </div> */}

          <a href="#contact" className="about-btn">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
