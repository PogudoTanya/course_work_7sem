import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/* eslint-disable react/button-has-type */
export function Button(props) {
  return (
    <button
      className='button'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
