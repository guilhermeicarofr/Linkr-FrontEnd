import { useState, useEffect, useContext } from "react";
import Post from "../Post.js";
import { getUserPosts } from "../../services/axios.js";
import { useParams } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext.js";
import { Page } from "../../styles/commons/Page.js";
import { Title } from "../../styles/commons/Title.js";
import Trending from "../Trending.js";
import { Feed, Wrapper } from "../../styles/Posts/Feed.js";
import Navbar from "../commons/Navbar.js";



export default function UserTimeline() {
  const [userPosts, setUserPosts] = useState({});
  const [message, setMessage] = useState("Loading ...");
  const { id } = useParams();
  const { config } = useContext(LoginContext);
  const [refresh] = useState(false);

  useEffect(() => {
    getUserPosts(id, config)
      .then((res) => {
        setUserPosts(res.data);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setMessage("Nenhum post");
        }
      });
  }, [id, config]);

  return (
    <Page>
      <Navbar />
      <Wrapper>
        <Feed>
          <Title>
            <img
              src={userPosts.picture}
              alt="pic"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoS1h0huK1B606Qb4j_hHmwGH8wPmvKLSKQ&usqp=CAU";
              }}
            />
            <h2>{userPosts.name}'s Posts</h2>
          </Title>

          {userPosts.posts ? (
            userPosts.posts.map((p, index) => (
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
        <Trending refresh={refresh} />
      </Wrapper>
    </Page>
  );
}
