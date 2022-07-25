/* eslint-disable require-jsdoc */
import React from 'react';
import groupomania from '../images/projects_groupomania.webp';

const projectsArray = [
  {
    id: 1,
    image: groupomania,
    alt: 'Groupomania projet full stack',
    title: 'Réseau social d\'entreprise',
    subtitle: 'Avec ReactJs, NodeJs, MySQL et Sequelize.js',
    link: 'Code',
    url: 'https://github.com/OlivierHette/Groupomania',
  },
  {
    id: 2,
    image: groupomania,
    alt: 'Groupomania projet full stack',
    title: 'Réseau social d\'entreprise',
    subtitle: 'Avec ReactJs, NodeJs, MySQL et Sequelize.js',
    link: 'Démo',
    url: '#',
  },
];

function Projects() {
  return (
    <section className="section section--card projects" id='projects'>
      <div className="section__title">
        <span className='text--xs'>Mon Portfolio</span>
        <h3>Projets récent</h3>
      </div>

      <div className="container--card">
        {projectsArray.map((project) => {
          return (
            <div key={project.id} className="card">
              <img
                src={project.image}
                alt={project.alt}
                className="image image--card"
                height='295'
                width='280'/>
              <div className="card__text">
                <h4 className='text--md'>{project.title}</h4>
                <span className='text--xs'>{project.subtitle}</span>
                <a href={project.url}
                  className='card-link text--sm'>
                  {project.link} <span className="arrow-link">➔</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Projects;
