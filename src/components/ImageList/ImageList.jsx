import PropTypes from 'prop-types';
import ImageGalleryItem from './../ImageGalleryItem';

export default function ImageList ({ images, openModal }) {
  return (
    <ul>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webImage={webformatURL}
          openModal={() => openModal(largeImageURL)}
          description={tags}
        />
      ))}
    </ul>
  );
}

ImageList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
};