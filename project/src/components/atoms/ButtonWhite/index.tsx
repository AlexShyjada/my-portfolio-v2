import { ReactNode, useContext } from "react";
import styled, { css } from "styled-components";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iButtonWhiteProps {
  children: ReactNode;
  href?: string;
  width?: string;
}

export function ButtonWhite(props: iButtonWhiteProps) {
  const { children, href, width } = props;
  const { darkMode } = useContext(DarkmodeContext);
  return (
    <StyledButtonWhite darkMode={darkMode} width={width}>
      <a href={href}>{children}</a>
    </StyledButtonWhite>
  );
}

interface iStyledButtonWhiteProps {
  width?: string;
  darkMode: boolean;
}

const StyledButtonWhite = styled.button<iStyledButtonWhiteProps>`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    ${(props) =>
      props.width
        ? css`
            width: ${props.width};
          `
        : css``}
    ${(props) =>
      props.darkMode
        ? css`
            color: var(--white-100);
            background: var(--dark-80);
            border: 1px solid #fafafa33;
            &:hover {
              border: 1px solid #fafafaff;
            }
          `
        : css`
            border: 1px solid #09091833;
            color: var(--dark-100);
            background: var(--white-100);
            &:hover {
              border: 1px solid #09091888;
            }
          `}
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.3s;
  }
`;
