import styled from "styled-components";
import { Button } from "./Button";

export const SmallButton = styled(Button)`
  height: 31px;
  width: 112px;
  font-family: "Lato", sans-serif;

  font-size: 14px;
  line-height: 17px;

  @media (max-width: 937px) {
    font-size: 13px;
    height: 22px;
  }
`;
