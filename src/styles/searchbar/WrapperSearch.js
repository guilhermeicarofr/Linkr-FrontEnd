import styled from "styled-components";

export const WrapperSearch = styled.span`
  position: fixed;
  top: 13px;
  left: 30%;
  height: 46px;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 0px 17px;
  z-index: 4;

  @media (max-width: 937px) {
    position: initial;
    width: 95%;
    margin-top: 72px;
  }
`;
