import Image from "next/image";
import { useContext } from "react";
import styled, { css } from "styled-components";
import { H3 } from "../..";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iCardFerramentasProps {
  imgSRC: string;
  title: string;
  description: string;
}

export function CardFerramentas(props: iCardFerramentasProps) {
  const { imgSRC, title, description } = props;
  const { darkMode } = useContext(DarkmodeContext);

  return (
    <StyledCardFerramentas darkMode={darkMode}>
      <figure>
        <Image src={imgSRC} alt={title} layout="fill" objectFit="contain" />
      </figure>
      <div className="content">
        <H3>{title}</H3>
        <p className="description">{description}</p>
      </div>
    </StyledCardFerramentas>
  );
}

interface iStyledCardFerramentas {
  darkMode: boolean;
}

const StyledCardFerramentas = styled.div<iStyledCardFerramentas>`
  height: 25rem;
  min-width: 18.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3rem 1.5rem;
  border-radius: 1rem;
  ${(props) =>
    props.darkMode
      ? css`
          background: var(--dark-80);
        `
      : css`
          background: var(--white-100);
        `}
  figure {
    position: relative;
    height: 4rem;
    width: 6rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .description {
      ${(props) =>
        props.darkMode
          ? css`
              color: var(--white-30);
            `
          : css`
              color: var(--dark-80);
            `}
    }
  }
`;
