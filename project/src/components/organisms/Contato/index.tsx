import styled from "styled-components";
import { ButtonDegrade, Container, Input, TextArea, TitleContainer } from "../..";
import Image from "next/image";

export function Contato() {
  return (
    <StyledContato id="Contato">
      <Container>
        <figure>
          <Image
            src="/assets/imgContato.webp"
            alt="Entrar em contato"
            layout="fill"
            objectFit="contain"
          />
        </figure>
        <aside>
          <TitleContainer subTitle="Fale comigo :)" title="Entre em contato" />
          <form data-netlify="true" name="pizzaOrder" method="post">
            <Input
              label="Nome Completo"
              type="text"
              name="nome-completo"
              placeholder="Seu nome"
            />
            <div className="inputGroup">
              <Input
                label="E-mail"
                type="text"
                name="e-mail"
                placeholder="Seu e-mail"
              />
              <Input
                label="Celular"
                type="number"
                name="celular"
                placeholder="Seu celular"
              />
            </div>
            <Input
              label="Assunto"
              type="text"
              name="assunto"
              placeholder="Assunto da mensagem"
            />
            <TextArea
              label="Mensagem"
              name="mensagem"
              placeholder="Digite aqui sua mensagem"
              minlength={100}
              maxlength={700}
              heigth={"150px"}
            />
            <ButtonDegrade width="100%">
              Enviar
            </ButtonDegrade>
          </form>
        </aside>
      </Container>
    </StyledContato>
  );
}

const StyledContato = styled.section`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8rem;
    figure {
      position: relative;
      height: 80.8rem;
      min-width: 63rem;
    }
    aside {
      display: flex;
      flex-direction: column;
      gap: 6rem;
      width: 100%;
      form{
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
        .inputGroup{
          display: flex;
          flex-direction: row;
          gap: 3.5rem;
        }
      }
    }
  }
`;
