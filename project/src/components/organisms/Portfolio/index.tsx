import styled from "styled-components";
import {
  ButtonDegrade,
  ButtonWhite,
  CardPortfolio,
  Container,
  TitleContainer,
} from "../..";

type Portfolio = {
  slug: string;
  image: string;
  title: string;
  description: string;
  linkDribbble: string;
};

interface IPortfolioProps {
  portfolio: Portfolio[];
}

export function Portfolio({ portfolio }: IPortfolioProps) {
  return (
    <StyledPortfolio>
      <Container>
        <TitleContainer
          title="Projetos desenvolvidos por mim"
          subTitle="PORTFÓLIO"
        />
      </Container>
      <div className="gridCardsContainer">
        <Container>
          <div className="gridCards">
            {portfolio.map((card) => (
              <CardPortfolio
                key={card.slug}
                imgSRC={card.image}
                title={card.title}
                description={card.description}
                linkDribbble={card.linkDribbble}
              />
            ))}
          </div>
        </Container>
      </div>
      <Container>
        <ButtonWhite width="185px">Anterior</ButtonWhite>
        <ButtonDegrade width="185px">Próximo</ButtonDegrade>
      </Container>
    </StyledPortfolio>
  );
}

const StyledPortfolio = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  .container {
    display: flex;
    justify-content: space-between;
  }
  .gridCardsContainer {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    .container {
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
