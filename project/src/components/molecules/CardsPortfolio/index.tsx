import Image from "next/image";
import { useContext } from "react";
import styled, { css } from "styled-components";
import { H3 } from "../..";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iCardPortfolioProps {
  imgSRC: string;
  title: string;
  description: string;
  linkDribbble: string;
}

export function CardPortfolio(props: iCardPortfolioProps) {
  const { imgSRC, title, description, linkDribbble } = props;

  const { darkMode } = useContext(DarkmodeContext);

  return (
    <StyledCardPortfolio darkMode={darkMode}>
      <figure>
        <Image src={imgSRC} alt={title} layout="fill" objectFit="cover" />
      </figure>
      <div className="content">
        <H3>{title}</H3>
        <div className="description">{description}</div>
        <a href={linkDribbble} target="_blank" rel="noreferrer">
          Saiba mais
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 11L13 6L8 1"
              stroke="#387BC9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 11L6 6L1 1"
              stroke="#387BC9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </StyledCardPortfolio>
  );
}

interface iStyledCardPortfolio {
  darkMode: boolean;
}

const StyledCardPortfolio = styled.div<iStyledCardPortfolio>`
  height: 48.2rem;
  min-width: 39.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2.5rem;
  align-items: flex-start;
  border-radius: 1rem;
  overflow: hidden;
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
    height: 25rem;
    width: 39.5rem;
  }
  .content {
    padding: 0 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h3 {
      height: 5rem;
    }
    .description {
      height: 7rem;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      font-weight: 300;
      font-size: 16px;
      line-height: 25px;
      overflow: hidden;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      ${(props) =>
        props.darkMode
          ? css`
              color: var(--white-30);
            `
          : css`
              color: var(--dark-80);
            `}
    }
    a {
      width: max-content;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: 700;
      margin-top: 1.5rem;
      transition: 0.3s;
      ${(props) =>
        props.darkMode
          ? css`
              color: var(--white-100);
            `
          : css`
              color: var(--dark-80);
            `}
      &:hover {
        color: var(--blue);
      }
    }
  }
`;
