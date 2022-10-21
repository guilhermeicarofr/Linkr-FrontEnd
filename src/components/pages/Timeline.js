import { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import LoginContext from "../../contexts/LoginContext";
import Post from "../Post.js";
import CreatePost from "../CreatePost.js";
import Trending from "../Trending.js";
import { getTimeline } from "../../services/axios.js";
import { Page } from "../../styles/commons/Page";
import { Title } from "../../styles/commons/Title";

function Timeline() {
  const { config } = useContext(LoginContext);

  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    getTimeline(config)
      .then((res) => {
        setPosts(res.data);
        if (!res.data.length) {
          setMessage("There are no posts yet");
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
      });
  }, [refresh, config]);

  return (
    <>
      <Page>
        <Wrapper>
          <Feed>
            <Title>
              <h2>timeline</h2>
            </Title>
            <CreatePost refresh={refresh} setRefresh={setRefresh} />
            {posts.length ? (
              posts.map((p, index) => (
                <Post
                  key={index}
                  postId={p.postId}
                  url={p.url}
                  description={p.description}
                  name={p.name}
                  userId={p.userId}
                  picture={p.picture}
                />
              ))
            ) : (
              <p>{message}</p>
            )}
          </Feed>
          <Trending />
        </Wrapper>
      </Page>
    </>
  );
}

export default Timeline;

const Wrapper = styled.div`
  display: flex;
  width: 937px;
  margin: 0 auto;

  @media (max-width: 937px) {
    width: 100%;
  }
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;

  @media (max-width: 937px) {
    width: 100%;
  }
`;
