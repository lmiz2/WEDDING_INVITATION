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

const urls = [
  IMAGE_URL_PREFIX + `/1.jpg`,
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
const images = [];

const Gallery = () => {

  useEffect(()=>{
    for(let i = 0; i < urls.length; i++) {
      const imageUrl = urls[i]
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
