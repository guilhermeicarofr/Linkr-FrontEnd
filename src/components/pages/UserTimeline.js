import { useState, useEffect, useContext } from "react";
import Post from "../Post.js";
import { getUserPosts } from "../../services/axios.js";
import { useParams } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext.js";
import { Page } from "../../styles/commons/Page.js";
import { Title } from "../../styles/commons/Title.js";
import Trending from "../Trending.js";

function UserTimeline() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("Loading");
  const { id } = useParams();
  const { userData, config } = useContext(LoginContext);

  useEffect(() => {
    getUserPosts(id, config)
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setMessage("Nenhum post");
        }
      });
  }, [id, config]);

  return (
    <Page>
      <Title>
        <img
          src={userData.picture}
          alt="pic"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png";
          }}
        />
        <h2>{userData.name}'s Posts</h2>
      </Title>
      {posts.length ? (
        posts.map((p, index) => (
          <Post
            key={index}
            postId={p.id}
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
      <Trending />
    </Page>
  );
}

export default UserTimeline;
