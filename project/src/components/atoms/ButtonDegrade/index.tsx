import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface iButtonDegradeProps {
  children: ReactNode;
  href?: string;
  width?: string;
}

export function ButtonDegrade(props: iButtonDegradeProps) {
  const { children, href, width } = props;

  return (
    <StyledButtonDegrade width={width}>
      <a href={href}>{children}</a>
    </StyledButtonDegrade>
  );
}

interface iStyledButtonDegradeProps {
  width?: string;
}

const StyledButtonDegrade = styled.button<iStyledButtonDegradeProps>`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    ${props => props.width 
      ? css`
        width: ${props.width};
      `
      : css`
        
      `
    }
    font-size: 1.4rem;
    color: var(--white-100);
    background: var(--degrade);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
