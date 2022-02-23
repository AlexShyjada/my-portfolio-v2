import styled, { css } from "styled-components";
import { ReactNode, useContext } from "react";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iLinkProps {
  children: ReactNode;
  href: string;
}

export function Link(props: iLinkProps) {
  const { darkMode } = useContext(DarkmodeContext);
  const { children, href } = props;

  return <StyledLink darkMode={darkMode} href={href}>{children}</StyledLink>;
}

interface iStyledLink {
  darkMode: boolean;
}

const StyledLink = styled.a<iStyledLink>`
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0em;
  ${(props) =>
    props.darkMode == true
      ? css`
          color: var(--white-80);
        `
      : css`
          color: var(--dark-80);
        `}
  transition: 0.3s;
  &:hover {
    color: var(--green);
  }
`;
