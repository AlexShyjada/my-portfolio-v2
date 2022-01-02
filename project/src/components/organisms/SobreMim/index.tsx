import Image from "next/image";
import styled from "styled-components";
import { Container } from "../..";

export function SobreMim() {
  return (
    <StyledSobreMim id="SobreMim">
      <Container>
        <div className="content">
          <Image
            src="/assets/fotoAlexShyjada.png"
            alt="Alexandre Shyjada"
            width={404}
            height={510}
          />
        </div>
      </Container>
    </StyledSobreMim>
  );
}

const StyledSobreMim = styled.section``;
