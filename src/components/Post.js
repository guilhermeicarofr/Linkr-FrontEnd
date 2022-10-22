import { Link, useNavigate } from "react-router-dom";

import IconDelete from "./Post/Icon-delete";
import IconLike from "./Post/Icon-like";
import IconUpdate from "./Post/icon-update";
import Url from "./Post/Url";
import { PostContainer } from "../styles/Posts/PostContainer";

function Post({ postId, url, description, name, userId, picture, id }) {
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
        <p>{description}</p>
        <Url url={url} />
      </div>
    </PostContainer>
  );
}
export default Post;
