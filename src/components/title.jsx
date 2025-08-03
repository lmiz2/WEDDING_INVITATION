import React from "react";
import styled from "styled-components";
import {
  IMAGE_URL_PREFIX,
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import BackgroundVideo from "../assets/BackgroundVideo.mp4";

const Layout = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
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
  width: 100%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

const WeddingInvitation = styled.p`
  font-size: 6rem;
  font-family: "abramo";
  opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const Schedule = styled.p`
  font-size: 1.06rem;
  opacity: 0.65;
  margin-bottom: 24px;
`;
const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
      <GifBackground src={IMAGE_URL_PREFIX + "/0.gif"} alt="배경 GIF" />
    </Layout>
  );
};

export default Title;
