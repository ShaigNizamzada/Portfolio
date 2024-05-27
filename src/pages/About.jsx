import React from "react";
import profilphoto from "../assets/photo/photo.png";
// import { Link } from "react-router-dom";
import resume from "../assets/pdf/Shaig's-Resume.pdf";
const About = () => {
  return (
    <div className="about-section">
      <div className="about-section-top ps-4 py-5">
        <p className="nice-to">Nice to meet you!</p>
        <p className="welcome-to">WELCOME TO...</p>
      </div>
      <div className="about-section-middle ps-2">
        <div className="row">
          <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="about-section-middle-left text-center">
              <img src={profilphoto} alt="" width={320} />
              <h3 className="p-4">SHAIG NIZAMZADA</h3>
              <p className="developer-section mt-2 my-5">
                {" "}
                <span className="bold-text-section ">
                  Front-End Developer
                </span>{" "}
                based in <span className="bold-text-section">Baku</span>
              </p>
              <a download="Shaig's Resume.pdf" href={resume}>
                <button className="button-download button mb-5">
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
                <div className="details-section-second pb-4">
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
              <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                  <span>0+</span>
                  Years Experience
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
