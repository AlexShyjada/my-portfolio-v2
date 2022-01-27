import { ReactNode } from "react";
import styled from "styled-components";

interface iH3Props {
  children: ReactNode;
}

export function H3(props: iH3Props) {
  const { children } = props;
  return <StyledH3>{children}</StyledH3>;
}

const StyledH3 = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  color var(--dark-100);
`;
