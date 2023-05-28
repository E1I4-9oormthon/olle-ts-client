import { useEffect, memo } from 'react';
import styled from 'styled-components';
import { courseData } from 'data/courseData';

interface OlleMapProps {
  selectedCourseIndex: number;
}

export const OlleMap = memo(({ selectedCourseIndex }: OlleMapProps) => {
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

  const addMapTypeControl = () => {
    const mapTypeControl = new window.kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
  };

  const addZoomControl = () => {
    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
  };

  const searchKeyword = () => {
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(courseData[selectedCourseIndex].name, placesSearchCB);
  };

  const placesSearchCB = (data: any, status: any) => {
    if (status === window.kakao.maps.services.Status.OK) {
      const bounds = new window.kakao.maps.LatLngBounds();
      for (let i = 0; i < data.length; i++) {
        displayPlaceMarker(data[i]);
        bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
      }
      map.setBounds(bounds);
    }
  };

  const displayPlaceMarker = (place: { x: number; y: number; place_name: string }) => {
    const marker = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(place.y, place.x),
    });
  };

  useEffect(() => {
    createMap();
    addMapTypeControl();
    addZoomControl();
    searchKeyword();
  }, [selectedCourseIndex]);

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
