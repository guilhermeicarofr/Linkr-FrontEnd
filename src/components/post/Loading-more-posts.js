import styled from "styled-components";
import { useState, useContext } from "react";

import { GrPowerCycle } from "react-icons/gr";
import LoginContext from "../../contexts/LoginContext";
import { getTimeline } from "../../services/axios";
import useInterval from "../../hooks/useInterval";

function differentPosts(posts, newPosts) {
  const result = [];
  const hashTable = {};
  for (let i = 0; i < posts.length; i++) {
    hashTable[posts[i].postId] = true;
  }
  for (let i = 0; i < newPosts.length; i++) {
    if (hashTable[newPosts[i].postId]) {
      continue;
    }
    result.push(newPosts[i]);
  }
  return result;
}

export default function LoadingMorePosts({ posts, setPosts }) {
  const { config, refresh, setRefresh } = useContext(LoginContext);
  const [showButton, setShowButton] = useState(false);
  const [newPosts, setNewPosts] = useState([]);
  useInterval(() => {
    getTimeline(config)
      .then((res) => {
        if (differentPosts(posts, res.data).length !== 0) {
          setNewPosts(differentPosts(posts, res.data));
          setShowButton(true);
        }
      })
      .catch((error) => alert("It's not possible loading more posts"));
  }, 15000);
  return (
    <ButtonMorePosts
      haveNewPosts={showButton}
      onClick={() => {
        setRefresh(!refresh);
        setShowButton(false);
      }}
    >
      {newPosts.length} new posts, load more!
      <LoadingIcon />
    </ButtonMorePosts>
  );
}

const LoadingIcon = styled(GrPowerCycle)`
  font-size: 16px;
  color: #ffffff;
  margin-left: 14px;
`;
const ButtonMorePosts = styled.button`
  height: 61px;
  width: 100%;
  background-color: #1877f2;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 17px;
  border: none;
  color: white;
  font-size: 16px;
  display: ${(props) => (props.haveNewPosts ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;
