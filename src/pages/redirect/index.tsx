import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { postLogin, getToken } from '../../api/login';
import { setCookie } from 'cookies-next';
// import { useRecoilState } from 'recoil';
// import { tokenState } from '@/states/createStoryState';

const Redirect = () => {
  const router = useRouter();
  // const [cookieToken, setCookieToken] = useRecoilState(tokenState);

  const getAuth = async (code: string) => {
    const {
      data: { access_token },
    } = await getToken(code);

    console.log('access_token', access_token);
    // setCookieToken(access_token);
    // console.log('cookieToken', cookieToken);

    // const [token, setToken] = useRecoilState(tokenState);
    // setToken(access_token);
    // console.log('토큰 값을 알려주는 스테이트', token);

    const { data } = await postLogin(access_token);

    setCookie('accessToken', data.accessToken);
    router.push('/main');
  };

  useEffect(() => {
    const { query } = router;
    const code = query.code as string;

    if (!code) {
      console.log('없음');
      return;
    }

    getAuth(code);
  }, [router]);

  return null;
};

export default Redirect;
