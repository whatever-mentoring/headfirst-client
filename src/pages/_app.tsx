import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { RecoilRoot } from 'recoil';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" />
    </RecoilRoot>
  );
}
