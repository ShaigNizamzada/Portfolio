import React, { useEffect } from "react";
import profilphoto from "../assets/photo/photo.png";
// import { Link } from "react-router-dom";
import resume from "../assets/pdf/Shaig's-Resume.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="about-section" data-aos="fade-left">
      <div className="about-section-top ps-4 pb-5 pt-4 d-flex flex-column">
        <p className="nice-to">Nice to meet you!</p>
        <p className="welcome-to">WELCOME TO...</p>
      </div>
      <div className="about-section-middle ps-2">
        <div className="row">
          <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="about-section-middle-left text-center">
              <img src={profilphoto} alt="" width={320} />
              <h3 className="py-2">SHAIG NIZAMZADA</h3>
              <p className="developer-section mb-3">
                {" "}
                <span className="bold-text-section ">
                  Front-End Developer
                </span>{" "}
                based in <span className="bold-text-section">Baku</span>
              </p>
              <a download="Shaig's Resume.pdf" href={resume}>
                <button className="button-download button mb-3">
                  Download CV &nbsp; <i class="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="about-section-middle-right container">
              <p>
                Born in 1996,Baku. I gratuated from Marmara University
                environmental engineering department. But thanks to my passion
                for coding, I decided to move in this direction and I am
                currently on my way to becoming a front-end developer.
              </p>
              <div className="details-section ps-1">
                <div className="details-section-first py-3 ">
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 pb-2">
                      {" "}
                      <i class="fa-solid fa-mobile-screen-button"></i>
                      <span> &nbsp; +994 55 388 58 29</span>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                      <i class="fa-regular fa-user"></i>
                      <span> &nbsp; Shaig Nizamzada</span>
                    </div>
                  </div>
                </div>
                <div className="details-section-second pb-2">
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 pb-2">
                      {" "}
                      <i class="fa-regular fa-envelope"></i>
                      <span> &nbsp; shaiqnizamzade@gmail.com</span>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                      <i class="fa-regular fa-map"></i>
                      <span> &nbsp; Baku, Azerbaijan</span>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div className="skills-section">
                <div className="row">
                  <div className="col-9 mx-auto">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <h5 className="skill-text text-center mb-4">My Skills</h5>
                      <div className="logos-section d-flex gap-4 flex-wrap align-items-center justify-content-center">
                        <div className="icon d-flex flex-column align-items-center justify-content-center">
                          <i className="fa-brands html fa-html5"></i>
                          <p>HTML5</p>
                        </div>
                        <div className="icon d-flex flex-column align-items-center justify-content-center">
                          <i className="fa-brands css fa-css3-alt"></i>
                          <p>CSS3</p>
                        </div>
                        <div className="icon d-flex flex-column align-items-center justify-content-center">
                          <i className="fa-brands js fa-js"></i>
                          <p>JavaScript</p>
                        </div>
                        <div className="icon d-flex flex-column align-items-center justify-content-center">
                          <i className="fa-brands react fa-react"></i>
                          <p>React</p>
                        </div>
                        <div className="icon d-flex flex-column align-items-center justify-content-center">
                          <SiRedux
                            style={{
                              fontSize: "24px",
                              color: "#ffffff",
                            }}
                            className="redux"
                          />
                          <p>Redux</p>
                        </div>
                        <div className="icon d-flex flex-column align-items-center justify-content-center">
                          <SiTypescript
                            style={{
                              fontSize: "24px",
                              color: "#ffffff",
                            }}
                            className="ts"
                          />
                          <p>TypeScript</p>
                        </div>
                        <div className="icon d-flex flex-column align-items-center justify-content-center">
                          <i className="fa-brands bootstrap fa-bootstrap"></i>
                          <p>BootStrap5</p>
                        </div>
                        <div className="icon d-flex flex-column align-items-center justify-content-center">
                          <i className="fa-brands sass fa-sass"></i>
                          <p>SASS</p>
                        </div>
                        <div className="icon d-flex flex-column align-items-center justify-content-center">
                          <i className="fa-brands github fa-github"></i>
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
