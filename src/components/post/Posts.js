import { Link, useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { useContext, useState } from "react";
import LoginContext from "../../contexts/LoginContext";
import EditableInput from "./EditableInput"
import IconDelete from "./Icon-delete";
import IconLike from "./Icon-like";
import IconUpdate from "./Icon-update";
import Url from "./Url";
import { PostContainer } from "../../styles/posts/PostContainer";

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
        <IconLike postId={postId} />
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
                <IconDelete postId = {postId} refresh={refresh} setRefresh={setRefresh}/>
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