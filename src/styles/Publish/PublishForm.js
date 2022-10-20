import styled from "styled-components";

const PublishForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  input {
    width: 100%;
    height: 30px;
    margin-bottom: 5px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #efefef;
    color: #333333;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    padding-left: 13px;

    :nth-child(2) {
      height: 66px;
      padding-bottom: 35px;
    }
    &::placeholder {
      color: #9f9f9f;
    }
    &:disabled {
      opacity: 0.7;
    }
  }
  button {
    height: 31px;
    width: 112px;
    background-color: #1877f2;
    border-radius: 6px;
    outline: none;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
    }
  }

  @media (max-width: 870px) {
    input {
      :nth-child(2) {
        height: 47px;
        padding-bottom: 15px;
      }
    }

    button {
      font-size: 13px;
      height: 22px;
    }
  }
`;

export default PublishForm;
