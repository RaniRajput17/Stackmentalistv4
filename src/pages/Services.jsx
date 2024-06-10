import React from 'react'
import shape1 from "../../public/shapes/shape1.png"
import shape2 from "../../public/shapes/shape2.svg"
import shape3 from "../../public/shapes/shape3.svg"
import shape4 from "../../public/shapes/shape4.svg"
import shape7 from "../../public/shapes/shape4.svg"
import service1 from "../../public/service1.png"
import service2 from "../../public/service2.png"
import service3 from "../../public/service3.png"
import service4 from "../../public/service4.png"
import "./Services.css"



function Services() {
   
    
  return (
    <>
     <div className="page-title">
        <div className="title">
            <h2>Services</h2>
        </div>
        <div class="shape1"><img alt="shape" loading="lazy" width="202" height="202" decoding="async" data-nimg="1" src={shape1}/>
        </div>
        <div class="shape2 rotateme"><img alt="shape" loading="lazy" width="22" height="22" decoding="async" data-nimg="1" src={shape2}/>
        </div>
        <div class="shape3"><img alt="shape" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" src={shape3}/>
        </div>
        <div class="shape4"><img alt="shape" loading="lazy" width="21" height="20" decoding="async" data-nimg="1" src={shape4}/>
        </div>
        <div class="shape7"><img alt="shape" loading="lazy" width="21" height="20" decoding="async" data-nimg="1" src={shape7}/>
        </div>
    </div>
    <div className="services">
        <div className="service-row bg">
            <div className="service-col">
                <div className="service-img">
                <img alt="image" loading="lazy" width="477" height="375" decoding="async" data-nimg="1" src={service1}/>
                </div>
            </div>
            <div className="service-col">
               
                <div className="service-title">
                    <h3 className="service-title">Software Development</h3>
                
                <div className='bar'></div>
                </div>
                <div className="service-description">
                    <p>At Stackmentalist, we epitomize the convergence of innovation
                and excellence. With a robust team of highly experienced and
                skilled developers, we specialize in delivering high-end
                software solutions with meticulous attention to structure and
                implementation, adhering to Scrum, Lean, Agile, and Hybrid
                methodologies. We pride ourselves on crafting innovative and
                bespoke products and services that offer comprehensive
                communication and information solutions.
                <br /> <br />
          Our offerings span a wide spectrum, including web design and
          development, custom applications, ERPs, CRMs, e-commerce
          solutions, business-to-business and business-to-client
          applications, as well as managed hosting and internet portal
          management. Our global clientele attests to the quality and
          satisfaction derived from our work. At Stackmentalist, our
          business ethos revolves around ensuring the utmost quality in
          our products, achieving complete client satisfaction, delivering
          solutions punctually, and providing unparalleled value for our
          clients. As pioneers in technological exploration, we are
          dedicated to delivering top-notch software solutions
          across the globe.
          <br />
          <br />
          Stackmentalist's business philosophy is to assure the highest
          quality product, total client satisfaction, timely delivery of
          solutions and the best quality price ratio found in the
          industry. As a leader in technology exploring, Stackmentalist
          is committed to delivering high-quality software across the globe.
        </p>
    
           
                </div>
            </div>
        </div>


        <div className="service-row no-bg">
            
            <div className="service-col">
                <div className="service-title">
                    <h3>Resource Hiring & Outsourcing</h3>
                <div className='bar'></div>
                </div>
                <div className="service-description">
                    <p>
                    Is your team spending endless hours on recruitment? Let us
                streamline the process for you. At Stackmentalist, we offer
                Recruitment Process Outsourcing (RPO) services to help you build
                a pipeline of skilled talent while you focus on your core
                business and current employees. Acting as an extension of your
                internal HR department, we handle all aspects of the hiring
                process, from sourcing and vetting candidates to conducting
                interviews and making hires. Our approach is proactive and
                targeted, ensuring you find the right talent efficiently.<br/><br/>
                Harnessing advanced online and cloud-based technologies
                alongside proven recruiting strategies, we deliver a blend of
                high-tech and high-touch solutions tailored to
                your business needs.              </p>
                </div>
            </div>
            <div className="service-col">
                <div className="service-img">
                <img alt="image" loading="lazy" width="477" height="375" decoding="async" data-nimg="1" src={service2}/>
                </div>
            </div>
        </div>


        <div className="service-row bg">
            <div className="service-col">
                <div className="service-img">
                <img alt="image" loading="lazy" width="477" height="375" decoding="async" data-nimg="1" src={service3}/>
                </div>
            </div>
            <div className="service-col">
                <div className="service-title">
                    <h3>PR & Brand Management</h3>
                    <div className='bar'></div>
                </div>
                <div className="service-description">
                    <p>
                    Elevate your brand with Stackmentalist's powerhouse team of
                digital marketing superheroes. From captivating graphic design
                to compelling content creation, and from SEO and SEM to
                precision-targeted social media campaigns, we offer
                comprehensive digital marketing solutions tailored to your
                needs. Our track record speaks for itself—our services
                consistently drive significant engagement across various social
                media platforms. Don't just take our word for it; experience the
                results firsthand. <br/><br/>What sets us apart? We're not your average
                firm. We're a dynamic team brimming with fresh ideas and vibrant
                personalities. Renowned for our commitment to perfection,
                professionalism, and excellence, we've made a mark in the public
                relations and marketing industry, helping brands and businesses
                flourish both nationally and internationally.
              </p>
                </div>
            </div>
        </div>


        <div className="service-row no-bg">
            
            <div className="service-col" >
                <div className="service-title">
                    <h3>Training & Placement</h3>
                    <div className='bar'></div>
                </div>
                <div className="service-description">
                    <p>
                    Experience technology education redefined at Stackmentalist. As pioneers in IT training, we are renowned for our results-driven approach and commitment to excellence. Our focus remains unwaveringly on delivering top-tier training and fostering innovative thinking among our students.

Driven by a profound passion for technology, we are dedicated to revolutionizing the pedagogy of tech education. Our mission is to impart a deep understanding of technology's core principles, empowering individuals to grasp its true essence.<br></br><br></br>

At Stackmentalist, we're continuously pushing boundaries, exploring new domains of knowledge, and refining our training methodologies to ensure our students stay ahead of the curve. Join us and embark on a transformative journey in technology education.           </p>
                </div>
            </div>
            <div className="service-col">
                <div className="service-img">
                <img alt="image" loading="lazy" width="477" height="375" decoding="async" data-nimg="1" src={service4}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services