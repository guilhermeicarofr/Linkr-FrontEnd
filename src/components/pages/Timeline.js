import { useState, useEffect, useContext } from "react";
import LoginContext from "../../contexts/LoginContext";

import CreatePost from "../CreatePost.js";
import Trending from "../Trending.js";
import { getTimeline } from "../../services/axios.js";
import Post from "../Post.js";
import Navbar from "../Navbar.js";
import { Page } from "../../styles/commons/Page";
import { Title } from "../../styles/commons/Title";
import { Feed, Wrapper } from "../../styles/Posts/Feed";

function Timeline() {
  const { config } = useContext(LoginContext);
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    getTimeline(config)
      .then((res) => {
        setPosts(res.data);
        if (!res.data.length) {
          setMessage("There are no posts yet");
        }
      })
      .catch((error) => {
        setMessage(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
      });
  }, [refresh, config]);

  return (
    <>
      <Page>
        <Navbar />
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
          <Trending refresh={refresh} setRefresh={setRefresh} />
        </Wrapper>
      </Page>
    </>
  );
}

export default Timeline;
