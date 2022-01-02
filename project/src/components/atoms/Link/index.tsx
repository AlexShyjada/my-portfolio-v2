import { ReactNode } from "react";
import styled from "styled-components";

interface iLinkProps {
  children: ReactNode;
  href: string;
}

export function Link(props: iLinkProps) {
  const { children, href } = props;
  return <StyledLink href={href}>{children}</StyledLink>;
}

const StyledLink = styled.a`
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0em;
  color: var(--dark-80);
  transition: 0.3s;
  &:hover {
    color: var(--green);
  }
`;
