/* eslint-disable require-jsdoc */
import React from 'react';

function Contact() {
  return (
    <section className="section contact" id='contact'>
      <div className="section__title">
        <span className='text--xs'>Entrez en contact</span>
        <h3>Contactez-moi</h3>
      </div>
      <div className="container-card">
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
    </section>
  );
}

export default Contact;
