import {Header, Hero, Servicos} from "../components";
import Portfolio from "../components/Portifolio";
import SobreMim from "../components/SobreMim";

export function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Servicos/>
      <Portfolio/>
      <SobreMim/>
    </>
  )
}
