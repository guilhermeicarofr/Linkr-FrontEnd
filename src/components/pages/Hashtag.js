import { useState, useEffect, useContext } from "react";
import Post from "../Post.js";
import { getHashtagsPosts } from "../../services/axios.js";
import { useParams } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext.js";
import { Page } from "../../styles/commons/Page.js";
import { Title } from "../../styles/commons/Title.js";
import Trending from "../Trending.js";
import { Feed, Wrapper } from "../../styles/Posts/Feed.js";
import Navbar from "../Navbar.js";

export default function Hashtag() {
  const [hashtagPosts, setHashtagPosts] = useState([]);
  const [message, setMessage] = useState("Loading ...");
  const { hashtag } = useParams();
  const { config } = useContext(LoginContext);
  const [refresh,setRefresh] = useState(false);

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
  }, [hashtag, config]);

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
                refresh={refresh}
                setRefresh={setRefresh}                          
              />
            ))
          ) : (
            <p>{message}</p>
          )}
        </Feed>
        <Trending refresh={refresh} />
      </Wrapper>
    </Page>
  );
}