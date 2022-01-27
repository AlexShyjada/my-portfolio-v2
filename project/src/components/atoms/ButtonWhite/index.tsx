import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface iButtonWhiteProps {
  children: ReactNode;
  href?: string;
  width?: string;
}

export function ButtonWhite(props: iButtonWhiteProps) {
  const { children, href, width } = props;
  return (
    <StyledButtonWhite width={width}>
      <a href={href}>{children}</a>
    </StyledButtonWhite>
  );
}

interface iStyledButtonWhiteProps {
  width?: string;
}

const StyledButtonWhite = styled.button<iStyledButtonWhiteProps>`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    border: 1px solid #09091833;
    ${props => props.width 
      ? css`
        width: ${props.width};
      `
      : css`
        
      `
    }
    font-size: 1.4rem;
    color: var(--dark-100);
    background: var(--white-100);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      border: 1px solid #09091888
    }
  }
`;
