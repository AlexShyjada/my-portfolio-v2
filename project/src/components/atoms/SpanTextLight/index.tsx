import { ReactNode, useContext } from "react";
import styled, { css } from "styled-components";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iSpanText {
  children: ReactNode;
}

export function SpanTextLight(props: iSpanText) {
  const { darkMode } = useContext(DarkmodeContext);
  const { children } = props;
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
          color: var(--dark-80);
        `
      : css`
          color: var(--white-100);
        `}
`;
