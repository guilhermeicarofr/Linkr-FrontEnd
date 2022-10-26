import styled from "styled-components";
import { Input } from "./Input";

export const PublishInput = styled(Input)`
  height: 30px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: #efefef;
  padding-left: 13px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 15px;

  :nth-child(2) {
    height: 66px;
    padding-bottom: 35px;
  }
  &::placeholder {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 15px;
  }
  &:disabled {
    opacity: 0.7;
  }

  @media (max-width: 937px) {
    padding-left: 11px;
    :nth-child(2) {
      height: 47px;
      padding-bottom: 18px;
    }
    &::placeholder {
      font-size: 13px;
    }
  }
`;
