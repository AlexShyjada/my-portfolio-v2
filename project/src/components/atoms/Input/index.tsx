import styled from "styled-components";

interface iInputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

export function Input(props: iInputProps) {
  const { label, type, name, placeholder } = props;
  return (
    <StyledInput>
      {label}
      <input type={type} name={name} placeholder={placeholder} />
    </StyledInput>
  );
}

const StyledInput = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: var(--dark-100);
  input {
    padding: 1.5rem 2.5rem;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #04041322;
    border-radius: 0.5rem;
    border: solid 2px var(--white-80);
    background-color: var(--white-80);
    transition: 0.3s;
    &:focus{
      outline: transparent;
      border: solid 2px var(--green);
    }
  }
`;
