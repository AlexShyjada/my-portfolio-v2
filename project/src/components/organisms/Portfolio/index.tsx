import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  ButtonDegrade,
  ButtonWhite,
  CardPortfolio,
  Container,
  TitleContainer,
} from "../..";

interface Images {
  hidpi: string;
  normal: string;
  one_x: string;
  two_x: string;
  four_x: string;
  teaser: string;
}

interface iDribbleProps {
  animated: boolean;
  description: string;
  height: number;
  html_url: string;
  id: number;
  images: Images;
  low_profile: boolean;
  tags: string[];
  title: string;
  width: number;
  published_at: Date;
  updated_at: Date;
  attachments: any[];
  projects: any[];
  video?: any;
}

export function Portfolio() {
  const [dribbbleProjects, setDribbbleProjects] = useState<iDribbleProps[]>([]);

  const dribbble = process.env.NEXT_PUBLIC_DRIBBBLE_URL as string;

  useEffect(() => {
    fetch(dribbble)
      .then((response) => response.json())
      .then((data) => setDribbbleProjects(data));
  }, [dribbble]);

  console.log(dribbble)

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
            {dribbbleProjects.map((card) => {
              return (
                <CardPortfolio
                  key={card.id}
                  imgSRC={card.images.hidpi}
                  title={card.title}
                  description={card.description}
                  href={card.html_url}
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
