import React from 'react';
import RingLoader from 'react-spinners/RingLoader';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <RingLoader color={'#3f51b5'} />
    </div>
  );
};

export default Loader;
