import { ReactNode, useContext } from "react";
import styled, { css } from "styled-components";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iH2Props {
  children: ReactNode;
}

export function H2(props: iH2Props) {
  const { children } = props;
  const { darkMode } = useContext(DarkmodeContext);
  return <StyledH2 darkMode={darkMode}>{children}</StyledH2>;
}

interface iStyledH2 {
  darkMode: boolean;
}

const StyledH2 = styled.h2<iStyledH2>`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 41px;
  ${(props) =>
    props.darkMode
      ? css`
          color: var(--white-80);
        `
      : css`
          color: var(--dark-100);
        `}
`;
