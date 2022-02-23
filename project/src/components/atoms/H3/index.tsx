import { ReactNode, useContext } from "react";
import styled, { css } from "styled-components";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iH3Props {
  children: ReactNode;
}

export function H3(props: iH3Props) {
  const { darkMode } = useContext(DarkmodeContext);
  const { children } = props;
  return (
    <StyledH3 darkMode={darkMode} className="h3">
      {children}
    </StyledH3>
  );
}

interface iStyledH3 {
  darkMode: boolean;
}

const StyledH3 = styled.h3<iStyledH3>`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  ${(props) =>
    props.darkMode
      ? css`
          color: var(--white-80);
        `
      : css`
          color: var(--dark-100);
        `}
`;
