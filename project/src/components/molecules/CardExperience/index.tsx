import Image from "next/image";
import styled from "styled-components";
import { H3 } from "../..";

interface iCardExperienceProps {
  imgSRCLight: string;
  imgSRCDark: string;
  title: string;
  subTitle: string;
  description: string;
}

export function CardExperience(props: iCardExperienceProps) {
  const { imgSRCLight, imgSRCDark, title, subTitle, description } = props;
  return (
    <StyledCardExperience>
      <figure>
        <Image
          src={imgSRCLight}
          alt={title}
          layout="fill"
          objectFit="contain"
        />
      </figure>
      <div className="content">
        <H3>{title}</H3>
        <span className="subTitle">{subTitle}</span>
        <p className="description">{description}</p>
      </div>
    </StyledCardExperience>
  );
}

const StyledCardExperience = styled.div`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  border-radius: 2rem;
  background: var(--white-100);
  border: solid 2px var(--white-100);
  transition: 0.3s;
  figure {
    position: relative;
    min-height: 15rem;
    min-width: 15rem;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .subTitle {
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: var(--dark-100);
    }
    .description {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 25px;
      color: var(--dark-100);
    }
  }
`;
