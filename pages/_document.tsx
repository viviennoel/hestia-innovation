import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5H4WBKW0B3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5H4WBKW0B3');
          `}
        </Script>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link 
          as="style"
          rel="stylesheet preload prefetch" 
          href="https://fonts.googleapis.com/css2?family=Marcellus+SC&family=Quicksand&family=Diphylleia&display=swap" 
          type="text/css" 
          crossOrigin="anonymous" />
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
