import React from 'react';
import styles from './ImageGallery.module.css';
import propTypes from 'prop-types';
import GalleryItem from '../GalleryItem';

const ImageGallery = ({ pictures, onClickHandler, getPictureUrl }) => (
  <ul className={styles.imageGallery}>
    {pictures.map(({ webformatURL, tags, largeImageURL }, idx) => (
      <GalleryItem
        onClickHandler={onClickHandler}
        key={idx}
        idx={idx}
        tags={tags}
        imgUrl={webformatURL}
        largeImageURL={largeImageURL}
        getPictureUrl={getPictureUrl}
      ></GalleryItem>
    ))}
    ;
  </ul>
);

ImageGallery.propTypes = {
  pictures: propTypes.array.isRequired,
  onClickHandler: propTypes.func.isRequired,
  getPictureUrl: propTypes.func.isRequired,
};

export default ImageGallery;
