import React from 'react';
import styles from './GalleryItem.module.css';
import propTypes from 'prop-types';
import Image from '../Image';

const GalleryItem = ({
  tags,
  imgUrl,
  largeImageURL,
  getPictureUrl,
  onClickHandler,
  idx,
}) => {
  return (
    <li onClick={onClickHandler} key={idx} className={styles.imageGalleryItem}>
      <Image
        tags={tags}
        imgUrl={imgUrl}
        largeImageURL={largeImageURL}
        getPictureUrl={getPictureUrl}
      ></Image>
    </li>
  );
};

GalleryItem.propTypes = {
  tags: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  largeImgUrl: propTypes.string,
  getPictureUrl: propTypes.func.isRequired,
  onClickHandler: propTypes.func.isRequired,
  idx: propTypes.number.isRequired,
};

export default GalleryItem;
