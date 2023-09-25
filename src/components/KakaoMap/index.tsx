/** 지도 위치 연습
 * 1. 임시 위치 불러오기 : 성공
 * 2. (현재 위치 파악 시)현재 위치 불러오기 : 성공
 * 3. 검색한 주소 위치 불러오기 : 실패
 * 4. (현재 위치 클릭 시)현재 위치 불러오기
 * */

import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { useRecoilValue } from 'recoil';
import { SearchXAtom } from '@/recoil/SearchXAtom';
import { SearchYAtom } from '@/recoil/SearchYAtom';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { NewStoryMarkerAtom } from '@/recoil/NewStoryMarkerAtom';
import { AddStoryMarkerTitle } from '@/recoil/AddStoryMarkerTitle';
import { AddStoryMarkerSub } from '@/recoil/AddStoryMarkerSub';

interface KakaoMapProps {
  openNewStoryModal: () => void;
  openAddStoryModal: () => void;
}

export default function KakaoMap({ openNewStoryModal, openAddStoryModal }: KakaoMapProps) {
  // 임시 마커 데이터
  const locations = [
    {
      title: '가천대학교 글로벌캠퍼스 가천관',
      latlng: { lat: 37.45014238433003, lng: 127.12972934051282 },
      address_name: '경기 성남시 수정구 성남대로 1342',
    },
    {
      title: '올데이커피 가천점',
      latlng: { lat: 37.44756362788988, lng: 127.12729516027275 },
      address_name: '경기 성남시 수정구 성남대로1318번길 3',
    },
    {
      title: '가천대학교 글로벌캠퍼스 AI공학관',
      latlng: { lat: 37.4551613, lng: 127.1334068 },
      address_name: '경기 성남시 수정구 복정동 495',
    },
  ];

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
  const center = searchLocation || userLocation || temporaryLocation.latlng;

  // NewStory 마커
  const [markerPosition, setMarkerPosition] = useState(center);
  const [newStoryMarkerPosition, setNewStoryMarkerPosition] = useRecoilState(NewStoryMarkerAtom);
  const onMarkerDragEnd = (marker: any) => {
    // 마커의 새로운 위치를 상태 변수에 업데이트
    const newPosition = {
      lat: marker.getPosition().getLat(),
      lng: marker.getPosition().getLng(),
    };
    setMarkerPosition(newPosition);
    console.log(markerPosition);
    setNewStoryMarkerPosition((prevPositions) => [...prevPositions, newPosition]);
    console.log('NewStory 마커 위치 :', newStoryMarkerPosition);
  };

  // AddStory 마커
  const [addStoryMarkerTitle, setAddStoryMarkerTitle] = useRecoilState(AddStoryMarkerTitle);
  const [addStoryMarkerSub, setAddStoryMarkerSub] = useRecoilState(AddStoryMarkerSub);
  const onAddStoryMarkerClick = (loc: any) => {
    setAddStoryMarkerTitle(loc.title);
    setAddStoryMarkerSub(loc.address_name);
    console.log('addStory 마커 제목', addStoryMarkerTitle);
    console.log('addStory 마커 주소', addStoryMarkerSub);
  };

  return (
    <Map
      id="map"
      center={center}
      style={{
        width: '100%',
        height: '100%',
      }}
      level={4}
    >
      <CustomOverlayMap position={center}>
        {/* AddStory 마커 */}
        {locations.map((loc) => (
          <MapMarker
            key={`${loc.title}-${loc.latlng.lat}-${loc.latlng.lng}`}
            position={loc.latlng}
            image={{
              src: '/assets/marker.svg',
              size: { width: 50, height: 50 },
            }}
            title={loc.title}
            // subtitle={loc.address_name}
            onClick={() => {
              onAddStoryMarkerClick(loc);
              openAddStoryModal();
            }}
          />
        ))}
        {/* NewStory 마커 */}
        <MapMarker
          position={center}
          image={{
            src: '/assets/current-marker.svg',
            size: { width: 36, height: 44 },
          }}
          onClick={openNewStoryModal}
          draggable={true}
          onDragEnd={onMarkerDragEnd}
        />
      </CustomOverlayMap>
    </Map>
  );
}
