import React, {useState} from 'react'
import "./ContactUs.css"
import shape1 from "../../public/shapes/shape1.png"
import shape2 from "../../public/shapes/shape2.svg"
import shape3 from "../../public/shapes/shape3.svg"
import shape4 from "../../public/shapes/shape4.svg"
import shape7 from "../../public/shapes/shape4.svg"
import contactus from "../../public/contactus.jpg"
function ContactUs() {
  const [formSubmit, setFormSubmit] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f9ef7991-c1f8-4bda-b88e-6c27c429a3b7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        alert('message sent successfully');
    }
}
  return (
    <>
    <div className="page-title-area">
        <div className="title-container">
            <h2>Contact Us</h2>
        </div>
        <div class="shape1"><img alt="shape" loading="lazy" width="202" height="202" decoding="async" data-nimg="1" src={shape1}/>
        </div>
        <div class="shape22 rotateme"><img alt="shape" loading="lazy" width="22" height="22" decoding="async" data-nimg="1" src={shape2}/>
        </div>
        <div class="shape3"><img alt="shape" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" src={shape3}/>
        </div>
        <div class="shape4"><img alt="shape" loading="lazy" width="21" height="20" decoding="async" data-nimg="1" src={shape4}/>
        </div>
        <div class="shape7"><img alt="shape" loading="lazy" width="21" height="20" decoding="async" data-nimg="1" src={shape7}/>
        </div>
    </div>
    <div className="contact-info">
      <div className="contact-container">

        <div className="contact-col">
            <div className="contact-info-box">
              <div className="icon">
              <svg className ="icon-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <h3>Mail here</h3>
                <p><a href="mailto:work@stackmentalist.com">work@stackmentalist.com</a></p>
            </div>
        </div>
        <div className="contact-col">
            <div className="contact-info-box">
              <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3>Visit Here</h3>
                <p>Hinjewadi, Pune, Maharashtra</p>
            </div>
        </div>
        <div className="contact-col">
            <div className="contact-info-box">
              <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3>Call Here</h3>
                <p>+91 7771810723</p>
            </div>
        </div>

      </div>
    </div>


    <div className="contact-area">
      <div className="contact-area-container">
      <div class="section-title"><h2>Get In Touch With Us</h2><div class="bar"></div><p>Anything On your Mind. We’ll Be Glad To Assist You!</p></div>
      

      <div className="contact-row">
        <div className="contact-area-col">
          <img src = {contactus} alt = "contact"/>
        </div>
        <div className="contact-area-col">



<form onSubmit={handleSubmit} className = "form-col">
  
  <div className="form-row">
  <div class="form-group">
    <input type="text" name="name" placeholder="Your Name" className="form-control" required=""/></div>
  </div>
  <div className="form-row">
  <div class="form-group">
  <input
                name="email"
                type="email"
                placeholder="Your email"
                className="form-control"
              />
              </div>
  </div>

  <div className="form-row">
  <div class="form-group">
  <input
                name="company"
                type="text"
                placeholder="Company Name"
                className="form-control"
              />
              </div>
  </div>
  <div className="form-row">
  <div class="form-group">
  <textarea
                name="message"
                className="messageInput"
                placeholder="Your message"
                // className="form-control"
              ></textarea>
              </div>
  </div>
  <div className="form-row">
  <button type="submit" onSubmit={handleSubmit} class="btn btn-primary">Send Message</button>
  </div>
</form>
        
      {/* <form id="contactForm" >
        <article class="letter">
          <div class="side">
            

            
            <p>
              <textarea
                name="message"
                className="messageInput"
                placeholder="Your message"
              ></textarea>
            </p>
          </div>
          <div class="side">
            <p>
              <input
                name="name"
                type="text"
                className="formInput"
                placeholder="Your name"
              />
            </p>
            <p>
              <input
                name="email"
                type="email"
                className="formInput"
                placeholder="Your email"
              />
            </p>
            <p>
              <input
                name="company"
                type="text"
                className="formInput"
                placeholder="Company Name"
              />
            </p>
            <button type="submit"
        style={{ float: "right" }}
        >
               
             </button>


        </div>
        </article>
      </form> */}
   









        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default ContactUs