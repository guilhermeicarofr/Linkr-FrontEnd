import styled from "styled-components";

const DeleteScreenStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(235, 235, 235, 0.92);
  overflow: hidden;
  display: ${(props) => (props.showScreen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  > div {
    background-color: #333333;
    border-radius: 50px;
    height: 262px;
    max-width: 597px;
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 38px 30px 0 30px;
    h1 {
      font-size: 34px;
      font-weight: bold;
      color: #ffffff;
      @media (max-width: 380px) {
        font-size: 25px;
      }
    }
    div {
      display: flex;
      margin-top: 40px;
      justify-content: center;
      flex-direction: row;
      width: 240px;
      button:last-child {
        margin-left: 15px;
      }
      @media (max-width: 380px) {
        width: 230px;
      }
    }
  }
`;
const ButtonDeleteStyle = styled.button`
  height: 31px;
  width: 112px;
  background-color: ${(prosp) => (prosp.isBlue ? "#1877f2" : "#ffffff")};
  border-radius: 6px;
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => (props.isBlue ? "#ffffff" : "#1877f2")};
  cursor: pointer;
`;

export { DeleteScreenStyle, ButtonDeleteStyle };
