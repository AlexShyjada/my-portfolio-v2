import { ReactNode } from "react";
import styled from "styled-components";

interface iButtonWhiteProps {
  children: ReactNode;
}

export function Container(props: iButtonWhiteProps) {
  const { children } = props;
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 123.5rem;
  display: flex;

  @media(max-width: 1280px){
    width: 102.4rem;
  }

  @media(max-width: 1080px){
    width: 102.4rem;
  }

  @media(max-width: 900px){
    width: 70rem;
  }

  @media(max-width: 720px){
    width: 100%;
  }
`;
