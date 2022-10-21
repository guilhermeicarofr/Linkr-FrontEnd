import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactTagify } from "react-tagify";

import IconDelete from "./Post/Icon-delete";
import IconLike from "./Post/Icon-like";
import IconUpdate from "./Post/icon-update";
import Url from "./Post/Url";

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
          <ReactTagify tagStyle={tagStyle} tagClicked={(tag) => navigate(`/hashtag/${tag.slice(1)}`)}>
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
  color: '#FFFFFF',
  margin: '0px 2px',
  cursor: 'pointer'
}

const PostContainer = styled.div`
  max-width: 611px;
  width: 100%;
  min-height: 276px;
  background-color: #171717;
  border-radius: 16px;
  margin-bottom: 16px;
  display: flex;
  padding: 18px;
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-bottom: 19px;
      object-fit: cover;
    }
  }
  > div:last-child {
    margin-left: 18px;
    width: 90%;
    span {
      display: flex;
      justify-content: space-between;
    }
    h2 {
      color: #ffffff;
      font-size: 19px;
      font-family: "Lato", sans-serif;
    }
    > p > span {
      color: #b7b7b7;
      font-size: 17px;
      font-family: "Lato", sans-serif;
      margin: 10px 0;
    }
  }
  @media (max-width: 937px) {
    min-height: 232px;
    > div:first-child {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
