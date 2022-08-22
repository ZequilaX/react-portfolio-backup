import React from 'react'
import './about.css'
import whiteSplash from '../../assets/white-splash.png'
import lightningSpark from '../../assets/lightning-spark.png'
import ME from '../../assets/me.png'
import CV from '../../assets/SebastianCollison-CV.pdf'

const About = () => {
    return (
      <section id="about">
        <img src={whiteSplash} id="about__splash-image" alt="" />
        <div className="container about__container">
          <div className="about__container">
            <div className="about__text-content">
              <h2>ABOUT</h2>
              <div className="decoration-line"></div>
              <p className="body-text">I'm a Front-End Developer from Cape Town, South Africa.
              I have a passion for creating captivating websites and web applications that are easy to use and accessible on any device.
              I’m an experienced graphic and motion designer turned web developer.
              <br/>
              <br/>
              I have a keen eye for detail and a strong understanding of web design principles while tapping into my roots as an artist.
              I am self-driven and focused on developing my skillset as a developer through continous learning.</p><br/>
              <div className="button__container">
                <button className="btn btn-secondary">
                  <a href={CV} download>CIRRICULUM VITAE</a>
                </button>
                <div className="decoration-line-long-white"></div>
              </div>
            </div>
            <div className="about-image-container">
              <img src={lightningSpark} id="about__lightning-image-top" alt=""/>
              <img src={ME} id="about-image" alt=""/>
              <img src={lightningSpark} id="about__lightning-image-bottom" alt=""/>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About