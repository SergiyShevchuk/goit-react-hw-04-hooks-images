import React from 'react';
import ImageGallery from '../ImageGallery';
import Loader from '../Loader';
import Button from '../Button';
import Modal from '../Modal';
import propTypes from 'prop-types';

const View = ({
  response,
  length,
  status,
  showModal,
  largeImageUrl,
  toggleModal,
  getUrl,
  onButtonClickHandler,
}) => {
  const picturesLeft = length - response.length;

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && response.length !== 0 && (
        <ImageGallery
          pictures={response}
          onClickHandler={toggleModal}
          getPictureUrl={getUrl}
        />
      )}
      {picturesLeft !== 0 && status !== 'pending' && (
        <Button onClickHandler={onButtonClickHandler} />
      )}
      {showModal && largeImageUrl && (
        <Modal url={largeImageUrl} closeModal={toggleModal}></Modal>
      )}
    </>
  );
};

export default View;

View.propTypes = {
  response: propTypes.array.isRequired,
  length: propTypes.number.isRequired,
  status: propTypes.string.isRequired,
  showModal: propTypes.bool.isRequired,
  largeImageUrl: propTypes.string,
  toggleModal: propTypes.func.isRequired,
  getUrl: propTypes.func.isRequired,
  onButtonClickHandler: propTypes.func.isRequired,
};
