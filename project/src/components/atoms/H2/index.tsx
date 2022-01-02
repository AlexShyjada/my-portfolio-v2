import { ReactNode } from "react";
import styled from "styled-components";

interface iH2Props {
  children: ReactNode;
}

export function H2(props: iH2Props) {
  const { children } = props;
  return <StyledH2>{children}</StyledH2>;
}

const StyledH2 = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 41px;
  color var(--dark-100);
`;
