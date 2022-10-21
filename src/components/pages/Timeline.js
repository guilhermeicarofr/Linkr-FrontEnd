import { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import LoginContext from "../../contexts/LoginContext";
import Post from "../Post.js";
import CreatePost from "../CreatePost.js";
import Trending from "../Trending.js";
import { getTimeline } from "../../services/axios.js";

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

const Page = styled.div`
  background-color: #333333;
  padding-top: 20px;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
`;
