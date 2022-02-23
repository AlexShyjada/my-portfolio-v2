import { useContext } from "react";
import styled, { css } from "styled-components";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iInputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

export function Input(props: iInputProps) {
  const { darkMode } = useContext(DarkmodeContext);
  const { label, type, name, placeholder } = props;
  return (
    <StyledInput darkMode={darkMode}>
      {label}
      <input type={type} name={name} placeholder={placeholder} />
    </StyledInput>
  );
}

interface iStyledInput {
  darkMode: boolean;
}

const StyledInput = styled.label<iStyledInput>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  ${(props) =>
    props.darkMode == true
      ? css`
          color: var(--white-80);
        `
      : css`
          color: var(--dark-100);
        `}
  input {
    padding: 1.5rem 2.5rem;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    ${(props) =>
      props.darkMode == true
        ? css`
            color: #fafafa22;
            border: solid 2px var(--dark-80);
            background-color: var(--dark-80);
          `
        : css`
            color: #04041322;
            border: solid 2px var(--white-80);
            background-color: var(--white-80);
          `}
    border-radius: 0.5rem;
    transition: 0.3s;
    &:focus {
      outline: transparent;
      border: solid 2px var(--green);
    }
  }
`;
