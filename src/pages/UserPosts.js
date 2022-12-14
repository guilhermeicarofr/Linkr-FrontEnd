import { useState, useEffect, useContext } from "react";
import Post from "../components/post/Posts";
import { getUserPosts } from "../services/axios.js";
import { useNavigate, useParams } from "react-router-dom";
import LoginContext from "../contexts/LoginContext.js";
import { Page } from "../styles/commons/Page.js";
import { Title, UserInfo } from "../styles/commons/Title.js";
import Trending from "../components/trending/Trending.js";
import { Feed, Wrapper } from "../styles/posts/Feed.js";
import Navbar from "../components/commons/Navbar.js";
import FollowButton from "../components/follows/followButton";

export default function UserTimeline() {
  const [userPosts, setUserPosts] = useState({ posts: [] });
  const [message, setMessage] = useState("Loading ...");
  
  const { id } = useParams();
  const { config, refresh, userData} = useContext(LoginContext);
  const navigate = useNavigate();
 

  useEffect(() => {
    getUserPosts(id, config)
      .then((res) => {
        setUserPosts(res.data);
        if (!res.data.posts.length) {
          setMessage("This user has no posts yet");
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("User not found. You'll be redirected to timeline");
          navigate("/timeline");
        }
      });
  }, [id, config, navigate, refresh, userData.userId]);

  return (
    <Page>
      <Navbar />
      <Wrapper>
        <Feed>
          <Title>
            <UserInfo>
            {userPosts.posts.length ? (
              <>
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
              </>
            ) : (<img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoS1h0huK1B606Qb4j_hHmwGH8wPmvKLSKQ&usqp=CAU"
              alt="pic"
            />)}
            </UserInfo>
           <div>
           {Number(id) !== userData.userId ? (
              <FollowButton 
                followedId={id}
              />
            ) : (
              ""
            )}
           
           </div>
            
          </Title>

          {userPosts.posts.length ? (
            userPosts.posts.map((p, index) => (
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
        </Feed>
        <Trending />
      </Wrapper>
    </Page>
  );
}
