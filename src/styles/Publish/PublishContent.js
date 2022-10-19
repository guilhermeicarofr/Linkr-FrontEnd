import styled from "styled-components";

const PublishContent = styled.div`
  width: 100%;

  h1 {
    font-size: 20px;
    line-height: 24px;
    color: #707070;
    margin: 21px 0 20px;

    @media (max-width: 870px) {
      font-size: 17px;
      text-align: center;
      margin: 10px 0;
    }
  }
`;

export default PublishContent;
