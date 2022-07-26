/* eslint-disable require-jsdoc */
import React from 'react';
import groupomania from '../images/projects_groupomania.webp';
import kanap from '../images/kanap-projects.webp';
import piiquante from '../images/piiquante-projects.webp';
import trocsalon from '../images/troc-projects.webp';
import mdb from '../images/mdb-projects.webp';

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
    image: kanap,
    alt: 'Kanap projet front end',
    title: 'Site e-commerce en JS',
    subtitle: 'Avec JavaScript(ES6), HTML5 et CSS3',
    link: 'Code',
    url: 'https://github.com/OlivierHette/Kanap-JavaScript',
  },
  {
    id: 3,
    image: piiquante,
    alt: 'Piiquante projet backend',
    title: 'API sécurisée en JavaScript',
    subtitle: 'Avec NodeJs, Express et MongoDB',
    link: 'Code',
    url: 'https://github.com/OlivierHette/piiquante',
  },
  {
    id: 4,
    image: trocsalon,
    alt: 'TrocSalon projet wordpress',
    title: 'Site vitrine pour TrocSalon.fr',
    subtitle: 'Avec WordPress et Divi',
    link: 'Démo',
    url: 'https://trocsalon.fr/',
  },
  {
    id: 5,
    image: mdb,
    alt: 'Maison de beauté paris projet site vitrine',
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
                  className='card-link text--sm'
                  target="_blank"
                  rel="noopener noreferrer">
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
