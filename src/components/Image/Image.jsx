import React from 'react';
import styles from './Image.module.css';
import propTypes from 'prop-types';

const Image = ({ tags, imgUrl, largeImageURL, getPictureUrl }) => {
  return (
    <img
      onClick={() => getPictureUrl(largeImageURL)}
      className={styles.imageGalleryItem__image}
      src={imgUrl}
      alt={tags}
    />
  );
};

Image.propTypes = {
  tags: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  largeImgUrl: propTypes.string,
  getPictureUrl: propTypes.func.isRequired,
};

export default Image;
