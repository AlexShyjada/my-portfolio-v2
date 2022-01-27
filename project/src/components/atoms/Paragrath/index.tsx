import { ReactNode } from "react";
import styled from "styled-components";

interface iParagrathProps {
  children: ReactNode;
}

export function Paragrath(props: iParagrathProps) {
  const { children } = props;
  return <StyledParagrath>{children}</StyledParagrath>;
}

const StyledParagrath = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 33px;
  color: var(--dark-100);
`;
