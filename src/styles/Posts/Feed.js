import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 937px;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 937px) {
    width: 100%;
  }
`;

export const Feed = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #b7b7b7;
  }

  @media (max-width: 937px) {
    width: 100%;
  }
`;
