import React from 'react';
import './styles.css';

import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




function Fouter() {
  return (
    <div className="container-Fouter">
          <div className="Fouter">
              <div className="gmail">
                <SiGmail />
                <p className="gmail-p">GMAIL</p>
              </div>

              <div className="linkldin">
              <FaLinkedin />
                <p className="linkeldin-p">LINKLDIN</p>
              </div>

              <div className="gmail">
                <FaGithub />
                <p className="gmail-p">GHIT HUB</p>
              </div>           
          </div>

          <div className="container2-Fouter">
            <p className="container2-Fouter-p1">Projects</p>
            <p className="container2-Fouter-p2">Contact</p>
          </div>
          <p className="container-Fouter-p1">WEB DEVELOPER 2021</p>
        </div>
  );
}

export default Fouter;
