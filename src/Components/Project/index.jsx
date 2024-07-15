
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Button from '../Button';


function Project({ image, title, category, description }) {
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

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};





function Projects() {
    const projects = [
      {
        image: './assets/image-project.png',
        title: 'TITLE PROJECT',
        category: ['Web Development', 'Web Development', 'Web Development'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      },
      {
        image: './assets/image-project.png',
        title: 'I N S I G H T G R A M',
        category: ['Web Development', 'Web Development', 'Web Development'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      },
      // Ajoutez plus de projets ici
    ];
  
    return (
      <div className="projects">
        <p className="projects-p1">Projects</p>

        <div className='projects-content'>
            {projects.map((project, index) => (
            <Project
                key={index}
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
            />
            ))}
        </div>

        <Button className='project-btn-see-all' text="SEE ALL PROJECTS" />
      </div>
    );
  }
  
  export default Projects;
  