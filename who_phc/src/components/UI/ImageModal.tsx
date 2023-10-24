import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';

import useMainContext from '../../context/useMainContext';
import DefaultModal from './DefaultModal';

const ImageModal: React.FC = () => {
  const { imageModalOpen, imageSrc, setImageModalOpen } = useMainContext();
  const images = [{ url: imageSrc }];

  return (
    imageSrc
      ? <DefaultModal
        modalVisible={imageModalOpen}
        setModalVisible={setImageModalOpen}
        closeModal={() => {
          setImageModalOpen(false);
        }}
      >
        <ImageViewer imageUrls={images} renderIndicator={() => null} backgroundColor={"transparent"} />
      </DefaultModal>
      : null
  )
};

export default ImageModal;
