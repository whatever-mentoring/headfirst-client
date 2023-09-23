import Router from 'next/router';
import * as React from 'react';

const kakaoInit = () => {
  const kakao = (window as any).Kakao;
  if (!kakao.isInitialized()) {
    kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY);
  }

  return kakao;
};

const Kakao = () => {
  const KakaoLogout = () => {
    const kakao = kakaoInit();

    console.log(kakao.Auth.getAccessToken()); // 카카오 접근 토큰 확인 (로그인 후 해당 토큰을 이용하여 추가 기능 수행 가능)

    // 카카오 로그인 링크 해제
    kakao.API.request({
      url: '/v1/user/unlink',
      success: (res: any) => {
        // 로그인 성공할 경우 정보 확인 후 / 페이지로 push
        console.log(res);
        Router.push('/main');
      },
      fail: (error: any) => {
        console.log(error);
      },
    });
  };

  return (
    <div>
      <div>카카오로그인 페이지</div>
      <button onClick={KakaoLogout}>버튼</button>
    </div>
  );
};

export default Kakao;
