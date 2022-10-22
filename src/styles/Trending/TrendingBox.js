import styled from "styled-components";

const TrendingBox = styled.div`
  width: 301px;
  height: 420px;
  background-color: #171717;
  color: #ffffff;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  margin-left: 25px;
  margin-top: 193px;
  flex-direction: column;
  position: relative;
  position: sticky;
  top: 107px;
  div {
    height: 1px;
    background-color: #484848;
    width: 100%;
    position: absolute;
    top: 61px;
    left: 0;
  }
  span {
    margin-top: 34px;
  }
  h1 {
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 27px;
  }
  h2 {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 19px;
    color: #ffffff;
  }
  @media (max-width: 937px) {
    display: none;
  }
`;

export default TrendingBox;
