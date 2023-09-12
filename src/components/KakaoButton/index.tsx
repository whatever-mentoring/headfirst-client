import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function KakaoButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session.user?.name}님 반갑습니다. <br />
        <button onClick={() => signOut()}>로그아웃</button>
      </>
    );
  }
  return (
    <Image
      onClick={() => signIn('kakao')}
      src="/assets/kakao_login_button.png"
      alt="kakao-login"
      width={258.048}
      height={56}
    />
  );
}
