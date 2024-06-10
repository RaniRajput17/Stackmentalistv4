import React from "react";
import footer from "../../public/footer.png";
import logo from "../../public/logo.png";
import "./Footer.css";
function Footer() {
  return (
    <>
      
      <footer className="footer-area bg-f7fafd">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-col">
                  <div className="logo">
                  <a href="/">
                    <img
                      alt="logo"
                      loading="lazy"
                      width="70"
                      height="36"
                      decoding="async"
                      data-nimg="1"
                      src={logo}
                    />
                    </a>
                    <a
                      href="/"
                      style={{
                        color: "#0e314c",
                        fontSize: "18px",
                        textDecoration: "none",
                        fontWeight: '600'
                      }}
                    >
                      THE STACKMENTALIST
                    </a>
                  
                  </div>
                  <p style={{color: '#6084a4',marginLeft: '75px'}}>Great Innovations Ahead..!</p>
            </div>
            <div className="footer-col">
            <h3 style={{color: '#0e314c'}}>Address</h3>
                <ul class="footer-contact-info">
                  <li>
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
                    Hinjewadi, Pune, Maharashtra
                  </li>
                  <li>
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
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email:{" "}
                    <a href="mailto:work@stackmentalist.com">
                      work@stackmentalist.com
                    </a>
                  </li>
                  <li>
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
                      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Phone: <a href="tel:321984754">+91 7771810723</a>
                  </li>
                </ul>
                <ul class="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      class="facebook"
                      target="_blank"
                    >
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
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </li>
                 
                  <li>
                    <a
                      href="https://www.instagram.com/the_stackmentalist?igsh=MWxubjJicTY5dDBiZw=="
                      class="instagram"
                      target="_blank"
                    >
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
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/the-stackmentalist-211a3a248/"
                      class="linkedin"
                      target="_blank"
                    >
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
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </li>
                </ul>
            </div>
          </div>
          <div className="footer-bottom">

          <div class="copyright-area">
                <p style={{color:'#0e314c'}}>
                  © StackMentalist Ventures Pvt. Ltd.
                  {/* <a href="https://envytheme.com/" target="_blank">
                    EnvyTheme
                  </a> */}
                </p>
              </div>
          </div>
        </div>

        <img
          alt="map"
          loading="lazy"
          width="910"
          height="443"
          decoding="async"
          data-nimg="1"
          class="map"
          src={footer}
        />
      </footer>
    </>
  );
}

export default Footer;
