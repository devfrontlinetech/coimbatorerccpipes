import React from "react";
import "../../assets/css/elements/projects.css";

import project1 from "../../assets/images/projects/project-01.jpg";
import project2 from "../../assets/images/projects/project-02.jpg";
import project3 from "../../assets/images/projects/project-03.jpg";
import project4 from "../../assets/images/projects/project-04.jpg";
import project5 from "../../assets/images/projects/project-05.jpg";
import project6 from "../../assets/images/projects/project-06.jpg";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      image: project1,
      title: "National Highway Drainage Project",
      location: "Coimbatore, Tamil Nadu",
      year: "2024",
      description:
        "Supply and installation of RCC pipes and box culverts for a large-scale highway drainage network.",
    },
    {
      id: 2,
      image: project2,
      title: "Municipal Sewer Network",
      location: "Chennai, Tamil Nadu",
      year: "2023",
      description:
        "High-capacity sewer pipeline infrastructure using NP3 and RCC concrete pipes.",
    },
    {
      id: 3,
      image: project3,
      title: "Industrial Drainage System",
      location: "SIPCOT Industrial Park",
      year: "2024",
      description:
        "Custom drainage and wastewater management solutions for industrial facilities.",
    },
    {
      id: 4,
      image: project4,
      title: "Smart City Infrastructure",
      location: "Madurai",
      year: "2023",
      description:
        "Stormwater drainage systems and precast concrete products for smart city development.",
    },
    {
      id: 5,
      image: project5,
      title: "Agricultural Irrigation Project",
      location: "Erode",
      year: "2022",
      description:
        "Large diameter RCC pipes supplied for irrigation and water transportation systems.",
    },
    {
      id: 6,
      image: project6,
      title: "Commercial Township Development",
      location: "Salem",
      year: "2024",
      description:
        "Complete drainage and utility infrastructure using precast concrete products.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        {/* <span>OUR PROJECTS</span> */}

        <h2>Successful Infrastructure Projects</h2>

        <p>
          Over the years, we have delivered high-quality RCC pipes, precast
          concrete products, drainage systems, and infrastructure solutions for
          government, industrial, municipal, and commercial projects across the
          region.
        </p>
      </div>

      <div className="project-stats">
        <div className="project-stat-card">
          <h3>500+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="project-stat-card">
          <h3>100+</h3>
          <p>Government Contracts</p>
        </div>

        <div className="project-stat-card">
          <h3>20+</h3>
          <p>Years Experience</p>
        </div>

        <div className="project-stat-card">
          <h3>100%</h3>
          <p>Quality Assurance</p>
        </div>
      </div>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <div className="project-top">
                <span>{project.year}</span>
                <span>{project.location}</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <button className="project-btn">View Project</button>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-bottom">
        <h3>Building Strong Infrastructure for the Future</h3>

        <p>
          From highways and smart cities to industrial parks and municipal
          drainage systems, our RCC pipe solutions have played a key role in
          numerous successful infrastructure developments.
        </p>

        <a href="#contact" className="projects-contact-btn">
          Start Your Project
        </a>
      </div>
    </section>
  );
};

export default Projects;
