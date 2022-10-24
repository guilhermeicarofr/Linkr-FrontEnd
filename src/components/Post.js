import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import LoginContext from "../contexts/LoginContext";
import { ReactTagify } from "react-tagify";
import IconDelete from "./Post/Icon-delete";
import IconLike from "./Post/Icon-like";
import IconUpdate from "./Post/icon-update";
import Url from "./Post/Url";
import { PostContainer } from "../styles/Posts/PostContainer";
import EditableInput from "./Post/EditableInput";

function Post({ postId, url, description, name, userId, picture, refresh, setRefresh}) {
  
  const { userData } = useContext(LoginContext);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  return (
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
        <IconLike postId = {postId}/>
      </div>
      <div>
        <span>
          <Link to={`/user/${userId}`}>
            <h2>{name}</h2>
          </Link>
          <div>
            {userId === userData.userId ? (
              <>
                <IconDelete postId = {postId} refresh={refresh} setRefresh={setRefresh}/>
                <IconUpdate isEditing={isEditing} setIsEditing={setIsEditing} />
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
            refresh={refresh}
            setRefresh={setRefresh}
          />
        )}
        <Url url={url} />
      </div>
    </PostContainer>
  );
}
export default Post;

const tagStyle = {
  color: "#FFFFFF",
  margin: "0px 2px",
  cursor: "pointer",
};
