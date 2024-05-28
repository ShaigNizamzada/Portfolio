import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Education = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="education-section" data-aos="fade-left">
      <div className="row">
        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="education-section-left">
            <h3 className="text-white">Education</h3>
            <h1 className="text-white">MY EDUCATION</h1>
            <p className="text-white">
              Hello there! My name is Shaig Nizamzada. <br /> I am a front-end &
              web developer, <br /> and I'm very passionate and dedicated to my
              work.
            </p>
          </div>
        </div>
        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="education-section-right me-3">
            <div className="first-education">
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold">Oct, 2023 - Apr, 2024</p>
                <p className="fw-bold">Front-End Development</p>
              </div>
              <h2 className="mb-5 mt-3">
                MATRIX ACADEMY BOOTCAMP (honours degree)
              </h2>
            </div>
            <hr />
            <div className="second-education">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold">Sep, 2014 - May, 2021</p>
                <p className="fw-bold">Environmental Engineering</p>
              </div>
              <h2 className="mb-5 mt-3">MARMARA UNIVERSITY</h2>
            </div>
            <hr />
            <div className="third-education">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold">Sep, 2006 - May, 2013</p>
                <p className="fw-bold">High School</p>
              </div>
              <h2 className="mb-5 mt-3">TDV BTL</h2>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
