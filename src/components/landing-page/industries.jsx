import React from "react";
import {
  FaRoad,
  FaWater,
  FaIndustry,
  FaCity,
  FaTractor,
  FaBuilding,
} from "react-icons/fa";

import "../../assets/css/elements/industries.css";

const Industries = () => {
  const industries = [
    {
      id: 1,
      icon: <FaRoad />,
      title: "Road & Highway Projects",
      description:
        "RCC pipes and box culverts for highways, bridges, road drainage, and transportation infrastructure.",
    },
    {
      id: 2,
      icon: <FaWater />,
      title: "Water Management",
      description:
        "Stormwater drainage systems, sewerage networks, and water distribution projects.",
    },
    {
      id: 3,
      icon: <FaIndustry />,
      title: "Industrial Infrastructure",
      description:
        "Heavy-duty concrete solutions for factories, industrial parks, and utility networks.",
    },
    {
      id: 4,
      icon: <FaCity />,
      title: "Municipal Projects",
      description:
        "Smart city developments, urban drainage systems, and public utility projects.",
    },
    {
      id: 5,
      icon: <FaTractor />,
      title: "Agriculture & Irrigation",
      description:
        "Irrigation channels, water transport systems, and agricultural drainage applications.",
    },
    {
      id: 6,
      icon: <FaBuilding />,
      title: "Commercial Construction",
      description:
        "Reliable RCC and precast products for commercial buildings and large-scale developments.",
    },
  ];

  return (
    <section id="industries" className="industries">
      <div className="industries-header">
        {/* <span>OUR INDUSTRIES</span> */}

        <h2>Industries We Serve</h2>

        <p>
          Delivering high-quality RCC pipes and precast concrete solutions
          across multiple industries and infrastructure sectors.
        </p>
      </div>

      <div className="industries-grid">
        {industries.map((industry) => (
          <div className="industry-card" key={industry.id}>
            <div className="industry-icon">{industry.icon}</div>

            <h3>{industry.title}</h3>

            <p>{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
