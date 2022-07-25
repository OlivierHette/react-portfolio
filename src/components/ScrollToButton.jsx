/* eslint-disable require-jsdoc */
import React from 'react';
import {scrollTo} from '../utils/scrollTo';
import PropTypes from 'prop-types';

function ScrollToButton({toId, toRef, duration, children}) {
  const handleClick = () => {
    scrollTo({id: toId, ref: toRef, duration});
  };

  return (
    <>
      <button
        onClick={handleClick}>
        {children}
      </button>
    </>
  );
}

ScrollToButton.propTypes = {
  toId: PropTypes.string,
  toRef: PropTypes.string,
  duration: PropTypes.number,
  children: PropTypes.any.isRequired,
};

ScrollToButton.defaultProps = {
  duration: 1500,
};

export default ScrollToButton;
