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
            <ScrollToButton
              toId="home">
              <i className='bx bx-home-alt' ></i>
            </ScrollToButton>
          </li>

          <li className="nav__item">
            <ScrollToButton toId="about">
              <i className='bx bx-user' ></i>
            </ScrollToButton>
          </li>

          <li className="nav__item">
            <ScrollToButton toId="experiences">
              <i className='bx bx-code-block' ></i>
            </ScrollToButton>
          </li>

          <li className="nav__item">
            <ScrollToButton toId="projects">
              <i className='bx bx-briefcase-alt' ></i>
            </ScrollToButton>
          </li>

          <li className="nav__item">
            <ScrollToButton toId="contact">
              <i className='bx bx-message-square-detail' ></i>
            </ScrollToButton>
          </li>

        </ul>
      </div>

      {/* <i className='bx bx-moon change-theme' id='theme-button'></i> */}
    </nav>
  );
}

export default Navigation;
