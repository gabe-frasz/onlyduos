import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="shortcut icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.ico"
        />

        <meta name="theme-color" content="#EB5E28" />
        <meta name="apple-mobile-web-app-status-bar" content="#EB5E28" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <Script
          crossOrigin="anonymous"
          strategy="beforeInteractive"
          src="https://polyfill.io/v3/polyfill.min.js"
        />
      </Head>

      <body className="w-full min-h-full bg-base-300 bg-galaxy bg-cover bg-no-repeat text-gray-100 overflow-x-hidden">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
