import React from 'react'
import './services.css'
import {TbGridDots} from '../../../node_modules/react-icons/tb'
import {BiCodeAlt} from '../../../node_modules/react-icons/bi'
import {MdOutlineDesignServices} from '../../../node_modules/react-icons/md'


const Services = () => {
    return (
      <section id="services">
        <div className="container services__section">
          <div className="services__container">
            <div className="services__header">
              <h2>WHAT I DO</h2>
              <div className="decoration-line" id="services__line"></div>
            </div>
            <div className="services__cards">
              <div className="service__card">
                <div className="card__circle">
                  <BiCodeAlt />
                </div>
                <div className="service__card-text">
                  <h3>Web Development</h3>
                  <p>Creating responsive websites using HTML5, CSS and JavaScript.<br/><br/>I work with React as I enjoy creating reusable, modular components.</p>
                </div>
              </div>
                <div className="service__card">
                  <div className="card__circle">
                    <TbGridDots />
                  </div>
                  <div className="service__card-text">
                      <h3>UI/UX Design</h3>
                      <p>Creating UI mockups in Figma as I believe planning is the most essential part of creating a good design.<br/><br/>Once you have a good plan, it's easy to execute your ideas and create something great.</p>
                  </div>
                </div>
                <div className="service__card">
                  <div className="card__circle">
                    <MdOutlineDesignServices />
                  </div>
                  <div className="service__card-text">
                      <h3>Graphic Design</h3>
                      <p>Creating logos, captivating brand identities and social media content using the Adobe Suite.<br/><br/>A strong design helps customers identify what you offer and what your brand's core values are.</p>
                  </div>
                </div>
            </div>
            <a href="#contact" className="btn btn-primary btn-primary-white">Contact Me</a>
          </div>
        </div>
      </section>
    )
  }
  
  export default Services