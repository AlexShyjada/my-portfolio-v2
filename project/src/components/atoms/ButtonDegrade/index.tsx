import { ReactNode } from "react";
import styled from "styled-components";

interface iButtonDegradeProps {
  children: ReactNode;
  href: string;
}

export function ButtonDegrade(props: iButtonDegradeProps) {
  const { children, href } = props;

  return (
    <StyledButtonDegrade>
      <a href={href}>{children}</a>
    </StyledButtonDegrade>
  );
}

const StyledButtonDegrade = styled.button`
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    width: max-content;
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
