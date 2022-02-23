import { useContext } from "react";
import styled from "styled-components";
import {
  ButtonDegrade,
  ButtonWhite,
  Container,
  H1,
  ImgHeroDark,
  ImgHeroLight,
  SpanTextDark,
  UpercaseText,
} from "../..";
import { DarkmodeContext } from "../../context/DarkmodeContext";

export function Hero() {
  const { darkMode } = useContext(DarkmodeContext);
  return (
    <StyledHero id="Hero">
      <Container>
        <aside>
          <UpercaseText>Alexandre Shyjada</UpercaseText>
          <H1>Designer UI/UX e Desenvolvedor Web</H1>
          <SpanTextDark>
            A sua disposição para desenvolver soluções em tecnologia que atendam
            as necessidades de seu negócio
          </SpanTextDark>
          <div className="buttonGroup">
            <ButtonDegrade href="#Contact">Entrar em contato</ButtonDegrade>
            <ButtonWhite href="https://curriculo.alexshyjada.com/">
              Currículo CV
            </ButtonWhite>
          </div>
        </aside>
        {darkMode ? (
          <>
            <ImgHeroDark />
          </>
        ) : (
          <>
            <ImgHeroLight />
          </>
        )}
      </Container>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  margin-top: 8.24rem;
  padding: 5rem;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    aside {
      width: 52.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      .buttonGroup {
        display: flex;
        justify-content: flex-start;
        gap: 2.5rem;
      }
    }
  }
`;
