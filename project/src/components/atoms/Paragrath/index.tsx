import { ReactNode, useContext } from "react";
import styled, { css } from "styled-components";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iParagrathProps {
  children: ReactNode;
}

export function Paragrath(props: iParagrathProps) {
  const { children } = props;
  const { darkMode } = useContext(DarkmodeContext);
  return <StyledParagrath darkMode={darkMode}>{children}</StyledParagrath>;
}

interface iStyledParagrath {
  darkMode: boolean;
}

const StyledParagrath = styled.p<iStyledParagrath>`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 33px;
  ${(props) =>
    props.darkMode == true
      ? css`
          color: var(--white-30);
        `
      : css`
          color: var(--dark-100);
        `}
`;
