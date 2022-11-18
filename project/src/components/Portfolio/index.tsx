import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "phosphor-react";
import {
  StyledCardPortfolio,
  StyledHeaderPortifolio,
  StyledPortfolio,
  StyledPortifólioList,
} from "./styles";
import { portifolioCardsInformation } from "./content";
import Image from "next/image";

export function Portfolio() {
  return (
    <StyledPortfolio id="Portifolio">
      <div className="container">
        <StyledHeaderPortifolio>
          <div className="mainInformation">
            <span className="subtitle">Portifólio</span>
            <h2 className="secundaryTitle">Projetos em destaque</h2>
          </div>
          <button>
            <Link href="#" legacyBehavior>
              <a>
                Ver mais no Behance
                <ArrowUpRight size={20} weight="bold" />
              </a>
            </Link>
          </button>
        </StyledHeaderPortifolio>

        <StyledPortifólioList>
          {portifolioCardsInformation.map((card) => (
            <li key={card.id}>
              <StyledCardPortfolio>
                <figure className="imageContainer">
                  <Image
                    src={card.imageURL}
                    alt={`Ilutsração do produto ${card.title}`}
                    fill
                  />
                </figure>
                <div className="textContainer">
                  <div className="mainInformationContainer">
                    <h3 className="tertiaryTitle">{card.title}</h3>
                    <span className="postDescription">{card.description}</span>
                  </div>

                  <Link href={card.link} legacyBehavior target="_blank">
                    <a className="cardLink">
                      Saiba Mais
                      <ArrowRight size={20} weight="bold" />
                    </a>
                  </Link>
                </div>
              </StyledCardPortfolio>
            </li>
          ))}
        </StyledPortifólioList>
      </div>
    </StyledPortfolio>
  );
}
