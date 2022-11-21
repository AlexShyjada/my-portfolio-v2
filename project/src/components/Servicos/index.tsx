import Image from "next/image";
import { Check } from "phosphor-react";
import {
  ServicesList,
  StyledHeder,
  StyledListContainer,
  StyledServicos,
  StyledTitleContainer,
} from "./styles";

export function Servicos() {
  return (
    <StyledServicos id='Servicos'>
      <div className="container">
        <StyledHeder>
          <StyledTitleContainer className="titleContainer">
            <div className="mainInformation">
              <span className="subtitle">O que eu faço?</span>
              <h2 className="secundaryTitle">Serviços</h2>
            </div>
            <p className="description">
              Sou focado no design de interfaces para sites, aplicativos e
              sistemas de gesrenciamento.
            </p>
          </StyledTitleContainer>

          <StyledListContainer className="listContainer">
            <li className="listItem ">
              <Check size={32} color="#0061EA" weight="bold" />
              Interfaces modernas e cleans
            </li>
            <li className="listItem ">
              <Check size={32} color="#0061EA" weight="bold" />
              Mais valor agregado ao seu produto/serviço
            </li>
            <li className="listItem ">
              <Check size={32} color="#0061EA" weight="bold" />
              Maior retorno e crescimento de seu negocio
            </li>
            <li className="listItem">
              <Check size={32} color="#0061EA" weight="bold" />
              Seus clientes mais satisfeitos
            </li>
          </StyledListContainer>
        </StyledHeder>

        <ServicesList>
          <li className="serviceCard">
            <figure>
              <Image
                src="/serviceDesignInterfacesWeb.svg"
                width={33}
                height={54}
                alt="Design de Aplicativos"
              />
            </figure>
            <h3>
              Design de
              <br />
              interfaces web
            </h3>
            <span>
              Interfaces para websites que funcionam em qualquer dispositivo,
              focado em seu público e forte apelo visual.
            </span>
          </li>
          <li className="serviceCard">
            <figure>
              <Image
                src="/serviceDesignMobileApp.svg"
                width={33}
                height={54}
                alt="Design de Aplicativos"
              />
            </figure>
            <h3>
              Design de
              <br />
              interfaces mobile
            </h3>
            <span>
              Prototipação de interfaces para aplicativos, com foco em
              usabilidade e objetivos de seu negocio.
            </span>
          </li>
          <li className="serviceCard">
            <figure>
              <Image
                src="/serviceWebsiteDeveloping.svg"
                width={47}
                height={37}
                alt="Desenvolvimento de Website"
              />
            </figure>
            <h3>
              Desenvolvimento
              <br />
              de websites
            </h3>
            <span>
              Implementação sem templates ou modelos prontos. Garantindo a
              qualidade e atenção aos detalhes da interface.
            </span>
          </li>
        </ServicesList>
      </div>
    </StyledServicos>
  );
}
