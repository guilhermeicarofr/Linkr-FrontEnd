import styled from "styled-components";

const InitialPages = styled.div`
  display: flex;
  min-height: 100vh;
  > div:first-child {
    width: 65%;
    background-color: #151515;
    color: #ffffff;
    p:first-child {
      font-family: "Passion One", cursive;
      font-weight: bold;
      font-size: 106px;
      margin-top: 135px;
      margin-left: 100px;
    }
    p:last-child {
      font-family: "Oswald", sans-serif;
      font-weight: bold;
      font-size: 43px;
      margin-left: 100px;
    }
  }
  > div:last-child {
    width: 35%;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      font-size: 20px;
      color: #ffffff;
      text-decoration: underline;
      margin-top: 14px;
      font-family: "Lato", sans-serif;
      cursor: pointer;
    }
  }
  @media (max-width: 937px) {
    display: initial;
    > div:first-child {
      height: 20%;
      min-height: 150px;
      width: 100%;
      padding: 15px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p:first-child {
        font-size: 76px;
        margin: 0;
      }
      p:last-child {
        font-size: 23px;
        margin: 0;
      }
    }
    > div:last-child {
      height: calc(100vh - 150px);
      min-height: 405px;
      width: 100%;
      padding: 20px 0;
      justify-content: flex-start;
    }
  }
`;

export default InitialPages;
