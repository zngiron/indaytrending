import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

function Document() {
  return (
    <Html lang="tl">
      <Head>
        <script src="//anymind360.com/js/7429/ats.js" />
      </Head>
      <body className="bg-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
