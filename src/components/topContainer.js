import React from 'react'
import profile from '../images/profile.png'

const TopContainer = () =>{

    return (

<section className="row intro" id="top-section">
  <div className="col-lg-10">
    <div className="row "> 
      <div className="col-lg-6 intro__text-container">
        <div className="intro__text">
          <span>HELLO</span>
          <h1>I'm Alexander</h1>
          <p>Front-end developer with focus on React and Javascript</p>
        </div>
      </div>
      <div className="col-lg-6">
        <figure id="shape">        
          <img className="intro__profile" src={profile} />
        </figure>
      </div>
    </div>
  </div>
  </section>)
  };
  export default  TopContainer