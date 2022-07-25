/* eslint-disable require-jsdoc */
import CV from '../pdf/CV.pdf';
import React from 'react';
import {Link} from 'react-router-dom';
import pdpImg from '../images/profile-image.webp';

function Hero() {
  return (
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
  );
}

export default Hero;
