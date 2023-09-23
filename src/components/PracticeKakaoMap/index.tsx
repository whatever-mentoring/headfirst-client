/** 지도 위치 연습
 * 1. 임시 위치 불러오기 : 성공
 * 2. (현재 위치 파악 시)현재 위치 불러오기 : 성공
 * 3. 검색한 주소 위치 불러오기 : 실패
 * 4. (현재 위치 클릭 시)현재 위치 불러오기
 * */

import { Map } from 'react-kakao-maps-sdk';
import { useRecoilValue } from 'recoil';
import { SearchXAtom } from '@/recoil/SearchXAtom';
import { SearchYAtom } from '@/recoil/SearchYAtom';
import { useState, useEffect } from 'react';

export default function PracticeKakaoMap() {
  // 1. 임시 위치 불러오기 : 임시 위치 데이터
  const temporaryLocation = {
    title: '가천관',
    latlng: { lat: 37.45014238433003, lng: 127.12972934051282 },
  };

  // 2. (현재 위치 파악 시)현재 위치 불러오기 : 성공
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        },
      );
    } else {
      console.error('Geolocation is not available.');
    }
  }, []);

  console.log('유저 위치의 현재 위치 : ', userLocation);

  // 위치 검색
  const placeX = useRecoilValue<number>(SearchXAtom);
  const placeY = useRecoilValue<number>(SearchYAtom);

  // placeX와 placeY를 사용하여 latlng 객체 생성
  const searchLocation = placeX && placeY ? { lat: Number(placeX), lng: Number(placeY) } : null;
  console.log('검색한 위치', searchLocation);

  // 임시 위치, 현재 위치, 또는 검색 위치를 사용하여 중심 좌표 설정
  //   const center = searchLocation || userLocation || temporaryLocation.latlng;
  const center = userLocation || temporaryLocation.latlng;

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={center}
      style={{
        // 지도의 크기
        width: '100%',
        height: '100%',
      }}
      level={3} // 지도의 확대 레벨
    />
  );
}
