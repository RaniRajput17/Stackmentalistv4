import React, { useState } from "react";
import "./ContactUs2.css";
import shape1 from "../assets/shapes/shape1.png";
import shape2 from "../assets/shapes/shape2.svg";
import shape3 from "../assets/shapes/shape3.svg";
import shape4 from "../assets/shapes/shape4.svg";
import shape7 from "../assets/shapes/shape4.svg";
import contactus from "../assets/contactus.jpg";
function ContactUs() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b55cafcc-6caf-4055-adde-cf642419bdc4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      alert("message sent successfully");
    }
  }
  return (
    <>
      <div>
        <div className="page-title-area">
          <div className="title-container">
            <h2>Contact Us</h2>
          </div>
          <div class="shape1">
            <img
              alt="shape"
              loading="lazy"
              width="202"
              height="202"
              decoding="async"
              data-nimg="1"
              src={shape1}
            />
          </div>
          <div class="shape22 rotateme">
            <img
              alt="shape"
              loading="lazy"
              width="22"
              height="22"
              decoding="async"
              data-nimg="1"
              src={shape2}
            />
          </div>
          <div class="shape3">
            <img
              alt="shape"
              loading="lazy"
              width="28"
              height="28"
              decoding="async"
              data-nimg="1"
              src={shape3}
            />
          </div>
          <div class="shape4">
            <img
              alt="shape"
              loading="lazy"
              width="21"
              height="20"
              decoding="async"
              data-nimg="1"
              src={shape4}
            />
          </div>
          <div class="shape7">
            <img
              alt="shape"
              loading="lazy"
              width="21"
              height="20"
              decoding="async"
              data-nimg="1"
              src={shape7}
            />
          </div>
        </div>
        <div className="contact-cards-row">
          <div className="contact-cards">
            <div className="icon">
              <svg
                className="icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>Mail here</h3>
            <p>
              <a href="mailto:work@stackmentalist.com">
                work@stackmentalist.com
              </a>
            </p>
          </div>
          <div className="contact-cards">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Visit Here</h3>
            <p>Hinjewadi, Pune, Maharashtra</p>
          </div>
          <div className="contact-cards">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3>Call Here</h3>
            <p>+91 7771810723</p>
          </div>
        </div>

        {/* ********************************************** */}
        <div className="contact-form-row">
          <div className="contact-form-title">
            <h2>Get In Touch With Us</h2>
            <div class="bar"></div>
            <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
          </div>
          <div className="contact-form-row2">
            <div className="contact-form-img">
              <img src={contactus} alt="contact" />
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit} className="contact-form-col">
                <div class="form-element">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    required=""
                  />
                </div>

                <div class="form-element">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="form-control"
                  />
                </div>

                <div class="form-element">
                  <input
                    name="company"
                    type="text"
                    placeholder="Company Name"
                    className="form-control"
                  />
                </div>

                <div class="form-element">
                  <textarea
                    name="message"
                    className="messageInput"
                    placeholder="Your message"
                    // className="form-control"
                  ></textarea>
                </div>
                <div className="form-row">
                  <button
                    type="submit"
                    onSubmit={handleSubmit}
                    class="btn btn-primary"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ********************************************************** */}
      </div>
    </>
  );
}

export default ContactUs;
