import React from 'react';
import './styles.css';
import Button from '../Button';
import { FaArrowDownLong } from "react-icons/fa6";



function Hero() {
  return (
    <div className="hero">
      <div className="hero-container1">
          <div className="hero-text">
                <p className="hero-p1">WEB DEVELOPER</p>
                <p className="hero-p2">John Doe</p>
                <p className="hero-p3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
                <Button className='hero-button' text="Contact Me" />
            </div>

            <div className="hero-image">
                <img src="./assets/image-hero.png" className='image-hero' alt="" />

            </div>

            <div className="hero-arrow">

            </div>

      </div>

      <div className="hero-conaiter2">
        <FaArrowDownLong style={{ color: 'white' }}/>
      </div>
        

    </div>
  );
}

export default Hero;
