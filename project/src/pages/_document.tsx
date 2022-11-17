import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../../styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br" style={{ scrollBehavior: "smooth" }}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
          <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicons/favicon.ico"/>

          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
