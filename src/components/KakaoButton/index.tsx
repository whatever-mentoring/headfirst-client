import * as React from 'react';
import Router from 'next/router';
import Image from 'next/image';

const kakaoInit = () => {
  const kakao = (window as any).Kakao;
  if (!kakao.isInitialized()) {
    kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY);
  }

  return kakao;
};

const Index = () => {
  const kakaoLogin = async () => {
    // 카카오 초기화
    const kakao = kakaoInit();

    // 카카오 로그인 구현
    kakao.Auth.login({
      success: () => {
        kakao.API.request({
          url: '/v2/user/me', // 사용자 정보 가져오기
          success: (res: any) => {
            console.log(res);
            Router.push('/main');
          },
          fail: (error: any) => {
            console.log(error);
          },
        });
      },
      fail: (error: any) => {
        console.log(error);
      },
    });
  };

  return (
    <Image
      onClick={kakaoLogin}
      src="/assets/kakao_login_button.png"
      alt="kakao-login"
      width={258.048}
      height={56}
    />
  );
};

export default Index;
