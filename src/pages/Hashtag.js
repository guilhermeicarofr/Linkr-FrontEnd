import { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import Navbar from "../components/commons/Navbar.js";
import { Feed, Wrapper } from "../styles/posts/Feed.js";
import Trending from "../components/trending/Trending.js";
import { Page } from "../styles/commons/Page.js";
import { Title } from "../styles/commons/Title.js";
import LoginContext from "../contexts/LoginContext.js";
import { getHashtagsPosts } from "../services/axios.js";
import Post from "../components/post/Posts.js";


export default function Hashtag() {
  const [hashtagPosts, setHashtagPosts] = useState([]);
  const [message, setMessage] = useState("Loading ...");
  const { hashtag } = useParams();
  const { config,refresh } = useContext(LoginContext);
 

  useEffect(() => {
    getHashtagsPosts(hashtag, config)
      .then((res) => {
        setHashtagPosts(res.data);     
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setMessage("No posts");
        }
      });
  }, [hashtag, config, refresh]);

  return (
    <Page>
      <Navbar />
      <Wrapper>
        <Feed>
          <Title>           
            <h2># {hashtag}</h2>
          </Title>

          {hashtagPosts.length !== 0 ? (
            hashtagPosts.map((p, index) => (
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
  );
}