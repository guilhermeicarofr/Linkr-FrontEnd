import styled from "styled-components";

export const WrapperNavbar = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #151515;
  padding: 0px 20px 0px 20px;
  z-index: 2;
  cursor: pointer;

  @media (max-width: 937px) {
    z-index: 10;
  }

  h1 {
    height: 54px;
    width: 108px;
    color: #ffffff;
    font-family: "Passion One", cursive;
    font-size: 49px;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: 0.05em;
  }

  img {
    height: 53px;
    width: 53px;
    border-radius: 26.5px;
    cursor: pointer;
  }
`;
