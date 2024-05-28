import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Portfolio = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return <div className="portfolio-section" data-aos="fade-left">Portfolio</div>;
};

export default Portfolio;
