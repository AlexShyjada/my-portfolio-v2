import styled from "styled-components";

interface iInputProps {
  label: string;
  name: string;
  placeholder: string;
  maxlength: number;
  minlength: number;
  heigth: string;
}

export function TextArea(props: iInputProps) {
  const { label, name, placeholder, minlength, maxlength, heigth } = props;
  return (
    <StyledTextArea heigth={heigth}>
      {label}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        maxLength={maxlength}
        minLength={minlength}
      />
    </StyledTextArea>
  );
}

interface iStyledTextAreaProps {
  heigth: string;
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
  color: var(--dark-100);
  textarea {
    height: ${props =>  props.heigth};
    padding: 1.5rem 2.5rem;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #04041322;
    background-color: var(--white-80);
  }
`;
