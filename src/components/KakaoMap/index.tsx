// import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
// import React, { useState, useEffect, useRef } from 'react';
// import { useRecoilValue } from 'recoil';
// import { SearchXAtom } from '@/recoil/SearchXAtom';
// import { SearchYAtom } from '@/recoil/SearchYAtom';

// interface KakaoMapProps {
//   openNewStoryModal: () => void;
//   openAddStoryModal: () => void;
// }

// const KakaoMap: React.FC<KakaoMapProps> = ({ openNewStoryModal, openAddStoryModal }) => {
//   // const [map, setMap] = useState<null | kakao.maps.Map>(null);

//   // 임시 위치 데이터
//   // const temporaryLocation = {
//   //   title: '가천관',
//   //   latlng: { lat: 37.45014238433003, lng: 127.12972934051282 },
//   // };

//   // 임시 마커 데이터
//   const locations = [
//     { title: '가천관', latlng: { lat: 37.45014238433003, lng: 127.12972934051282 } },
//     { title: '올데이즈 커피', latlng: { lat: 37.44756362788988, lng: 127.12729516027275 } },
//     { title: 'AI 공학과', latlng: { lat: 37.4551613, lng: 127.1334068 } },
//   ];

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(successHandler, errorHandler); // 성공시 successHandler, 실패시 errorHandler 함수가 실행된다.
//   }, []);

//   // 위치 검색
//   const placeX = useRecoilValue(SearchXAtom);
//   const placeY = useRecoilValue(SearchYAtom);
//   console.log('검색한 위치', placeX, placeY);

//   // geolocation 현재 위치
//   const [location, setLocation] = useState<
//     | GeolocationCoordinates
//     | { lat: number; lng: number }
//     | { latitue: number; longtitude: number }
//     | null
//   >(null); // 현재 위치를 저장할 상태

//   const successHandler = (response: GeolocationPosition) => {
//     console.log('현재 위치', response);
//     // console.log('위도', response.coords.latitude);
//     const { coords } = response; // coords 객체에서 추출

//     // placeX와 placeY가 null이 아닌 경우에만 해당 위치로 이동
//     if (placeX !== null && placeY !== null) {
//       setLocation({ lat: placeX[0], lng: placeY[0] });
//     } else {
//       setLocation({ lat: coords.latitude, lng: coords.longitude }); // GeolocationCoordinates를 설정
//     }

//     console.log('coords에 대해 알아보자 : ', coords.latitude);
//     setLocation({ lat: coords.latitude.getLat(), lng: coords.longitude.getLng() });
//     setLocation(coords);

//     console.log('location이 뭐 찍힐까? : ', location);
//   };

//   const errorHandler = (error: GeolocationPositionError) => {
//     console.log(error);
//   };

//   // 현재 위치 좌표값
//   const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
//   const mapRef = useRef<Map | null>(null);

//   const getCoordinates = () => {
//     if (mapRef.current) {
//       const map = mapRef.current;

//       setCoordinates({
//         lat: map.getCenter().getLat(),
//         lng: map.getCenter().getLng(),
//       });
//     }
//   };
//   console.log('위도&경도 : ', coordinates);

//   return (
//     <>
//       {location && (
//         <Map
//           center={{
//             lat: coordinates?.lat,
//             lng: coordinates?.lng,
//           }}
//           style={{ width: '100%', height: '100%' }}
//           level={4}
//           ref={mapRef}
//           onClick={getCoordinates}
//         >
//           <CustomOverlayMap
//             position={{
//               lat: location.latitude,
//               lng: location.longitude,
//             }}
//           >
//             {locations.map((loc) => (
//               <MapMarker
//                 key={`${loc.title}-${loc.latlng.lat}-${loc.latlng.lng}`}
//                 position={loc.latlng}
//                 image={{
//                   src: '/assets/marker.svg',
//                   size: { width: 50, height: 50 },
//                 }}
//                 title={loc.title}
//                 onClick={openAddStoryModal}
//               />
//             ))}
//             {/* 현재 위치 좌표 */}
//             <MapMarker
//               position={{ lat: location.latitude, lng: location.longitude }}
//               image={{
//                 src: '/assets/current-marker.svg',
//                 size: { width: 36, height: 44 },
//               }}
//               onClick={openNewStoryModal}
//               draggable={true}
//             />
//           </CustomOverlayMap>
//         </Map>
//       )}
//     </>
//   );
// };

// export default KakaoMap;
