import Image from 'next/image'
import styled from 'styled-components';
import { H3 } from '../..';

interface iCardPortfolioProps {
  imgSRC: string;
  title: string;
  description: string;
  width:number;
  height: number;
}

export function CardPortfolio(props: iCardPortfolioProps) {

  const { imgSRC, title, description, width, height } = props;

  return (
    <StyledCardPortfolio>
      <figure>
        <Image src={imgSRC} alt={title} width={width} height={height}/>
      </figure>
      <div className="content">
        <H3>{title}</H3>
        <p className="description">{description}</p>
      </div>
    </StyledCardPortfolio>
  );
}

const StyledCardPortfolio = styled.div`
  height: 25rem;
  min-width: 18.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3rem 1.5rem;
  border-radius: 1rem;
  background: var(--white-100);
  figure {
    position: relative;
    height: 4rem;
    width: 6rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
