import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const KakaoMap = () => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: 37.55130586957679, lng: 126.98821364692621 }}
        style={{ width: '100%', height: '100%' }}
        level={5}
      >
        <MapMarker position={{ lat: 37.55130586957679, lng: 126.98821364692621 }}></MapMarker>
      </Map>
    </>
  );
};

export default KakaoMap;
