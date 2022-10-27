import styled from "styled-components";

export const ContainerSearch = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 3;
  position: fixed;
  top: 0px;
  left: 0px;
  display: ${(props) => (props.disabled ? "none" : "normal")};
`;
