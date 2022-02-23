import { useContext } from "react";
import styled, { css } from "styled-components";
import { Container, LogoLight } from "../..";
import { DarkmodeContext } from "../../context/DarkmodeContext";

export function Footer() {
  const { darkMode } = useContext(DarkmodeContext);
  return (
    <StyledFooter darkMode={darkMode}>
      <Container>
        <span>
          Copyright &copy; 2021 - Alguns direitos reservados a
          <LogoLight />
        </span>
      </Container>
    </StyledFooter>
  );
}

interface iStyledFooter {
  darkMode: boolean;
}

const StyledFooter = styled.footer<iStyledFooter>`
  padding: 3rem 0;
  ${(props) =>
    props.darkMode
      ? css`
          background: var(--dark-80);
          `
      : css`
          background-color: var(--dark-100);
        `}
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 35px;
      color: var(--white-80);
    }
  }
`;
