import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Education = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Education-section" data-aos="fade-left">
      Education
    </div>
  );
};

export default Education;
