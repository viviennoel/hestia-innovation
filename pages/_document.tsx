import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'
import { useContext } from "react";
import { translations } from "../translations/translations";
import LanguageContext from "../context/languageContext";

export default function Document() {
  const { language } = useContext(LanguageContext);
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

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Diphylleia&family=Kurale&family=Lato:wght@400&family=Marcellus+SC&display=swap" rel="stylesheet"></link>

        <meta property="og:url" content="https://res.cloudinary.com/djlwtz7qw/image/upload/c_thumb,w_500,g_face/v1690800082/article17Compressed_ukz4np_hoqgc9.jpg" />
        <meta property="og:image" content="https://res.cloudinary.com/djlwtz7qw/image/upload/c_thumb,w_500,g_face/v1690800082/article17Compressed_ukz4np_hoqgc9.jpg" />
        <meta property="og:title" content={translations[language].seo.title} />
        <meta property="og:description" content={translations[language].seo.description} />
        <meta name="description" content={translations[language].seo.description} />
        <meta name="keywords" content={translations[language].seo.keywords} />
        <meta name="author" content={translations[language].seo.author} />
        <title>{translations[language].seo.title}</title>
        <meta name="facebook-domain-verification" content="6e618qmh5r91uxw6wfwrpa49er24bt" />
      
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
