import { useContext, useState } from "react";

import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { IoTrash } from "react-icons/io5";

import { deletePost } from "../../services/axios";

import {
  ButtonDeleteStyle,
  DeleteScreenStyle,
} from "../../styles/posts/DeletePost";
import LoginContext from "../../contexts/LoginContext";

const IconDeleteStyle = styled(IoTrash)`
  color: white;
  font-size: 19px;
  margin-left: 9px;
  cursor: pointer;
`;

export default function IconDelete({ postId }) {
  const [showDeleteScreen, setShowDeleteScreen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const { config, refresh, setRefresh } = useContext(LoginContext);

  function handleDelete() {
    setShowLoading(true);
    deletePost(postId, config)
      .then((res) => {
        setShowLoading(false);
        setShowDeleteScreen(false);
        setRefresh(!refresh);
      })
      .catch((error) => {
        alert("Failed to delete post");
        setShowLoading(false);
        setShowDeleteScreen(false);
      });
  }

  return (
    <>
      <IconDeleteStyle
        onClick={() => {
          setShowDeleteScreen(true);
          window.scrollTo(0, 0);
          window.onscroll = function () {
            window.scrollTo(0, 0);
          };
        }}
      />
      <DeleteScreenStyle showScreen={showDeleteScreen}>
        <div>
          <h1>Are you sure want to delete this post?</h1>
          <div>
            {showLoading ? (
              <ThreeDots color="white" height="13px" />
            ) : (
              <>
                <ButtonDeleteStyle
                  isBlue={false}
                  onClick={() => {
                    setShowDeleteScreen(false);
                    window.onscroll = null;
                  }}
                >
                  No, go back
                </ButtonDeleteStyle>
                <ButtonDeleteStyle
                  isBlue={true}
                  onClick={() => {
                    handleDelete();
                    window.onscroll = null;
                  }}
                >
                  Yes, delete it
                </ButtonDeleteStyle>
              </>
            )}
          </div>
        </div>
      </DeleteScreenStyle>
    </>
  );
}
