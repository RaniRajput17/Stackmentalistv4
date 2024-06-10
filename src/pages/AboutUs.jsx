import React from 'react'
import "./AboutUs.css"
import aboutus from "../../public/about-us.png"
import Team from "./Team.js";
import Card from "./Card.jsx"
import shape1 from "../../public/shapes/shape1.png"
import shape2 from "../../public/shapes/shape2.svg"
import shape3 from "../../public/shapes/shape3.svg"
import shape4 from "../../public/shapes/shape4.svg"
import shape7 from "../../public/shapes/shape4.svg"
function AboutUs() {
  return (
    <>
    <div className="page-title">
        <div className="title">
            <h2>About Us</h2>
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
    <div className="about-area">
        <div className="container-about">
            <div className="col">
                <img  alt="image" loading="lazy" width="685" height="494" decoding="async" data-nimg="1" src={aboutus} />
            </div>
            <div className="col">
                <div className="about-content">
                    <div className="section-title">
                        <h2 style={{fontSize: '25px'}}>About Stackmentalist</h2>
                        <div className="bar">

                        </div>
                    </div>
                    <div className='pera-content'>
                      <h4 style={{fontWeight: 600,fontSize: '20px',marginTop: '-2px',color: '#6084a4'}}>"StackMentalist crafts high-quality, platform-independent software tailored to diverse business needs"</h4>
                    <p >StackMentalist is dedicated to crafting customer-oriented, platform-independent software. With extensive experience across diverse business domains and industry verticals, our proven delivery model ensures high-quality, cost-effective application development tailored to your business requirements.
              </p>
              <p >StackMentalist boasts global references affirming its commitment to software development excellence. Our seasoned professionals are adept with the latest development tools, having created numerous systems leveraging top-tier frontend and backend technologies.
              </p>
              </div>
                              </div>
            </div>
        </div>
    </div>
    <div className="teams">
        {/* <div className="teams-container"> */}
            <div className="founders">
                <h2>Team</h2>
                <div className="cards">
                {Team?.founder?.map((founder, index) => (
            <Card
              key={index}
              name={founder.name}
              img={founder.img}
              designation={founder.designation}
            />
          ))}
                        
                </div>
            </div>
            <div className="team">
            {/* <h2>Team</h2> */}
            <div className="cards">
            {Team?.team?.map((founder, index) => (
            <Card
              key={index}
              name={founder.name}
              img={founder.img}
              designation={founder.designation}
            />
          ))}
       
            </div>
            </div>
            
        {/* </div> */}
    </div>
    </>
  )
}

export default AboutUs