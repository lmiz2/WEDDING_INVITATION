import React, { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
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

const images = [];

const Gallery = () => {

  useEffect(()=>{
    for(let i = 1; i <= 19; i++) {
      const imageUrl = IMAGE_URL_PREFIX + `/${i}.jpg`;
      images.push({
        original: imageUrl,
        thumbnail: imageUrl,
      });
    }
  })
  
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
