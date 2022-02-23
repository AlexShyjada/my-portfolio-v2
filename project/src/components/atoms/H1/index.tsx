import { ReactNode, useContext } from "react";
import styled, { css } from "styled-components";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iH1Props {
  children: ReactNode;
}

export function H1(props: iH1Props) {
  const { children } = props;
  const { darkMode } = useContext(DarkmodeContext);
  return <StyledH1 darkMode={darkMode}>{children}</StyledH1>;
}

interface iStyledH1 {
  darkMode: boolean;
}

const StyledH1 = styled.h1<iStyledH1>`
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 69px;
  ${(props) =>
    props.darkMode
      ? css`
          color: var(--white-80);
        `
      : css`
          color: var(--dark-100);
        `}
`;
