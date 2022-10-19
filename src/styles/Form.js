import styled from "styled-components";

const FormStyle = styled.form`
  width: 90%;
  input {
    width: 100%;
    height: 65px;
    border-radius: 6px;
    background-color: #ffffff;
    outline: none;
    font-size: 27px;
    margin-bottom: 13px;
    font-family: "Oswald", sans-serif;
    border: none;
    &::placeholder {
      color: #9f9f9f;
      font-weight: bold;
      padding-left: 17px;
    }
  }
  button {
    font-family: "Oswald", sans-serif;
    height: 65px;
    width: 100%;
    background-color: #1877f2;
    border-radius: 6px;
    outline: none;
    border: none;
    font-size: 27px;
    font-weight: bold;
    color: #ffffff;
  }
  @media (max-width: 870px) {
    max-width: 500px;
    input {
      height: 55px;
    }
  }
`;

export default FormStyle;
