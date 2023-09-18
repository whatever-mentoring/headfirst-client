import NextAuth, { type AuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_KAKAO_CLIENT_ID!,
      clientSecret: process.env.NEXT_KAKAO_CLIENT_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);
