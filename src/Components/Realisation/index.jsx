import React from 'react';
import './styles.css';
import Button from '../Button';
import BoxProject from '../BoxProject';



function Realisation() {
    const realisation = [
      {
        image: './assets/image-project.png',
        title: 'TITLE PROJECT',
        category: ['Web Development', 'Web Development', 'Web Development'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      },
      {
        image: './assets/image-project.png',
        title: 'I N S I G H T G R A M',
        category: ['Web Development', 'ingenieur', 'Web Development'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      },
      // Ajoutez plus de projets ici
    ];
  
    return (
      <div className="realisation">
        <p className="realisation-p1">Projects</p>

        <div className='realisation-content'>
            {realisation.map((project, index) => (
            <BoxProject
                key={index}
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
            />
            ))}
        </div>

        <Button className='realisation-btn-see-all' text="SEE ALL PROJECTS" />
      </div>
    );
  }
  
  export default Realisation;