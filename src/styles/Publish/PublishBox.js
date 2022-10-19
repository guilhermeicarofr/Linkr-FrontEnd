import styled from "styled-components";

const PublishBox = styled.div`
  display: flex;
  width: 611px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 0 22px 16px 18px;
  gap: 18px;

  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 300;

  margin: 50px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 16px;
  }

  @media (max-width: 870px) {
    width: 100%;
    margin: 0;
    border-radius: 0;
    img {
      display: none;
    }
  }
`;

export default PublishBox;
