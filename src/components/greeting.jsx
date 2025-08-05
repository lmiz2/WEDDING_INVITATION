import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
  WEDDING_DATE,
  WEDDING_TIME,
  WEDDING_LOCATION,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.72rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;


const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  // padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  // animation: fadein 3s;
  // -moz-animation: fadein 3s; /* Firefox */
  // -webkit-animation: fadein 3s; /* Safari and Chrome */
  // -o-animation: fadein 3s; /* Opera */
`;
const Schedule = styled.p`
  font-size: 1.06rem;
  opacity: 0.65;
  margin-bottom: 24px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title >초대합니다</Title>
      </Divider>
      <TitleWrapper>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_TIME}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
      <Content >
        아직은 모든 게 서툰 두 젊은이가
        <br />
        서로의 1과 1을 더해 '2'가 되려 합니다.
        <br />
        <br />
        밝고 건강한 앞 날을 꿈꾸는 두 사람에게
        <br />
        부디 오셔서 축복과 지혜를 나누어 주세요.
        <br />
        <br />
        주신 마음의 배가 되는 행복한 삶으로
        <br />
        오래도록 보답하며 살겠습니다.
      </Content>
      <GroomBride >
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 아들 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 딸 {BRIDE_NAME}
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
