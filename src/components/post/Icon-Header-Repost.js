import { useContext, useEffect, useState } from "react";
import { BiRepost } from "react-icons/bi";
import styled from "styled-components";
import LoginContext from "../../contexts/LoginContext.js";

import { sharePost, unsharePost, countShares } from "../../services/axios.js";

function IconRepost({ postId }) {

  const { config, refresh, setRefresh } = useContext(LoginContext);
  const [ shares, setShares ] = useState(0);

  useEffect(() => {
    countShares({config, postId}).then((res) => {
      setShares(res.data.shareCount);
    })
    .catch((error) => {
      alert(error);
    });
  }, [refresh, config, postId]);

  function handleShare() {
    if (window.confirm("Do you want to re-post this link?")) {
      sharePost({ config, postId }).then((res) => {
        setRefresh(!refresh);
      })
      .catch((error) => {
        alert(error);
      });
    }
  }

  return (
    <RepostIconStyle>
      <BiRepost onClick={handleShare} />
      <p>{shares}</p>
      <p>re-posts</p>
    </RepostIconStyle>
  );
}

function ShareHeader({ shareId, shareUserId, shareUserName }) {

  const { userData, config, refresh, setRefresh } = useContext(LoginContext);

  function handleUnshare() {
    if (shareUserId === userData.userId && shareId !== null) {
      if (window.confirm("Do you want to delete your re-post?")) {
        unsharePost({ config, shareId }).then((res) => {
          setRefresh(!refresh);
        })
        .catch((error) => {
          alert(error);
        });
      }
    }
  }

  return (
    <ShareHeaderStyle onClick={handleUnshare}>
      <BiRepost size="20px" />
      Re-posted by {(shareUserId === userData?.userId) ? "you" : shareUserName}
    </ShareHeaderStyle>
  );
}

export { ShareHeader, IconRepost }



export const RepostIconStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 11px;
    margin-top: 4px;
  }
`;

const ShareHeaderStyle = styled.header`
  height: 53px;
  width: 611px;
  z-index: 0;
  background-color: #1E1E1E;
  padding: 0px 13px 20px 13px;
  margin-bottom: -20px;
  border-radius: 16px 16px 0px 0px;
  color: #FFFFFF;
  font-size: 11px;
  display: flex;
  align-items: center;

  @media (max-width: 937px) {
    width: 100%;
    border-radius: 0;
    min-height: 53px;
  }
`;