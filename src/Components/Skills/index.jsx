import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';



function Skill({ image, description }) {
    return (
      <div className="Skill">
        <img src={image} alt={description} className="skill-image" />
        <p className="skill-description">{description}</p>
      </div>
    );
  }
  
  Skill.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };





function Skills() {
    const defaultSkills = [
      {
        image: './assets/docker.webp',
        description: 'Docker',
      },
      {
        image: './assets/express.webp',
        description: 'Express',
      },
      {
        image: './assets/javascript.svg',
        description: 'Java Script',
      },
      {
        image: './assets/jest.svg',
        description: 'Jest',
      },
      {
        image: './assets/mongoDB.svg',
        description: 'Mongo DB',
      },
      {
        image: './assets/nextjs.svg',
        description: 'Next JS',
      },
      {
        image: './assets/postgresql.svg',
        description: 'Postgresql',
      },
      {
        image: './assets/react-native.webp',
        description: 'React Native',
      },
      {
        image: './assets/react.webp',
        description: 'React',
      },
      {
        image: './assets/style-comp.webp',
        description: 'Styled Components',
      },
      {
        image: './assets/TP.webp',
        description: 'Type Script',
      },
    ];
  
    return (
      <div className="container-skill">
        <div className="container2-skill">
            <p className="skill-p1">Skills</p>
            <div className="skills">
                
                {defaultSkills.map((skill, index) => (
                <Skill key={index} image={skill.image} description={skill.description} />
                ))}
            </div>
        </div>
      </div>
    );
  }
  
  export default Skills;
