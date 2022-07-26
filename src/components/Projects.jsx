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
    title: 'Site e-commerce en JavaScript',
    subtitle: 'Avec JavaScript(ES6), HTML5 et CSS3',
    link: 'Démo',
    url: '#',
  },
  {
    id: 3,
    image: groupomania,
    alt: 'Groupomania projet full stack',
    title: 'API sécurisée en JavaScript',
    subtitle: 'Avec NodeJs, Express et MongoDB',
    link: 'Démo',
    url: '#',
  },
  {
    id: 4,
    image: groupomania,
    alt: 'Groupomania projet full stack',
    title: 'Site vitrine pour TrocSalon.fr',
    subtitle: 'Avec WordPress et Divi',
    link: 'Démo',
    url: 'https://trocsalon.fr',
  },
  {
    id: 5,
    image: groupomania,
    alt: 'Groupomania projet full stack',
    title: 'Site vitrine pour institut de beauté',
    subtitle: 'Avec HTML5, CSS3, Sass et JavaScript',
    link: 'Démo',
    url: 'https://olivierhette.fr/maisondebeaute/',
  },
];

function Projects() {
  return (
    <section className="section section--card projects" id='projects'>
      <div className="section__title">
        <span className='text--xs'>Mon Portfolio</span>
        <h3>Projets récent</h3>
      </div>

      <div className="container-card container-card--grid">
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
