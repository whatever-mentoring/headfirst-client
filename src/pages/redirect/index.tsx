import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { postLogin, getToken } from '../../api/login';
import { setCookie } from 'cookies-next';

const Redirect = () => {
  const router = useRouter();

  const getAuth = async (code: string) => {
    const {
      data: { access_token },
    } = await getToken(code);

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
