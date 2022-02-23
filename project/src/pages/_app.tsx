import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { createGlobalStyle, css } from "styled-components";
import { StateAndRequestContextProvider } from "../components/context/DarkmodeContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <title>AlexShyjada</title>
        <meta name="description" content="Designer UI/UX, Desenvolvedor Front-End e Graduando no Bacharelado de Sistemas de Sistemas de Informação pela Universidade Federal da Bahia."/>
        <meta name="application-name" content="AlexShyjada" />
        <link rel="“canonical”" href="https://alexshyjada.com/" />
        <meta name="keywords" content="Programação, website, desenvolvimento de websites, ui/ux, ui ,ux, serviços, computação, TI, Design, Alexandre Shyjada, Alexandre, Shyjada, HTML, CSS, Javascript, JavaScript, website, site, aplicativo, protótipo, Bahia, Salvador, web application, landing page, software, apps mobile, app, aplicativos, desenvolvimento de app Bahia"/>
        <meta content="Alexandre Shyjada" name="creator"/>
        <meta name="author" content="Alexandre Shyjada" />

        {/* Meta tags Facebook */}
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://alexshyjada.com/" />
        <meta name="og:title" content="Alexandre Shyjada: Designer UI/UX, Desenvolvedor Web"/>
        <meta name="og:description" content="Designer UI/UX, Desenvolvedor Front-End e Graduando no Bacharelado de Sistemas de Sistemas de Informação pela Universidade Federal da Bahia."/>
        <meta name="og:image" content="/social.png" />

        {/* Meta tags Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alexshyjada.com/" />
        <meta property="twitter:title" content="Alexandre Shyjada: Designer UI/UX, Desenvolvedor Web"/>
        <meta name="twitter:description" content="Designer UI/UX, Desenvolvedor Front-End e Graduando no Bacharelado de Sistemas de Sistemas de Informação pela Universidade Federal da Bahia."/>
        <meta name="twitter:image" content="/social.png" />
    </Head>

    <StateAndRequestContextProvider
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      >
      <GlobalStyle darkMode={darkMode} />
      <Component {...pageProps} />
    </StateAndRequestContextProvider>
  </>
  );
}

interface iGlobalStyle {
  darkMode: boolean;
}

const GlobalStyle = createGlobalStyle<iGlobalStyle>`
:root {
  --green: #2BD67B;
  --blue: #4070F4;
  --dark-100: #040413;
  --dark-80: #090918;
  --white-100: #FFF;
  --white-80: #FAFAFA;
  --white-60: #EDEDED;
  --white-30: #93939F;
  --degrade: linear-gradient(87.7deg, #2BD67B 0%, #4070F4 99.89%);
}

* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
  font-family: "epilogue", Sans-serif;
  text-decoration: none;
  border-radius: 0;
  background: transparent;
}

html {
  font-size: 62.5%;
}

body{
  font-size: 1.6rem;
  ${(props) =>
    props.darkMode
      ? css`
          background: var(--dark-100);
        `
      : css`
          background: var(--white-60);
        `}
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  margin: 0 auto;
  width: 123.5rem;
  display: flex;
}
`;
