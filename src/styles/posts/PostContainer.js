import styled from "styled-components";

export const PostContainer = styled.div`
  width: 611px;
  min-height: 276px;
  background-color: #171717;
  border-radius: 16px;
  margin-bottom: 16px;
  display: flex;
  padding: 18px;
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-bottom: 19px;
      object-fit: cover;
    }
  }
  > div:last-child {
    margin-left: 18px;
    width: 90%;
    > span {
      display: flex;
      justify-content: space-between;
    }
    h2 {
      color: #ffffff;
      font-size: 19px;
      font-family: "Lato", sans-serif;
      margin-bottom: 10px;
    }
    > p {
      color: #b7b7b7;
      font-size: 17px;
      font-family: "Lato", sans-serif;
      margin: 10px 0;
    }

    input {
      width: 100%;
      height: 44px;
      color: #4c4c4c;
    }
  }
  @media (max-width: 937px) {
    width: 100%;
    border-radius: 0;
    min-height: 232px;
    > div:first-child {
      text-align: center;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
