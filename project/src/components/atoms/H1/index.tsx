import { ReactNode } from "react";
import styled from "styled-components";

interface iH1Props {
  children: ReactNode;
}

export function H1(props: iH1Props) {
  const { children } = props;
  return <StyledH1>{children}</StyledH1>;
}

const StyledH1 = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 69px;
`;
