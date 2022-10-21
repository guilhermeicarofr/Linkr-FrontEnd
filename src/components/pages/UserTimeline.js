import { useState, useEffect } from "react";
import styled from "styled-components";

import Post from "../Post.js";
import { getUserPosts } from "../../services/axios.js";
import { useParams } from "react-router-dom";

function UserTimeline() {
  const [posts, setPosts] = useState([]);

  const [message, setMessage] = useState("Loading");
  const { id } = useParams();

  useEffect(() => {
    getUserPosts(id)
      .then((res) => {
        setPosts(res.data.posts);
        console.log(res.data.posts);
      })
      .catch((error) => {
        console.log(error);

        if (error.response.status === 404) {
          setMessage("Nenhum post");
        }
      });
  }, [id]);

  return (
    <Page>
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
    </Page>
  );
}

export default UserTimeline;

const Page = styled.div`
  background-color: #333333;
  padding-top: 20px;
`;
