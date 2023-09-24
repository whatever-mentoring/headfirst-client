import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function KakaoButton() {
  return (
    <Link
      href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env
        .NEXT_PUBLIC_KAKAO_REST_API_KEY!}&redirect_uri=${
        process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI
      }&response_type=code
`}
    >
      <Image src="/assets/kakao-login-button.png" alt="kakao-login" width={258.048} height={56} />
    </Link>
  );
}
