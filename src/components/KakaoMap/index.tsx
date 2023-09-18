import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import React, { useState, useEffect, useRef } from 'react';

interface KakaoMapProps {
  openNewStoryModal: () => void;
  openAddStoryModal: () => void;
}

const KakaoMap: React.FC<KakaoMapProps> = ({ openNewStoryModal, openAddStoryModal }) => {
  // 임시 마커 데이터
  const locations = [
    { title: '가천관', latlng: { lat: 37.45014238433003, lng: 127.12972934051282 } },
    { title: '한국섬유산업연합회', latlng: { lat: 37.507728847503, lng: 127.06047332744 } },
    { title: '호텔 페이토 삼성', latlng: { lat: 37.508424857062, lng: 127.05882843725 } },
  ];

  // geolocation 현재 위치
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null); // 현재 위치를 저장할 상태

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler); // 성공시 successHandler, 실패시 errorHandler 함수가 실행된다.
  }, []);

  const successHandler = (response: GeolocationPosition) => {
    console.log(response);
    const { coords } = response; // coords 객체에서 추출
    setLocation(coords); // GeolocationCoordinates를 설정
  };

  const errorHandler = (error: GeolocationPositionError) => {
    console.log(error);
  };

  // 현재 위치 좌표값
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null); // 현재 위치의 좌표값을 저장할 상태
  const mapRef = useRef<Map | null>(null);

  const getCoordinates = () => {
    if (mapRef.current) {
      const map = mapRef.current;

      setCoordinates({
        lat: map.getCenter().getLat(),
        lng: map.getCenter().getLng(),
      });
    }
  };
  console.log('위도&경도 : ', coordinates);

  return (
    <>
      {location && (
        <Map
          center={{ lat: location.latitude, lng: location.longitude }}
          style={{ width: '100%', height: '100%' }}
          level={5}
          ref={mapRef}
          onClick={getCoordinates}
        >
          <CustomOverlayMap position={{ lat: location.latitude, lng: location.longitude }}>
            {locations.map((loc) => (
              <MapMarker
                key={`${loc.title}-${loc.latlng.lat}-${loc.latlng.lng}`}
                position={loc.latlng}
                image={{
                  src: '/assets/marker.svg',
                  size: { width: 50, height: 50 },
                }}
                title={loc.title}
                onClick={openAddStoryModal}
              />
            ))}
            {/* 현재 위치 좌표 */}
            <MapMarker
              position={{ lat: location.latitude, lng: location.longitude }}
              image={{
                src: '/assets/current-marker.svg',
                size: { width: 36, height: 44 },
              }}
              onClick={openNewStoryModal}
              draggable={true}
            />
          </CustomOverlayMap>
        </Map>
      )}
    </>
  );
};

export default KakaoMap;
