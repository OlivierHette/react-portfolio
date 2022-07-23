/* eslint-disable require-jsdoc */
import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
// import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <h4 className="footer__logo">Olivier</h4>
      <div className="footer__links">
        <Link to='/#about' className='footer__link text--sm'>
          À propos
        </Link>
        <Link to='/#projects' className='footer__link text--sm'>
          Projets
        </Link>
        <Link to='/#experiences' className='footer__link text--sm'>
          Expériences
        </Link>
      </div>

      <div className="footer__network">
        <a href="https://github.com/OlivierHette">
          <i className='bx bxl-github bx-md' ></i>
        </a>
        <a href="https://www.linkedin.com/in/olivier-hette/">
          <i className='bx bxl-linkedin-square bx-md' ></i>
        </a>
      </div>

      <span className="copyright">© OlivierHette. All right reserved</span>
    </footer>
  );
}

export default Footer;
