import styled from "styled-components";
import { CardExperience, Container } from "../..";
import { TitleContainer } from "../../molecules/TitleContainer";
import { ExperienceContent } from "./content";

export function ExperienciasProfissionais() {
  return (
    <StyledExperienciasProfissionais>
      <Container>
        <TitleContainer
          title="Empresas por onde eu já passei"
          subTitle="Sobre minha jornada"
        />
        <div className="gridCards">
          {ExperienceContent.map((ExperienceCard) => {
            return (
              <CardExperience
                key={ExperienceCard.id}
                imgSRCLight={ExperienceCard.imgSRCLight}
                imgSRCDark={ExperienceCard.imgSRCDark}
                title={ExperienceCard.title}
                subTitle={ExperienceCard.subTitle}
                description={ExperienceCard.description}
                href={ExperienceCard.href}
              />
            );
          })}
        </div>
      </Container>
    </StyledExperienciasProfissionais>
  );
}

const StyledExperienciasProfissionais = styled.section`
  width: 100%;
  padding: 8rem;
  .container {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    .gridCards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem;
    }
  }
`;
