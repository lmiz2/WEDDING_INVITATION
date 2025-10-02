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
    width: 100vw !important;
    max-width: 100vw;
    height: 100vh;
    margin: 0;
    top: 0;
    padding: 0;
  }

  && .ant-modal-content {
    height: 100%;
    background-color: #000;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  && .ant-modal-body {
    position: relative;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    border-color: #fff;
  }

  &:focus {
    outline: none;
    border-color: #fff;
  }
`;

const FullscreenImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const urls = [
  IMAGE_URL_PREFIX + `/1.jpg`,
  IMAGE_URL_PREFIX + `/noel_3.JPG`,
  IMAGE_URL_PREFIX + `/noel_2.JPG`,
  IMAGE_URL_PREFIX + `/noel_4.JPG`,
  IMAGE_URL_PREFIX + `/4.jpg`,
  IMAGE_URL_PREFIX + `/19.jpg`,
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
  IMAGE_URL_PREFIX + `/16.jpg`,
  IMAGE_URL_PREFIX + `/17.jpg`,
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
        closable={false}
      >
        <CloseButton type="button" onClick={handleCloseModal} aria-label="닫기">
          ×
        </CloseButton>
        {selectedImage && (
          <FullscreenImage src={selectedImage} alt="wedding gallery" />
        )}
      </FullscreenModal>
    </Wrapper>
  );
};

export default Gallery;
