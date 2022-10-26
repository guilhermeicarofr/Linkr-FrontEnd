import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 65px;
  border-radius: 6px;
  background-color: #ffffff;
  outline: none;
  font-size: 27px;
  margin-bottom: 13px;
  padding-left: 17px;
  font-family: "Oswald", sans-serif;
  border: none;
  &::placeholder {
    font-size: 27px;
    color: #9f9f9f;
    font-size: 27px;
    font-weight: bold;
    font-family: "Oswald", sans-serif;
  }

  &:disabled {
    opacity: 0.7;
  }

  @media (max-width: 937px) {
    height: 55px;
  }
`;
