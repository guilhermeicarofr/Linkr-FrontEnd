import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Post({ postId, url, description, name, userId, picture }) {
  return (
    <PostContainer>
      <header>
        <img src={picture} alt="" />
        <Link to={`/user/${userId}`}>
          <h2>{name}</h2>
        </Link>
      </header>
      <p>{description}</p>
      <a href={url.path} target="_blank">
        <h3>{url.title}</h3>
        <img src={url.image} alt="" />
        <p>{url.description}</p>
        <p>{url.path}</p>
      </a>
    </PostContainer>
  );
}
export default Post;

const PostContainer = styled.div`
  width: 611px;
  height: 276px;
  background-color: #171717;
  border-radius: 16px;
  margin-bottom: 16px;
  h2 {
    color: #ffffff;
  }
  p {
    color: #b7b7b7;
  }
  a {
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
