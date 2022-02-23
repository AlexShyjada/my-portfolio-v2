import styled, { css } from "styled-components";
import { ReactNode, useContext } from "react";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iUpercaseText {
  children: ReactNode;
}

export function UpercaseText(props: iUpercaseText) {
  const { children } = props;
  const { darkMode } = useContext(DarkmodeContext);
  return <StyledUpercaseText darkMode={darkMode}>{children}</StyledUpercaseText>;
}

interface iStyledUpercaseText {
  darkMode: boolean;
}

const StyledUpercaseText = styled.span<iStyledUpercaseText>`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  ${(props) =>
    props.darkMode
      ? css`
          color: var(--white-30);
        `
      : css`
          color: var(--dark-100);
        `}
`;
