import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Post ({ postId, url, description, name, userId, picture }) {

    return (
        <PostContainer>
            <header>
                <img src={picture} alt='' />
                <h2>{name}</h2>
            </header>
            <p>{description}</p>
            <a href={url.path} target='_blank'>
                <h3>{url.title}</h3>
                <img src={url.image} alt='' />
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
        color: #FFFFFF;
    }
    p {
        color: #B7B7B7;
    }
    a {
        img {
            width: 50px;
            height: 50px;
        }
    }
`;