import styled from "styled-components";
import { ButtonDegrade, ButtonWhite, Container } from "../..";
import { CardFerramentas } from "../../molecules/CardFerramentas";
import { TitleContainer } from "../../molecules/TitleContainer";

type techs = {
  slug: string;
  icon: string;
  title: string;
  description: string;
};
interface IMinhasTecnologiasProps {
  techs: techs[]
}

export function MinhasTecnologias({techs}: IMinhasTecnologiasProps) {
  return (
    <StyledMinhasTecnologias>
      <Container>
        <TitleContainer title="Minhas ferramentas" subTitle="TECNOLOGIAS" />
      </Container>
      <div className="gridCardsContainer">
        <Container>
          <div className="gridCards">
            {techs.map((card) => {
              return (
                <CardFerramentas
                  key={card.slug}
                  imgSRC={card.icon}
                  title={card.title}
                  description={card.description}
                />
              );
            })}
          </div>
        </Container>
      </div>
      <Container>
        <ButtonWhite width="185px">Anterior</ButtonWhite>
        <ButtonDegrade width="185px">Próximo</ButtonDegrade>
      </Container>
    </StyledMinhasTecnologias>
  );
}

const StyledMinhasTecnologias = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 8rem 0;
  .container{
    display: flex;
    justify-content: space-between;
  }
  .gridCardsContainer {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    .container{
      display: block;
      overflow: visible;
      .gridCards {
        display: flex;
        flex-direction: row;
        gap: 2.5rem;
      }
    }
  }
`;
