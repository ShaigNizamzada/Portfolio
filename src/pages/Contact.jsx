import React, { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_19uv87l", "template_yfilu2s", form.current, {
        publicKey: "l196bMncVHDktiWLl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          swal({
            title: "",
            text: "Your Message has been sent",
            icon: "success",
            timer: 1500,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="contact-section" data-aos="fade-left">
      <div className="row g-4">
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
          <div className="contact-section-left px-2">
            <div className="contact-section-left-top mb-4">
              {" "}
              <h3 className="text-white">Contact</h3>
              <h2 className="text-white">REACH OUT ME</h2>
            </div>
            <div className="contact-section-left-bottom d-flex flex-column gap-3">
              <div className="contact-box chat-to-me">
                <div className="d-flex gap-4 align-items-center">
                  <div className="icon-section d-flex align-items-center justify-content-center">
                    <i class="fa-regular fa-message"></i>
                  </div>
                  <div className="text-section">
                    <h3 className="text-white">Chat to Me</h3>
                    <p>shaiqnizamzade@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="contact-box socialmedia-to-me">
                <div className="d-flex gap-4 align-items-center">
                  <div className="icon-section d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-share"></i>
                  </div>
                  <div className="text-section">
                    <h3 className="text-white">Contact me via Social Media</h3>
                    <div className="d-flex flex-column gap-3 mt-3">
                      <div className="instagram-section ">
                        {" "}
                        <i class="fa-brands fa-instagram text-white pe-2"></i>
                        <span>n_shaig</span>
                      </div>
                      <div className="linkedin-section">
                        {" "}
                        <i class="fa-brands fa-linkedin text-white pe-2"></i>
                        <span>shaignizamzada</span>
                      </div>
                      <div className="github-section">
                        {" "}
                        <i class="fa-brands fa-github text-white pe-2"></i>
                        <span>ShaigNizamzada</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-box call-me">
                <div className="d-flex gap-4 align-items-center">
                  <div className="icon-section d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                  </div>
                  <div className="text-section">
                    <h3 className="text-white">Call Me</h3>
                    <span>+994 55 388 58 29</span>
                    <span> / </span>
                    <span>+994 77 388 58 29</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
          <div className="contact-section-right">
            <h3>Contact Me!</h3>
            <form className="p-4" onSubmit={sendEmail} ref={form}>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-2">
                  <div className="d-flex flex-column">
                    <label>FULL NAME</label>
                    <input
                      required
                      type="text"
                      placeholder="Full Name *"
                      name="fullname"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-2">
                  <div className="d-flex flex-column">
                    <label>YOUR EMAIL</label>
                    <input
                      required
                      type="email"
                      placeholder="Your Email *"
                      name="email"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column my-3">
                <label>Subject</label>
                <input
                  required
                  type="text"
                  placeholder="Subject *"
                  name="subject"
                />
              </div>
              <div className="d-flex flex-column">
                <label>Your Message</label>
                <textarea
                  required
                  rows={10}
                  type="text"
                  placeholder="Your Message *"
                  name="message"
                />
              </div>
              <button type="submit" className="send-button btn mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
