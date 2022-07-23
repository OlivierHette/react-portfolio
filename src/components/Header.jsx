/* eslint-disable require-jsdoc */
import {HashLink as Link} from 'react-router-hash-link';
import React from 'react';

function Header() {
  return (
    <header id='home'>
      <nav className="nav container">
        <Link to="/" className="nav__logo">oh </Link>
        <div className="nav__menu">
          <ul className="nav__list">

            <li className="nav__item">
              <Link to="/#home" className="nav__link active-link">
                <i className='bx bx-home-alt' ></i>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/#about" className="nav__link">
                <i className='bx bx-user' ></i>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/#experiences" className="nav__link">
                <i className='bx bx-code-block' ></i>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/#projects" className="nav__link">
                <i className='bx bx-briefcase-alt' ></i>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/#contact" className="nav__link">
                <i className='bx bx-message-square-detail' ></i>
              </Link>
            </li>

          </ul>
        </div>

        {/* <i className='bx bx-moon change-theme' id='theme-button'></i> */}
      </nav>
    </header>
  );
}

export default Header;
