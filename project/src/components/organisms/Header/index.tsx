import styled, { css } from "styled-components";
import { Container } from "../../atoms/Container";
import { ButtonDegrade, Link, LogoDark, LogoLight, ToogleSwitch } from "../..";
import { useContext } from "react";
import { DarkmodeContext } from "../../context/DarkmodeContext";

export function Header() {
  const { darkMode, setDarkMode } = useContext(DarkmodeContext);

  function handleChangeDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <StyledHeader darkMode={darkMode}>
      <Container>
        {darkMode ? (
          <>
            <LogoLight />
          </>
        ) : (
          <>
            <LogoDark />
          </>
        )}
        <nav>
          <Link href="/">Início</Link>
          <Link href="#SobreMim">Sobre mim</Link>
          <Link href="#Portfolio">Potifólio</Link>
          <ToogleSwitch onChange={handleChangeDarkMode}>Dark Mode</ToogleSwitch>
        </nav>
        <ButtonDegrade href="#Contato" width="185px">
          Entrar em contato
        </ButtonDegrade>
      </Container>
    </StyledHeader>
  );
}

interface iStyledHeader {
  darkMode: boolean;
}

const StyledHeader = styled.header<iStyledHeader>`
  padding: 1.8rem;
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  border-bottom: solid 2px #b4b4b422;
  ${(props) =>
    props.darkMode
      ? css`
          background-color: #04041377;
        `
      : css`
          background-color: #ededed77;
        `}
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  z-index: 100;
  div {
    margin: 0 auto;
    width: 123.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4rem;
    }
  }
`;
