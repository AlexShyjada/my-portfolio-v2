import Image from "next/image";
import { useContext } from "react";
import styled, { css } from "styled-components";
import { Container, Paragrath } from "../..";
import { DarkmodeContext } from "../../context/DarkmodeContext";
import { TitleContainer } from "../../molecules/TitleContainer";

export function SobreMim() {
  const { darkMode } = useContext(DarkmodeContext);
  return (
    <StyledSobreMim darkMode={darkMode} id="SobreMim">
      <Container>
        <TitleContainer
          title="Um pouco da minha história"
          subTitle="Sobre mim"
        />
        <div className="content">
          <Image
            src="/assets/fotoAlexShyjada.webp"
            alt="Alexandre Shyjada"
            width={404}
            height={510}
          />
          <aside>
            <span className="whoIsAlexShyjada">Quem é Alexandre Shyjada?</span>
            <Paragrath>
              Designer UI/UX, Desenvolvedor Front-End e Graduando no Bacharelado
              de Sistemas de Sistemas de Informação pela Universidade Federal da
              Bahia.
            </Paragrath>
            <Paragrath>
              Comecei minha carreira como designer aos 15 anos com trabalho
              voluntário em uma instituição religiosa. Lá conheci
              desenvolvedores Front-End que começaram a passar clientes para
              desenvolver Interfaces de Usuário.
            </Paragrath>
            <cite>&quot;Never stop learning&quot; - Rocketseat</cite>
          </aside>
        </div>
      </Container>
    </StyledSobreMim>
  );
}

interface iStyledSobreMim {
  darkMode: boolean;
}

const StyledSobreMim = styled.section<iStyledSobreMim>`
  padding: 8rem 0;
  .container {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 12rem;
      aside {
        width: 71.2rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        .whoIsAlexShyjada {
          font-style: normal;
          font-weight: 600;
          font-size: 22px;
          line-height: 23px;
          ${(props) =>
            props.darkMode
              ? css`
                  color: var(--white-100);
                `
              : css`
                  color: var(--dark-100);
                `}
        }
        cite {
          font-style: italic;
          font-weight: normal;
          font-size: 18px;
          line-height: 33px;
          opacity: 50%;
          ${(props) =>
            props.darkMode
            ? css`
                  color: var(--white-30);
                  `
              : css`
                color: var(--dark-100);
                `}
        }
        }
      }
    }
`;
