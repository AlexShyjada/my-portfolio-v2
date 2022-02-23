
import Document, {Html, Head, Main, NextScript} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document{
  static async getInitialProps(ctx:any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(){
    return(
      <Html lang="pt-br" style={{ scrollBehavior: "smooth" }}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
          <link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
          {/* Favicons */}
          <link rel="icon" href="/favicons/favicon.ico"/>
          <link rel="apple-touch-icon-precomposed" href="/favicons/favicon.ico" />
          <link rel="apple-touch-icon" sizes="48x48" href="/favicons/favicon-ipad-48.ico" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicons/favicon-ipad-72.ico" />
          <link rel="apple-touch-icon" sizes="96x96" href="/favicons/favicon-ipad-96.ico" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicons/favicon-iphone-144.ico" />
          <link rel="apple-touch-icon" sizes="196x192" href="/favicons/favicon-iphone-192.ico" />
          <link rel="apple-touch-icon" sizes="256x256" href="/favicons/favicon-iphone-256.ico" />
          <link rel="apple-touch-icon" sizes="384x384" href="/favicons/favicon-iphone-384.ico" />
          <link rel="apple-touch-icon" sizes="512x512" href="/favicons/favicon-iphone-512.ico" />
        </Head>

        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}