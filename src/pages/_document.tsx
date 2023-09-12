import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>headfirst-client</title>
          <meta charSet="utf-8"></meta>
          <body>
            <Main />
            <NextScript />
            <script
              src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
              crossOrigin="anonymous"
            ></script>
          </body>
        </Head>
      </Html>
    );
  }
}
