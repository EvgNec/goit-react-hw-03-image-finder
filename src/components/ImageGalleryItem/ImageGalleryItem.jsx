import PropTypes from 'prop-types';

export default function  ImageGalleryItem ({ webImage, openModal, description }) {
  return (
      <>
        <li >
      <img
        class="gallery-item"
        src={webImage}
        alt={description}
        onClick={openModal}
      />
    </li>  

    </>
  );
};
