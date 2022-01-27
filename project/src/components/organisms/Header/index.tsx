import { Container } from "../../atoms/Container";
import styled from "styled-components";
import { ButtonDegrade, Link, LogoDark, ToogleSwitch } from "../..";

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <LogoDark/>
        <nav>
          <Link href="#Hero">Início</Link>
          <Link href="#SobreMim">Sobre mim</Link>
          <Link href="#Portfolio">Potifólio</Link>
          <ToogleSwitch>Dark Mode</ToogleSwitch>
        </nav>
        <ButtonDegrade href="#Contato">
          Entrar em contato
        </ButtonDegrade>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 1.8rem;
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  border-bottom: solid 2px #b4b4b466;
  background-color: #ededed77;
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
