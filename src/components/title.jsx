import React from "react";
import styled from "styled-components";
import {
  IMAGE_URL_PREFIX,
} from "../../config.js";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;

const Layout = styled.div`
  overflow: hidden;
  width: 70%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const GifBackground = styled.img`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh; // 필요시 전체 높이
  object-fit: cover;
  z-index: 0;
  pointer-events: none; // 클릭 방지
`;

const WeddingInvitation = styled.p`
  color: #ffffff;
  font-size: 6rem;
  font-family: "abramo";
  opacity: 0.75;
  margin-bottom: 16px;
  text-align: center;
  z-index: 1;
`;
const Title = () => {
  return (
  <Wrapper>
    <GifBackground src={IMAGE_URL_PREFIX + "/0.gif"} alt="배경 GIF" />
    <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
    <Layout>
    </Layout>
  </Wrapper>
  );
};

export default Title;
