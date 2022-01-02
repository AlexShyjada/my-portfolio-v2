import React, { ReactNode } from "react";
import styled from "styled-components";
import { H2,  UpercaseText} from "../..";

interface iTitleContainer {
  subTitle: ReactNode;
  title: string;
}

export function TitleContainer(props: iTitleContainer) {
  const { subTitle, title } = props;
  return (
    <StyledTitleContainer>
      <UpercaseText>{subTitle}</UpercaseText>
      <H2>{title}</H2>
    </StyledTitleContainer>
  );
}

const StyledTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
