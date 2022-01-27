import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
:root {
  --green: #2BD67B;
  --blue: #4070F4;
  --dark-100: #040413;
  --dark-80: #090918;
  --white-100: #FFF;
  --white-80: #FAFAFA;
  --white-60: #EDEDED;
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
  background: var(--white-60);
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
