import React from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onPageChange }) => (
  <button className={css.Button} type="button" onClick={onPageChange}>
    Load more
  </button>
);

Button.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};
