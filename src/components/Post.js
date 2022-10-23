import { Link, useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { useContext } from "react";
import LoginContext from "../contexts/LoginContext";

import IconDelete from "./Post/Icon-delete";
import IconLike from "./Post/Icon-like";
import IconUpdate from "./Post/icon-update";
import Url from "./Post/Url";
import { PostContainer } from "../styles/Posts/PostContainer";

function Post({ postId, url, description, name, userId, picture, id }) {
  const navigate = useNavigate();
  const { userData } = useContext(LoginContext);
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
        <IconLike />
      </div>
      <div>
        <span>
          <Link to={`/user/${userId}`}>
            <h2>{name}</h2>
          </Link>
          <div>
            {userId === userData.userId ? (
              <>
                <IconUpdate />
                <IconDelete />
              </>
            ) : (
              ""
            )}
          </div>
        </span>
        <p>
          <ReactTagify
            tagStyle={tagStyle}
            tagClicked={(tag) => navigate(`/hashtag/${tag.slice(1)}`)}
          >
            {description}
          </ReactTagify>
        </p>
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
