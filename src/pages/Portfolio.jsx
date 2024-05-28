import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import mottagaming from "../assets/photo/motta-project.png";
import blackwhite from "../assets/photo/blackwhite-project.png";
import todolist from "../assets/photo/todolist-project.png";
import { Link } from "react-router-dom";
const Portfolio = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="portfolio-section" data-aos="fade-left">
      <div className="portfolio-top-section ps-3">
        <p>My Work</p>
        <h2>RECENT PROJECTS</h2>
      </div>
      <div className="portfolio-bottom-section px-2">
        <div className="row mt-5 g-5">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                {" "}
                <div className="photo-section mb-3">
                  <img src={mottagaming} alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-between">
                {" "}
                <div className="text-section-top">
                  <h3>WebSite</h3>
                  <h2>Motta Gaming</h2>
                </div>
                <div className="link-section pb-1">
                  <Link
                    to="https://finalproject-ten-omega.vercel.app/"
                    className="link fs-1 text-white"
                    target="_blank"
                  >
                    &#8599;
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                {" "}
                <div className="photo-section mb-3">
                  <img src={blackwhite} alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-between">
                {" "}
                <div className="text-section-top">
                  <h3>WebSite</h3>
                  <h2>BlackWhite</h2>
                </div>
                <div className="link-section pb-1">
                  <Link
                    className="link fs-1 text-white"
                    to="https://black-white-notebook-website.vercel.app/"
                    target="_blank"
                  >
                    &#8599;
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                {" "}
                <div className="photo-section mb-3">
                  <img src={todolist} alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-between">
                {" "}
                <div className="text-section-top">
                  <h3>WebApp</h3>
                  <h2>To Do List</h2>
                </div>
                <div className="link-section pb-1">
                  <Link
                    className="link fs-1 text-white"
                    to="https://shaignizamzada.github.io/To-Do-List/"
                    target="_blank"
                  >
                    &#8599;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
