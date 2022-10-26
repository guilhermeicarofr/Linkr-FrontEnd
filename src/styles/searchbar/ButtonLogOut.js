import styled from "styled-components";

export const ButtonLogOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 47px;
  width: 150px;
  right: 0px;
  top: 72px;
  border-radius: 0px 0px 0px 15px;
  background-color: #171717;
  color: #ffffff;
  cursor: pointer;
  display: ${(props) => (props.disabled ? "none" : "normal")};
  z-index: 15;
`;
