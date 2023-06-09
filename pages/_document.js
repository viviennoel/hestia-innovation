import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link 
          as="style"
          rel="stylesheet preload prefetch" 
          href="https://fonts.googleapis.com/css2?family=Jaldi&family=family=Gothic+A1&display=swap" 
          type="text/css" 
          crossorigin="anonymous" />
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
