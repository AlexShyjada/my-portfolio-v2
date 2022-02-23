import Image from "next/image";
import { useContext } from "react";
import styled, { css } from "styled-components";
import { H3 } from "../..";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iCardExperienceProps {
  imgSRCLight: string;
  imgSRCDark: string;
  title: string;
  subTitle: string;
  description: string;
}

export function CardExperience(props: iCardExperienceProps) {
  const { imgSRCLight, imgSRCDark, title, subTitle, description } = props;
  const { darkMode } = useContext(DarkmodeContext);
  return (
    <StyledCardExperience darkMode={darkMode}>
      <figure>
        {darkMode ? (
          <>
            <Image
              src={imgSRCDark}
              alt={title}
              layout="fill"
              objectFit="contain"
            />
          </>
        ) : (
          <>
            <Image
              src={imgSRCLight}
              alt={title}
              layout="fill"
              objectFit="contain"
            />
          </>
        )}
      </figure>
      <div className="content">
        <H3>{title}</H3>
        <span className="subTitle">{subTitle}</span>
        <p className="description">{description}</p>
      </div>
    </StyledCardExperience>
  );
}

interface iStyledCardExperience {
  darkMode: boolean;
}

const StyledCardExperience = styled.div<iStyledCardExperience>`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  border-radius: 2rem;
  ${(props) =>
    props.darkMode
      ? css`
          background: var(--dark-80);
          border: solid 2px var(--dark-80);
        `
      : css`
          background: var(--white-100);
          border: solid 2px var(--white-100);
        `}
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
      ${(props) =>
        props.darkMode
          ? css`
              color: var(--white-60);
            `
          : css`
              color: var(--dark-100);
            `}
    }
    .description {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 25px;
      ${(props) =>
        props.darkMode
          ? css`
              color: var(--white-30);
            `
          : css`
              color: var(--dark-100);
            `}
    }
  }
`;
