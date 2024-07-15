import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";






function foutericon ({ image, description }) {
    return (
      <div className="foutericon">
        <img src={image} alt={description} className="foutericon-image" />
        <p className="foutericon-description">{description}</p>
      </div>
    );
  }
  
  foutericon.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };


  function Fouter() {
    const defaultFouter = [{
        image: <SiGmail />,
        description: 'GMAIL',
      },
      {
        image: <FaLinkedin />,
        description: 'LINKLDIN',
      },
      {
        image: <FaGithub />,
        description: 'GHIT HUB',
      },
    ];


    return (
        <div className="container-Fouter">
          
          <div className="Fouter">
              
              {defaultFouter.map((fouter, index) => (
              <Fouter key={index} image={fouter.image} description={fouter.description} />
              ))}
          </div>
          <div className="container2-Fouter">
                <ul className="nav-links">
                        <li>
                        <Link to="/about">Project</Link>
                        </li>
                        <li>
                        <Link to="/about">Project</Link>
                        </li>
                 </ul>

          </div>
          <p className="Fouter-p1">Copywrit 2024</p>
        </div>
      );
    }
    
    export default Fouter;
  