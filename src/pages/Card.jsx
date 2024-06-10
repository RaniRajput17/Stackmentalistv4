import React from 'react'
import "./AboutUs.css"
function Card({ name, img, designation }) {
  return (
    <>
    <div className="card">
                            <div className="card-img">
                            <img alt="image" loading="lazy" width="125" height="125" decoding="async" data-nimg="1" src={img}/>
                            </div>
                            <div className="card-content">
                            <div class="card-info"><h3>{name}</h3><span>{designation}</span></div>
                            </div>
                        </div>
    </>
  )
}

export default Card