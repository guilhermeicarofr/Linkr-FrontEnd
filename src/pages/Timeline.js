import { useState, useEffect, useContext } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import Navbar from "../components/commons/Navbar";

import LoginContext from "../contexts/LoginContext";
import { countProfilesFollowed, getTimeline } from "../services/axios";
import { Page } from "../styles/commons/Page";
import { Title } from "../styles/commons/Title";
import { Feed, Wrapper } from "../styles/posts/Feed";
import CreatePost from "../components/post/CreatePost";
import Trending from "../components/trending/Trending";
import Post from "../components/post/Posts";
import LoadingMorePosts from "../components/post/Loading-more-posts";
import styled from "styled-components";

function Timeline() {
  const { config, refresh } = useContext(LoginContext);
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("Loading ...");
  const [morePosts, setMorePosts] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getTimeline(config)
      .then((res) => {
        setPosts(res.data);
        if (!res.data.length) {
          countProfilesFollowed(config).then((res) => {
            if(res.data?.count < 1) {
              setMessage("You don't follow anyone yet. Search for new friends!");
            } else {
              setMessage("No posts found from your friends");
            }
          })        
        }
      })
      .catch((error) => {
        setMessage(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
      });
  }, [refresh, config]);
  
  
  async function newPosts() {
  
    try {
      const recentPosts = (await getTimeline(config, count)).data;
     

      setPosts([...posts, ...recentPosts]);
        if (recentPosts.length === 0) {
          setMorePosts(false);
      }
      setCount(count + 2);
    } catch (error) {
     
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    }
   
   
}


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
            <InfiniteScroll
    pageStart={0}
    loadMore={newPosts}
    hasMore={morePosts}
    loader={<Loading key={0}>Loading ...</Loading>}
>
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
                  shareId={p.shareId}
                  shareUserId={p.shareUserId}
                  shareUserName={p.shareUserName}
                />
              ))
            ) : (
              <p>{message}</p>
            )}
</InfiniteScroll>
            
          </Feed>
          <Trending />
        </Wrapper>
      </Page>
    </>
  );
}

export default Timeline;


const Loading = styled.div `
color: red`