/* eslint-disable require-jsdoc */
import React from 'react';
import pdpImg from '../images/profile-image.webp';
import ScrollToButton from './ScrollToButton';

function About() {
  const aboutText = {
    start: 'Développeur full stack, je me suis formé en autodidacte ',
    middle: 'depuis mes 11 ans. J’ai décidé de formaliser mes connaissances et',
    end: ' mon experience par un diplome de développeur Full Stack.',
  };

  return (
    <section className="section" id='about'>
      <div className="section__title">
        <span className='text--xs'>Introduction</span>
        <h3>À propos</h3>
      </div>

      <div className="about">
        <img className="image image--radius" src={pdpImg} alt="visageOlivier"/>

        <div className="about__body">
          <div className="about__container">
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

          <ScrollToButton toId="contact" style="btn btn--bg">
            <span>Contactez-moi</span>
          </ScrollToButton>
        </div>
      </div>


    </section>
  );
}

export default About;
