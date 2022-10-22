import { Link, useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";

import IconDelete from "./Post/Icon-delete";
import IconLike from "./Post/Icon-like";
import IconUpdate from "./Post/icon-update";
import Url from "./Post/Url";
import { PostContainer } from "../styles/Posts/PostContainer";

function Post({ postId, url, description, name, userId, picture, id }) {
  const navigate = useNavigate();

  return (
    <PostContainer>
      <div>
        <img src={picture} alt="user" />
        <IconLike />
      </div>
      <div>
        <span>
          <Link to={`/user/${userId}`}>
            <h2>{name}</h2>
          </Link>
          <div>
            <IconUpdate />
            <IconDelete />
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
