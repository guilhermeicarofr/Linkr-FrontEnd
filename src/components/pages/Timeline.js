import { useState, useEffect } from "react";
import styled from "styled-components";

import Post from "../Post.js";
import CreatePost from "../CreatePost.js";
import { getTimeline } from "../../services/axios.js";

function Timeline() {
  
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  
  useEffect(() => {
    getTimeline().then((res)=>{
      console.log(res)
      setPosts(res.data);
    })
    .catch((error) => {
      console.log(error)
    });
  },[refresh])
  
  return (
    <Page>
      <CreatePost refresh={refresh} setRefresh={setRefresh} />
      {posts.map((p, index) => (
        <Post
          key={index}
          postId={p.postId}
          url={p.url}
          description={p.description}
          name={p.name}
          userId={p.userId}
          picture={p.picture}
        />
      ))}
    </Page>
  );
}

export default Timeline;

const Page = styled.div`
  background-color: #333333;
  padding-top: 20px;
`;
