import React, { useState } from "react";
import Head from 'next/head';
import Script from 'next/script'
import { NextSeo } from 'next-seo';
import BackgroundContext from "../contexts/BackgroundContext";
import "../styles.css";
import 'bootstrap/dist/css/bootstrap.css';

const MyApp = ({ Component, pageProps }) => {
  const [background, setBackground] = useState({});

  function flashBackground(correct) {
    setBackground({ 
      backgroundColor: correct ? "#00ff00" : "red",
      transition: "background-color 0.6s ease"
    });
    const interval = setInterval(() => {
      setBackground({});
      clearInterval(interval);
    }, 200);
  }

  return (
    <div>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-Z821NCJYBE"></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z821NCJYBE', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <meta name="google-site-verification" content="sjNS_-1SsZyHECFHhJwVwJqgpFtP-q5vZ1we6rUAPKA" />
        <link rel="shortcut icon" href={`${process.env.BASE_PATH}/pokemon.ico`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
      <NextSeo
        title="PokeQuiz: Who's That Pokemon?"
        description="Machine Learning powered Pokemon Quiz to create the hardest Pokemon Quiz ever! Test your Pokemon knowledge and see how many you can get right!"
      />
      <div className="background" style={background}>
        <BackgroundContext.Provider value={{ flashBackground }}>
          <Component {...pageProps} />
        </BackgroundContext.Provider>
        <div className="footer">
          Made with love by Elvis Wei
          <br />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ewei068/pokequiz">Github</a>&nbsp;&nbsp;--&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ewei068/">LinkedIn</a>&nbsp;&nbsp;--&nbsp;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://portosaurus.github.io/ewei068/">Portfolio</a>
          <br />
          Inspired by <a target="_blank" rel="noopener noreferrer" href="https://pokemoncries.com/">Pokemon Cries</a>
        </div>
      </div>
    </div>
  )
}
  

export default MyApp;
