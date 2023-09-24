import { baseAxios } from './baseAxios';

export const getToken = (code: string) => {
  return baseAxios.get<{ access_token: string }>(
    `https://kauth.kakao.com/oauth/token?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&code=${code}&grant_type=authorization_code`,
  );
};

export const postLogin = async (accessToken: string) => {
  const { data } = await baseAxios.post<{ data: { access_token: string } }>('/auth/login', {
    token: accessToken,
  });
  return data;
};
