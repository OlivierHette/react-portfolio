/* eslint-disable require-jsdoc */
import pdpImg from '../images/profile-image.webp';
import groupomania from '../images/projects_groupomania.webp';
import CV from '../pdf/CV.pdf';
import React from 'react';
import {Link} from 'react-router-dom';


const aboutText = {
  start: 'Développeur full stack, je me suis formé en autodidacte ',
  middle: 'depuis mes 11 ans. J’ai décidé de formaliser mes connaissances et',
  end: ' mon experience par un diplome de développeur Full Stack.',
};

const abilityFront = [
  {id: 1, name: 'HTML5', level: 'Avancé'},
  {id: 2, name: 'ReactJs', level: 'Intermediaire'},
  {id: 3, name: 'CSS3', level: 'Avancé'},
  {id: 4, name: 'VueJs', level: 'Base'},
  {id: 5, name: 'Sass', level: 'Avancé'},
  {id: 6, name: 'Bootstrap', level: 'Intermediaire'},
  {id: 7, name: 'JavaScript', level: 'Intermediaire'},
  {id: 8, name: 'TailwindCSS', level: 'Intermediaire'},
];
const abilityBack = [
  {id: 1, name: 'NodeJs', level: 'Intermediaire'},
  {id: 2, name: 'SQL', level: 'Intermediaire'},
  {id: 3, name: 'Express', level: 'Intermediaire'},
  {id: 4, name: 'NoSQL', level: 'Intermediaire'},
  {id: 5, name: 'PHP', level: 'Base'},
  {id: 6, name: 'GitHub', level: 'Intermediaire'},
  {id: 7, name: 'Java', level: 'Base'},
];
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

function Main() {
  return (
    <main>
      <section className="section hero">
        <div className="hero__intro">
          <span>Bonjour, je suis</span>
          <h1>Olivier Hette</h1>
          <h2>Développeur Full Stack</h2>
        </div>
        <div className="hero__btn">
          <Link to={CV}
            target='_blank'
            download ="CV_HetteOlivier.pdf">
            <div className="btn btn--border-only">
              <span>Télecharger CV</span>
            </div>
          </Link>
          <Link to='/#about'>
            <div className="btn btn--bg">
              <span>À propos</span>
            </div>
          </Link>
        </div>
        <img className="image image--rounded" src={pdpImg} alt="visageOlivier"/>
      </section>

      <section className="section about" id='about'>
        <div className="section__title">
          <span className='text--xs'>Introduction</span>
          <h3>À propos</h3>
        </div>

        <img className="image image--radius" src={pdpImg} alt="visageOlivier"/>

        <div className="container--about">
          <div className="about__item">
            <i className='bx bx-code-curly bx-sm' ></i>
            <div className="about__item-text">
              <h4>Experiences</h4>
              <span className='text--xs'>+ 1 an</span>
            </div>
          </div>

          <div className="about__item">
            <i className='bx bx-briefcase-alt bx-sm' ></i>
            <div className="about__item-text">
              <h4>Missions</h4>
              <span className='text--xs'>+ 10 projets</span>
            </div>
          </div>

          <div className="about__item">
            <i className='bx bxs-graduation bx-sm'></i>
            <div className="about__item-text">
              <h4>Formation</h4>
              <span className='text--xs'>Bac +2</span>
            </div>
          </div>
        </div>

        <p className='about__content-text' key={aboutText.start}>
          {aboutText.start + aboutText.middle + aboutText.end}
        </p>
      </section>

      <section className="section section--card experiences" id='experiences'>
        <div className="section__title">
          <span className='text--xs'>mes compétences</span>
          <h3>Mon experiences</h3>
        </div>

        <div className="container--card">
          <div className="card">
            <h3>FrontEnd</h3>
            <div className="experiences__container__ability">

              {abilityFront.map((ability) => {
                return (
                  <div key={ability.id} className="experiences__ability">
                    <i className='bx bxs-badge-check bx-sm'></i>
                    <div className="experiences__ability-text">
                      <h4>{ability.name}</h4>
                      <span className='text--xs'>{ability.level}</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          <div className="card">
            <h3>BackEnd</h3>
            <div className="experiences__container__ability">
              { abilityBack.map((ability) => {
                return (
                  <div key={ability.id} className="experiences__ability">
                    <i className='bx bxs-badge-check bx-sm'></i>
                    <div className="experiences__ability-text">
                      <h4>{ability.name}</h4>
                      <span className='text--xs'>{ability.level}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

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

      <section className="section contact" id='contact'>
        <div className="section__title">
          <span className='text--xs'>Entrez en contact</span>
          <h3>Contactez-moi</h3>

          <div className="container--card">
            <div className="card card--contact">
              <i className='bx bx-mail-send bx-md'></i>
              <h4 className="text--md">Email</h4>
              <span className="text--sm">contact@olivierhette.fr</span>
              <a href="mailto:contact@olivierhette.fr"
                className="card-link text--sm">
                Ecrivez-moi <span className="arrow-link">➔</span>
              </a>
            </div>

            <div className="card card--contact">
              <i className='bx bxl-linkedin-square bx-md' ></i>
              <h4 className="text--md">LinkedIn</h4>
              <span className="text--sm">linkedin.com/in/olivier-hette/</span>
              <a href="https://www.linkedin.com/in/olivier-hette/"
                target="_blank"
                className="card-link text--sm"
                rel="noreferrer">
                Ecrivez-moi <span className="arrow-link">➔</span>
              </a>
            </div>

            <div className="card card--contact">
              <i className='bx bxl-github bx-md' ></i>
              <h4 className="text--md">GitHub</h4>
              <span className="text--sm">github.com/OlivierHette</span>
              <a href="https://github.com/OlivierHette"
                target="_blank"
                className="card-link text--sm"
                rel="noreferrer">
                Suivez-moi <span className="arrow-link">➔</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
