/* eslint-disable require-jsdoc */
import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import ScrollToButton from './ScrollToButton';

function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">oh </Link>
      <div className="nav__menu">
        <ul className="nav__list">

          <li className="nav__item">
            <ScrollToButton toId="home" label="Accueil">
              {/* <i className='bx bx-home-alt' ></i> */}
              <box-icon color='white' name='home-alt-2'></box-icon>
            </ScrollToButton>
          </li>

          <li className="nav__item">
            <ScrollToButton toId="about" label="A propos">
              {/* <i className='bx bx-user' ></i> */}
              <box-icon color='white' name='user'></box-icon>
            </ScrollToButton>
          </li>

          <li className="nav__item">
            <ScrollToButton toId="experiences" label="Experiences">
              {/* <i className='bx bx-code-block' ></i> */}
              <box-icon color='white' name='code-block' ></box-icon>
            </ScrollToButton>
          </li>

          <li className="nav__item">
            <ScrollToButton toId="projects" label="Projets">
              {/* <i className='bx bx-briefcase-alt' ></i> */}
              <box-icon color='white' name='briefcase-alt' ></box-icon>
            </ScrollToButton>
          </li>

          <li className="nav__item">
            <ScrollToButton toId="contact" label="Contact">
              {/* <i className='bx bx-message-square-detail' ></i> */}
              <box-icon name='message-detail' color='white'></box-icon>
            </ScrollToButton>
          </li>

        </ul>
      </div>

      {/* <i className='bx bx-moon change-theme' id='theme-button'></i> */}
    </nav>
  );
}

export default Navigation;
