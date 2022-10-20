import { useState, useEffect } from "react";
import styled from "styled-components";

import Post from "../Post.js";
import CreatePost from "../CreatePost.js";
import { getTimeline } from "../../services/axios.js";

function Timeline() {
  
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [message, setMessage] = useState('Loading');
  
  useEffect(() => {
    getTimeline().then((res)=>{
      setPosts(res.data);
      if(!res.data.length) {
        setMessage('There are no posts yet');
      }
    })
    .catch((error) => {
      console.log(error)
      setMessage('An error occured while trying to fetch the posts, please refresh the page');
    });
  },[refresh])
  
  return (
    <Page>
      <CreatePost refresh={refresh} setRefresh={setRefresh} />


      {(posts.length)?
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
    :
      <p>{message}</p>
    }
    </Page>
  );
}

export default Timeline;

const Page = styled.div`
  background-color: #333333;
  padding-top: 20px;
`;
