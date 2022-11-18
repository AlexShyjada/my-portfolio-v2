import Image from "next/image";
import { ArrowRight } from "phosphor-react";
import {
  MainInofrmationContainer,
  PhotosContainer,
  StyledSobreMim,
  TextContainer,
} from "./styles";

export function SobreMim() {
  return (
    <StyledSobreMim id="SobreMim">
      <MainInofrmationContainer>
        <TextContainer>
          <div className="titleContainer">
            <span>Sobre Mim</span>
            <h2>Conheça minha História</h2>
          </div>
          <div className="descriptionContainer">
            <p>
              Meu nome é Alexandre Shyjada e sou de Salvador – BA (Brasil).
              Minha jornada no design começou em 2015, quando comecei a
              trabalhar voluntariamente com social média de uma instituição
              religiosa. Desde então sempre busquei melhorar a entrega do que eu
              produzo...
            </p>
            <button>
              Leia a história completa <ArrowRight size={20} weight="bold" />
            </button>
          </div>
        </TextContainer>
        <PhotosContainer className="imageContainer">
          <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1554_1036)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.2479 30.5L59.1617 37.3388C60.9235 38.2707 61.5264 40.3786 60.4975 42.0154L56.2988 48.6882C55.2988 50.2776 53.129 50.8232 51.4177 49.9149L38.3775 43.0084V57.6111C38.3775 59.4818 36.7601 61 34.7673 61H26.2399C24.2471 61 22.6296 59.4818 22.6296 57.6111V43.0084L9.58949 49.9149C7.87823 50.8232 5.70848 50.2776 4.70844 48.6882L0.509734 42.0154C-0.519184 40.382 0.0837255 38.2741 1.84552 37.3388L14.7521 30.5L1.8383 23.6612C0.0765048 22.7293 -0.526405 20.6214 0.502513 18.9846L4.70122 12.3118C5.70126 10.7224 7.87102 10.1768 9.58227 11.0851L22.6225 17.9916V3.38889C22.6225 1.51822 24.2399 0 26.2327 0H34.7601C36.7529 0 38.3704 1.51822 38.3704 3.38889V17.9916L51.4105 11.0851C53.1218 10.1768 55.2915 10.7224 56.2916 12.3118L60.4903 18.9846C61.5192 20.618 60.9162 22.7259 59.1544 23.6612L46.2479 30.5Z" fill="#FF9052"/>
            </g>
            <defs>
            <clipPath id="clip0_1554_1036">
            <rect width="61" height="61" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <figure >
            <Image src='/me.png' alt="Foto de Alexandre Shyjada" fill/>
          </figure>
        </PhotosContainer>
      </MainInofrmationContainer>
      <PhotosContainer></PhotosContainer>
    </StyledSobreMim>
  );
}
