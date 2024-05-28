import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import profilphoto from "../assets/photo/photo.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
const Home = () => {
  const [text] = useTypewriter({
    words: ["Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="home-section" data-aos="fade-left">
        <div className="row ">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="home-left-section pt-5 ps-3">
              <p className="name-section">
                MY NAME <br />
                IS SHAIG <br />
                <span className="surname-section">NIZAMZADA...</span>
              </p>
              <p className="developer-section mt-2 my-5">
                {" "}
                <span className="bold-text-section ">
                  Front-End {text}
                </span>{" "}
                <span>
                  <Cursor cursorStyle="|" />
                </span>
                <br />
                based in <span className="bold-text-section">Baku</span>
              </p>
              <Link to="/contact">
                {" "}
                <button className="button-work button mb-5 mt-3">
                  Work with me &nbsp; &#8599;
                </button>
              </Link>
              <div className="d-flex align-items-center connection-section mt-3">
                <div className="phone-section mt-3">
                  <i class="fa-solid fa-mobile-screen-button"></i>
                  <span> +994 55 388 58 29</span>
                </div>
                <div className="email-section ms-5 mt-3">
                  <i class="fa-regular fa-envelope"></i>
                  <span> shaiqnizamzade@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="home-right-section pt-5 home-profile-photo">
              <img src={profilphoto} alt="" width={500} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
