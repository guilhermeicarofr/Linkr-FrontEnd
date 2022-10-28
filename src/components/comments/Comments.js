import styled from "styled-components";
import { TbSend } from "react-icons/tb"
import { useContext, useEffect, useState } from "react";
import { getPostComments } from "../../services/axios";
import LoginContext from "../../contexts/LoginContext";
import Comment from "./Comment";


export default function Comments({picture, postId}) {
    const { config, userData } = useContext(LoginContext);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getPostComments({config, postId})
            .then((res) => {
                setComments(res.data);
            })
            .catch((error) => {
                if(error.response.status === 404) {
                    alert("Post Not Found")
                }
                if(error.response.status === 401) {
                    alert("Unauthorized")   
                }
                if(error.response.status === 500) {
                    alert("Error")
                }
            })
    }, [config, postId]);


    return(
        <ContainerPostComments>
            <CommentsWrapper>
                {comments.length > 0 ? comments.map((value, index) => (
                    <Comment 
                        key={index}
                        comment={value.comment}
                        picture={value.picture}
                        isFollowing={value.isFollowing}
                        name={value.name}
                        postId={value.postId}
                        userId={value.userId}
                    />
                )) 
                : 
                    <></>
                }
            </CommentsWrapper>
            <InputComment>
                <img src={userData.picture} alt="img"/>
                <CommentForm>
                   <input
                        placeholder="write a comment..."
                   />
                    <button>
                    <TbSend
                        style={{
                            color: "#F3F3F3",
                            cursor: "pointer",
                          }}
                        size={15}
                    />
                    </button>
                </CommentForm>
            </InputComment>
        </ContainerPostComments>
    );
} 

const ContainerPostComments = styled.div`
    min-height: 110px;
    padding: 30px 20px 0px 20px;
    background-color: #1E1E1E;
    width: 611px;
    border-radius: 16px;
    margin-top: -45px;
    margin-bottom: 16px;  
`
const CommentsWrapper = styled.div`
    max-height: 195px;
    height: auto;
    width: 100%;
    overflow-y: scroll;
`
const InputComment = styled.div`
    display: flex;
    align-items: center;
    height: 78px;

    img {
        height: 39px;
        width: 39px;
        border-radius: 50px;
        object-fit: cover;
        margin-right: 25px;
    }
`
const CommentForm = styled.form`
    display: flex;
    width: 100%;
    background-color: #252525;
    border-radius: 8px;

    input {
        height: 39px;
        width: 90%;
        background-color: #252525;
        padding-left: 18px;
        color: #ACACAC;
    }

    input::placeholder {
       color: #575757;
       font-family: Lato;
        font-size: 14px;
        font-style: italic;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0.05em;
    }

    button {
        background-color: #252525;
        border: none;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10%;
        border-radius: 8px;
    }
 `