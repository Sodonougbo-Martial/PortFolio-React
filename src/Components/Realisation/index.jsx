import React from 'react';
import './styles.css';
import BoxProject from '../BoxProject';



function Realisation() {
    const realisation = [
      {
        image: './assets/image-project.webp',
        title: 'TITLE PROJECT',
        category: ['Web Development', 'Web Development', 'Web Development'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      },
      {
        image: './assets/image-project.webp',
        title: 'I N S I G H T G R A M',
        category: ['Web Development', 'ingenieur', 'Web Development'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      },
      // Ajoutez plus de projets ici
    ];
  
    return (
      <div className="realisation">
        

        <div className="realisation-section">
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
        </div>
      </div>
    );
  }
  
  export default Realisation;