import styled from "styled-components";
import { CardExperience, Container } from "../..";
import { TitleContainer } from "../../molecules/TitleContainer";
import { ExperienceContent } from "./content";

type job = {
  slug: string;
  logo: string;
  logoDark: string;
  title: string;
  duration: string;
  description: string;
};
interface IExperienciasProfissionaisProps {
  emprego: job[];
}

export function ExperienciasProfissionais({
  emprego,
}: IExperienciasProfissionaisProps) {
  return (
    <StyledExperienciasProfissionais>
      <Container>
        <TitleContainer
          title="Empresas por onde eu já passei"
          subTitle="Sobre minha jornada"
        />
        <div className="gridCards">
          {emprego.map((ExperienceCard) => {
            return (
              <CardExperience
                key={ExperienceCard.slug}
                imgSRCLight={ExperienceCard.logo}
                imgSRCDark={ExperienceCard.logoDark}
                title={ExperienceCard.title}
                subTitle={ExperienceCard.duration}
                description={ExperienceCard.description}
                // href={ExperienceCard.href}
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
