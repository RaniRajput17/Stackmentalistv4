
import React, { useState, useEffect } from 'react';
import logo from "../../public/logo.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) { // Change this value to adjust when the header background changes
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  let navigate = useNavigate();
  return (
    <>
      <header id="header" className={isScrolled ? 'header-scrolled' : 'header-container'}>
        
        <div className="container">
          <div className="nav">
            <a href="" className="nav-brand">
              <img src={logo} width="55px" height="60px" />
            </a>
            <a
              href="/"
              style={{
                // color: "#1e1666",
                color: '#0e314c',
                fontSize: "18px",
                textDecoration: "none",
                fontWeight: '600',

              }}
            >
              THE STACKMENTALIST
            </a>
          </div>

          {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <ul class="navbar">
            <li class="nav-item">
              <a class="nav-link" 
              onClick={(e) =>{ 
                e.preventDefault();
                navigate("/ourservices")
            }}
              href=""
              >
                
                Our Services{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" 
              onClick={(e) =>{ 
                e.preventDefault();
                navigate("/about")
            }
              }
              href=""
              >
                About Us{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" 
              onClick={(e) =>{ 
                e.preventDefault();
                navigate("/contact")
            }
              }
              href=""
              >
                Contact Us{" "}
              </a>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </header>
    </>
  );
}

export default Header;
