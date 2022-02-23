import { useContext } from "react";
import styled, { css } from "styled-components";
import { DarkmodeContext } from "../../context/DarkmodeContext";

interface iInputProps {
  label: string;
  name: string;
  placeholder: string;
  maxlength: number;
  minlength: number;
  heigth: string;
}

export function TextArea(props: iInputProps) {
  const { darkMode } = useContext(DarkmodeContext);
  const { label, name, placeholder, minlength, maxlength, heigth } = props;
  return (
    <StyledTextArea darkMode={darkMode} heigth={heigth}>
      {label}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        minLength={minlength}
        maxLength={maxlength}
      />
    </StyledTextArea>
  );
}

interface iStyledTextAreaProps {
  heigth: string;
  darkMode: boolean;
}

const StyledTextArea = styled.label<iStyledTextAreaProps>`
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
  textarea {
    border-radius: 0.5rem;
    resize: none;
    height: ${(props) => props.heigth};
    padding: 1.5rem 2.5rem;
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
    transition: 0.3s;
    &:focus {
      outline: transparent;
      border: solid 2px var(--green);
    }
  }
`;
