import { Link, useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { useContext, useState } from "react";
import { BiRepost } from "react-icons/bi";
import LoginContext from "../../contexts/LoginContext";
import EditableInput from "./EditableInput";
import IconDelete from "./Icon-delete";
import IconLike from "./Icon-like";
import IconUpdate from "./Icon-update";
import Url from "./Url";
import { PostContainer } from "../../styles/posts/PostContainer";
import IconComment from "./IconComment";
import { ShareHeader } from "../../styles/posts/ShareHeader.js";
import styled from "styled-components";
import Comments from "../comments/Comments";

function Post({ postId, url, description, name, userId, picture, shareId, shareUserId, shareUserName }) {
  
  const { userData } = useContext(LoginContext);
  const [isEditing, setIsEditing] = useState(false);
  const [disableComments, setDisableComments] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    {(shareId)?
      <ShareHeader>
        <BiRepost size="20px"/>
        Re-posted by {(shareUserId===userData?.userId)?"you":shareUserName}
      </ShareHeader>
    :""}
    <PostContainer>
      <div>
        <img
          src={picture}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoS1h0huK1B606Qb4j_hHmwGH8wPmvKLSKQ&usqp=CAU";
          }}
          alt="user"
        />
        <Icons>
          <IconLike postId={postId} />
          <IconComment 
            setDisableComments={setDisableComments}
            disableComments={disableComments}
          />
        </Icons>
      </div>
      <div>
        <span>
          <Link to={`/user/${userId}`}>
            <h2>{name}</h2>
          </Link>
          <div>
            {userId === userData.userId ? (
              <>
                <IconUpdate isEditing={isEditing} setIsEditing={setIsEditing} />
                <IconDelete postId={postId} />
              </>
            ) : (
              ""
            )}
          </div>
        </span>
        {!isEditing ? (
          <p>
            <ReactTagify
              tagStyle={tagStyle}
              tagClicked={(tag) => navigate(`/hashtag/${tag.slice(1)}`)}
            >
              {description}
            </ReactTagify>
          </p>
        ) : (
          <EditableInput
            postId={postId}
            description={description}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        )}
        <Url url={url} />
      </div>
    </PostContainer>
    <Comments 
      disableComments={disableComments}
      postId={postId}
    />
    </>
  );
}
export default Post;

const tagStyle = {
  color: "#FFFFFF",
  margin: "0px 2px",
  cursor: "pointer",
};

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`
