import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="contact-section" data-aos="fade-left">
      Contact
    </div>
  );
};

export default Contact;
