import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Headerlayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        id="header"
        className={isScrolled ? "header-scrolled" : "header-container"}
      >
        <div className="container">
          <div className="nav">
            <a href="/" className="nav-brand">
              <img style={{ width: "60px" }} src={logo} alt="Logo" />
              <a
                href="/"
                style={{
                  // color: "#1e1666",
                  color: "#0e314c",
                  fontSize: "14px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                THE STACKMENTALIST
              </a>
            </a>

            <button
              className={`hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>

          <ul className={`navbar ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/ourservices");
                  setIsMenuOpen(false);
                }}
                href=""
              >
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/about");
                  setIsMenuOpen(false);
                }}
                href=""
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                  setIsMenuOpen(false);
                }}
                href=""
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Headerlayout;
