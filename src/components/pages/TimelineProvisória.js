import styled from "styled-components";
import PublishPost from "../publishPost";

export default function TimelineProvisória() {
  return (
    <Page>
      <PublishPost />;
    </Page>
  );
}

const Page = styled.div`
  background-color: #333333;
  padding-top: 20px;
`;
