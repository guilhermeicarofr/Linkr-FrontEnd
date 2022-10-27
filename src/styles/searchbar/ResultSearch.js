import styled from "styled-components";

export const ResultSearch = styled.div`
  position: fixed;
  left: 30%;
  top: -42px;
  width: 40%;
  overflow-y: scroll;
  max-height: 220px;
  padding-top: 46px;
  margin-top: 55px;
  background-color: #e7e7e7;
  z-index: 4;
  border-radius: 8px;
  display: ${(props) => (props.disabled ? "none" : "normal")};

  @media (max-width: 937px) {
    position: absolute;
    width: 95%;
    top: 36px;
    left: 2.5%;
  }
`;
