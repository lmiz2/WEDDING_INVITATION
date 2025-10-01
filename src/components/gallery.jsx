import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import { Divider, Modal } from "antd";
import styled from "styled-components";
import { IMAGE_URL_PREFIX } from "../../config";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const FullscreenModal = styled(Modal)`
  && {
    top: 0;
    padding-bottom: 0;
  }

  && .ant-modal {
    width: 100% !important;
    max-width: 100%;
    top: 0;
    padding: 0;
  }

  && .ant-modal-content {
    height: 100vh;
    background-color: #000;
  }

  && .ant-modal-body {
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const urls = [
  IMAGE_URL_PREFIX + `/1.jpg`,
  IMAGE_URL_PREFIX + `/noel_3.JPG`,
  IMAGE_URL_PREFIX + `/noel_2.JPG`,
  IMAGE_URL_PREFIX + `/noel_4.JPG`,
  IMAGE_URL_PREFIX + `/train_1.JPG`,
  IMAGE_URL_PREFIX + `/2.jpg`,
  IMAGE_URL_PREFIX + `/3.jpg`,
  IMAGE_URL_PREFIX + `/4.jpg`,
  IMAGE_URL_PREFIX + `/19.jpg`,
  IMAGE_URL_PREFIX + `/20.jpg`,
  IMAGE_URL_PREFIX + `/5.jpg`,
  IMAGE_URL_PREFIX + `/6.jpg`,
  IMAGE_URL_PREFIX + `/7.jpg`,
  IMAGE_URL_PREFIX + `/8.jpg`,
  IMAGE_URL_PREFIX + `/9.jpg`,
  IMAGE_URL_PREFIX + `/10.jpg`,
  IMAGE_URL_PREFIX + `/11.jpg`,
  IMAGE_URL_PREFIX + `/12.jpg`,
  IMAGE_URL_PREFIX + `/13.jpg`,
  IMAGE_URL_PREFIX + `/14.jpg`,
  IMAGE_URL_PREFIX + `/15.jpg`,
  IMAGE_URL_PREFIX + `/16.jpg`,
  IMAGE_URL_PREFIX + `/17.jpg`,
  IMAGE_URL_PREFIX + `/18.jpg`,
];
const images = urls.map((imageUrl) => ({
  original: imageUrl,
  thumbnail: imageUrl,
}));

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = () => {
    const activeImage = images[currentIndex];
    if (!activeImage) {
      return;
    }

    setSelectedImage(activeImage.original);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
        onSlide={setCurrentIndex}
        onClick={handleImageClick}
      />
      <FullscreenModal
        visible={isModalVisible}
        footer={null}
        onCancel={handleCloseModal}
        centered
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="wedding gallery"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        )}
      </FullscreenModal>
    </Wrapper>
  );
};

export default Gallery;
