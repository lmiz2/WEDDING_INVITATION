import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import {
  KAKAOTALK_API_TOKEN,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  height: 300px;
  padding: 0;
`;

const Location = () => {

  useEffect(() => {
    function createKakaoMap() {
      const container = document.getElementById("map_container1");
      if (!container) return;
      const targetPosition = new window.kakao.maps.LatLng(37.387564, 127.122331)
      const options = {
        center: targetPosition,
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);

      new window.kakao.maps.Marker({
        map: map,
        position: targetPosition,
      });
    }

    // 기존에 script가 있는지 체크
    if (!document.querySelector('script[src*="dapi.kakao.com"]')) {
      const script = document.createElement("script");
      // autoload=false 추가!
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAOTALK_API_TOKEN}&autoload=false`;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // window.kakao.maps.load를 통해 완전히 준비되면 콜백 실행
        window.kakao.maps.load(() => {
          createKakaoMap();
        });
      };

      return () => {
        document.body.removeChild(script);
      };
    } else {
      // 이미 script가 있으면 바로 load (중복생성 안되게 체크)
      if (window.kakao && window.kakao.maps && window.kakao.maps.load) {
        window.kakao.maps.load(() => {
          createKakaoMap();
        });
      }
    }
  }, []);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Map id="map_container1"></Map>
      <Content>
        경기도 성남시 분당구 서현로 180번길 19
        <br />
        THE MERRIDEN 서현 (CGV 건물 8층)
        <br />
        <br />
        <Title>버스 이용시</Title>
        <br />
        <br />
        이매촌(한신아파트 앞) 정류장
        <br />
        2, 33, 55-1, 116, 222, 303, 380, 720-2, 102, 303, 1001
        1005-1, 1151, 1500, 1500-2, 3330, 3500, 5500-1, 7007-1
        7200, 8130, 8131, 8133, 8151, 9000, 9001, 9005, 9401, 9403
        9407, 4102, 4000, 8106, 8109
        <br />
        <br />
        AK플라자 (분당우체국 앞) 정류장
        <br />
        116, 222, 310, 3500
        <br />
        <br />
        <Title>지하철 이용시</Title>
        <br />
        <br />
        분당선 서현역 5번출구 좌측으로 도보3분
      </Content>
    </Wrapper>
  );
};

export default Location;
