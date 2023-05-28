import { useEffect, memo } from 'react';
import styled from 'styled-components';
import { courseData } from 'data/courseData';
import { theme } from 'styles/theme';

interface OlleMapProps {
  selectedCourseIndex: number;
}

export const OlleMap = memo(({ selectedCourseIndex }: OlleMapProps) => {
  let map: any;
  const infoWindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
  let markers: any[] = [];

  const createMap = () => {
    const mapContainer = document.getElementById('map'),
      mapOption = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3,
        tileAnimation: true,
      };

    map = new window.kakao.maps.Map(mapContainer, mapOption);
    window.kakao.maps.event.addListener(map, 'click', (mouseEvent: { latLng: number }) => {
      addRouteMarker(mouseEvent.latLng);
    });
  };

  const addRouteMarker = (position: any) => {
    if (markers.length >= 2) {
      return;
    }

    const marker = new window.kakao.maps.Marker({
      position: position,
    });
    marker.setMap(map);
    markers.push(marker);
    window.kakao.maps.event.addListener(marker, 'mouseover', () => {
      infoWindow.setContent(
        '<div style="padding:5px;font-size:12px;">' + nameRouteMarker(markers.indexOf(marker)) + '</div>',
      );
      infoWindow.open(map, marker);
    });
    window.kakao.maps.event.addListener(marker, 'mouseout', () => {
      infoWindow.close(map, marker);
    });
  };

  const nameRouteMarker = (markerIndex: number) => {
    switch (markerIndex) {
      case 0:
        return '시작 지점';
      case 1:
        return '끝 지점';
      default:
        return;
    }
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
    window.kakao.maps.event.addListener(marker, 'click', () => {
      infoWindow.setContent('<div style="padding:5px;font-size:12px;background:white;">' + place.place_name + '</div>');
      infoWindow.open(map, marker);
    });
  };

  useEffect(() => {
    createMap();
    addMapTypeControl();
    addZoomControl();
    searchKeyword();
  }, [selectedCourseIndex]);

  return (
    <Wrapper>
      <Map id="map"></Map>
      <RouteMarkersDeleteButton>지점 초기화</RouteMarkersDeleteButton>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: relative;
`;

const Map = styled.div`
  height: 500px;
  border-radius: 10px;
`;

const RouteMarkersDeleteButton = styled.div`
  font-size: 0.85rem;
  position: absolute;
  z-index: 100;
  bottom: 3px;
  right: 3px;
  background: ${theme.color.white};
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 2px 0px;
`;
