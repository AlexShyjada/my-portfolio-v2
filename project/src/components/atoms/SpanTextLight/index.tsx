import { ReactNode } from "react";
import styled from "styled-components";

interface iSpanText {
  children: ReactNode;
}

export function SpanTextLight(props: iSpanText) {
  const { children } = props;
  return <StyledSpanText>{children}</StyledSpanText>;
}

const StyledSpanText = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 35px;
  color: var(--white-100);
`;
