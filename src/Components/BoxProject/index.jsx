
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Button from '../Button';


function BoxProject({ image, title, category, description }) {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <p className="project-title">{title}</p>        
        <div className='project-containe-category'>
            {category.map(nameinmap=>(<Button className='project-category-btn' text={nameinmap} />))}

        </div>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

BoxProject.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BoxProject;