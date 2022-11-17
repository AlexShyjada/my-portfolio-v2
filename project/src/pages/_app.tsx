import type { AppProps } from 'next/app'
import Head from "next/head";
import { globalStyles } from '../../styles/global';

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </>
  )
}
