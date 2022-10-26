import styled from "styled-components";

const PublishBox = styled.div`
  display: flex;
  width: 611px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 0 18px 16px 18px;
  gap: 18px;

  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 300;

  margin-bottom: 29px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 16px;
  }

  @media (max-width: 937px) {
    margin-bottom: 16px;
    border-radius: 0;
    width: 100%;
    gap: 0;
    img {
      display: none;
    }
  }
`;

export default PublishBox;
