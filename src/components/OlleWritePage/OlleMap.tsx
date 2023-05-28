import { useEffect, memo } from 'react';
import styled from 'styled-components';

export const OlleMap = memo(() => {
  let map: any;
  const createMap = () => {
    const mapContainer = document.getElementById('map'),
      mapOption = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3,
        tileAnimation: true,
      };

    map = new window.kakao.maps.Map(mapContainer, mapOption);
  };

  useEffect(() => {
    createMap();
  }, []);

  return (
    <>
      <Map id="map"></Map>
    </>
  );
});

const Map = styled.div`
  height: 500px;
  border-radius: 10px;
`;
