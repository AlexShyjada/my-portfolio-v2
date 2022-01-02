import { ReactNode } from "react";
import styled from "styled-components";

interface iToogleSwitch {
  children: ReactNode;
}

export function ToogleSwitch(props: iToogleSwitch) {
  const { children } = props;

  return (
    <StyledToogleSwtch>
      <span className="textSwitch">{children}</span>
      <div className="switchWrapper">
        <input className="checkBox" type="checkbox" />
        <span className="switchButton light"></span>
      </div>
    </StyledToogleSwtch>
  );
}

const StyledToogleSwtch = styled.label`
  width: max-content;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  span {
    color: var(--dark-100);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }

  .switchWrapper {
    display: inline-block;
    width: 32px;
    height: 16px;
    position: relative;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 40px;
      background-color: #09091811;
    }

    span::before {
      content: "";
      width: 16px;
      height: 16px;
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 50%;
      transition: 0.3s all ease;
      background-color: var(--dark-100);
    }

    input:checked + .switchButton::before {
      transform: translateX(15px);
    }
  }
`;
