import { ReactNode } from "react";
import styled from "styled-components";

interface iButtonWhiteProps {
  children: ReactNode;
  href: string;
}

export function ButtonWhite(props: iButtonWhiteProps) {
  const { children, href } = props;
  return (
    <StyledButtonWhite>
      <a href={href}>{children}</a>
    </StyledButtonWhite>
  );
}

const StyledButtonWhite = styled.button`
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    border: 1px solid #09091833;
    width: max-content;
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
