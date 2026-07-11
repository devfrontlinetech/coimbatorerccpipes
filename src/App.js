import React from "react";
import Header from "./components/layouts/header.jsx";
import Footer from "./components/layouts/footer.jsx";
import Hero from "./components/landing-page/hero.jsx";
import About from "./components/landing-page/about.jsx";
import Products from "./components/landing-page/products.jsx";
import Industries from "./components/landing-page/industries.jsx";
import Projects from "./components/landing-page/projects.jsx";
import Contact from "./components/landing-page/contact.jsx";
import Bottomnav from "./components/common/bottom-nav.jsx";
import Floating from "./components/common/float.jsx";

function App() {
  // Scroll to section handler
    const handleMenuClick = (section) => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <>
      <Header />

      <Hero />
      <About />
      <Products />
      <Industries />
      <Projects />
      <Contact />
      <Footer />

      {/* Bottom Navigation */}
      <Bottomnav onMenuClick={handleMenuClick} />
      <Floating />
    </>
  );
}

export default App;
