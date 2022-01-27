import Image from "next/image";
import styled from "styled-components";
import { H3 } from "../..";

interface iCardFerramentasProps {
  imgSRC: string;
  title: string;
  description: string;
}

export function CardFerramentas(props: iCardFerramentasProps) {
  const { imgSRC, title, description } = props;

  return (
    <StyledCardFerramentas>
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

const StyledCardFerramentas = styled.div`
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
  .content{
    display:flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
