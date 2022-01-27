import { ExperienciasProfissionais, Hero, SobreMim, Contato, Portfolio } from "../..";
import { MinhasTecnologias } from "../../organisms/MinhasTecnologias";

export function HomePage() {

  return (
    <>
      <Hero/>
      <SobreMim/>
      <Portfolio/>
      <MinhasTecnologias/>
      <ExperienciasProfissionais/>
      <Contato/>
    </>
  )
}
