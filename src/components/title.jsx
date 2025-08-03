import React from "react";
import styled from "styled-components";
import {
  IMAGE_URL_PREFIX,
  WEDDING_DATE,
  WEDDING_LOCATION,
} from "../../config.js";


const Layout = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  // animation: fadein 3s;
  // -moz-animation: fadein 3s; /* Firefox */
  // -webkit-animation: fadein 3s; /* Safari and Chrome */
  // -o-animation: fadein 3s; /* Opera */
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
  z-index: 0;
`;

const Schedule = styled.p`
  font-size: 1.06rem;
  opacity: 0.65;
  margin-bottom: 24px;
`;
const Title = () => {
  return (
  <div style={{ position: "relative" }}>
    <GifBackground src={IMAGE_URL_PREFIX + "/0.gif"} alt="배경 GIF" />
    <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
    <Layout>
      <TitleWrapper>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
    </Layout>
  </div>
  );
};

export default Title;
