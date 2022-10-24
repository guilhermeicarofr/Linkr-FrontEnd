import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 43px;
  height: 64px;
  gap: 18px;
  margin-top: 87px;

  h2 {
    color: #ffffff;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @media (max-width: 937px) {
    margin-left: 18px;
    margin-bottom: 19px;
    margin-top: 20px;

    h2 {
      font-size: 33px;
      line-height: 49px;
    }
  }
`;
