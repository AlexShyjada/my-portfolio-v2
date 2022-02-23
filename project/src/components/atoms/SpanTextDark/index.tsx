import styled, { css } from "styled-components";
import { ReactNode, useContext } from "react";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iSpanText {
  children: ReactNode;
}

export function SpanTextDark(props: iSpanText) {
  const { children } = props;
  const { darkMode } = useContext(DarkmodeContext);
  return <StyledSpanText darkMode={darkMode}>{children}</StyledSpanText>;
}

interface iStyledSpanText {
  darkMode: boolean;
}

const StyledSpanText = styled.span<iStyledSpanText>`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 35px;
  ${(props) =>
    props.darkMode == true
      ? css`
          color: var(--white-30);
        `
      : css`
          color: var(--dark-100);
        `}
`;
