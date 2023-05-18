import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ small, large, onChoseImage }) => (
  <li className={css.ImageGalleryItem}>
    <img
      className={css.ImageGalleryItemImage}
      src={small}
      alt=""
      onClick={() => onChoseImage(large)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  small: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  onChoseImage: PropTypes.func.isRequired,
};
