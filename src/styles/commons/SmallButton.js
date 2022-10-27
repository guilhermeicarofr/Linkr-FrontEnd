import styled from "styled-components";
import { Button } from "./Button";

export const SmallButton = styled(Button)`
  height: 31px;
  width: 112px;
  font-family: "Lato", sans-serif;
  font-size: 14px;
  line-height: 17px;
  background-color: ${(props) => props.following ? "#ffffff" : "#1877f2"};
  color: ${(props) => props.following ? "#1877f2" : "ffffff"};

  @media (max-width: 937px) {
    font-size: 13px;
    height: 22px;
  }
`;
