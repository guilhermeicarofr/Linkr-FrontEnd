import { useState, useEffect, useContext } from "react";

import Navbar from "../components/commons/Navbar";

import LoginContext from "../contexts/LoginContext";
import { getTimeline } from "../services/axios";
import { Page } from "../styles/commons/Page";
import { Title } from "../styles/commons/Title";
import { Feed, Wrapper } from "../styles/posts/Feed";
import CreatePost from "../components/post/CreatePost";
import Trending from "../components/trending/Trending";
import Post from "../components/post/Posts";
import Comments from "../components/comments/Comments";
import LoadingMorePosts from "../components/post/Loading-more-posts";

function Timeline() {
  const { config, refresh } = useContext(LoginContext);
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("Loading ...");

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
            <CreatePost />
            <LoadingMorePosts posts={posts} setPosts={setPosts} />
            {posts.length ? (
              posts.map((p, index) => (
                <>
                  <Post
                    postId={p.postId}
                    url={p.url}
                    description={p.description}
                    name={p.name}
                    userId={p.userId}
                    picture={p.picture}
                    shareId={p.shareId}
                    shareUserId={p.shareUserId}
                    shareUserName={p.shareUserName}            
                  />
                  <Comments 
                    postId={p.postId}
                  />
                </>
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

