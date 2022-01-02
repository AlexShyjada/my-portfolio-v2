import styled from "styled-components";
import { Container, LogoLight, SpanTextLight } from "../..";

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <SpanTextLight>
          Copyright &copy; 2021 - Alguns direitos reservados a
          <LogoLight />
        </SpanTextLight>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 3rem 0;
  background-color: var(--dark-100);
  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
