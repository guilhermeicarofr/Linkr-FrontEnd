import styled from "styled-components";

function Post ({ postId, url, description, name, userId, picture }) {




    return (
        <div>
            <header>
                <img href={picture} alt='' />
                <h2>{name}</h2>
            </header>
            <p>{description}</p>
            <div>{url}</div>
        </div>
    );
}

export default Post;


// const PostContainer = styled.div{
    
// }