import { ReactNode } from "react";
import styled from "styled-components";

interface iUpercaseText {
  children: ReactNode;
}

export function UpercaseText(props: iUpercaseText) {
  const { children } = props;
  return <StyledUpercaseText>{children}</StyledUpercaseText>;
}

const StyledUpercaseText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;
