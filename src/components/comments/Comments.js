import styled from "styled-components";
import { TbSend } from "react-icons/tb"
import { useContext, useEffect, useState } from "react";
import { createComment, getPostComments } from "../../services/axios";
import LoginContext from "../../contexts/LoginContext";
import Comment from "./Comment";


export default function Comments({postId, disableComments, userId}) {
    const { config, userData, setRefresh, refresh } = useContext(LoginContext);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("")
    const [disableSend, setDisableSend] = useState(false);

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
    }, [config, refresh, postId]);

    function sendComment(e) {
        e.preventDefault()

        setDisableSend(true)

        const body = {
            comment
        }

        createComment({body, config, postId})
            .then((res) => {
                setRefresh(!refresh);
                setComment("");
                setDisableSend(false)
            })
            .catch((error) => {
                console.log(error.status);
                setDisableSend(false);
            })
    }


    return(
        <ContainerPostComments disabled={disableComments}>
            <CommentsWrapper>
                {comments.length > 0 ? comments.map((value, index) => (
                    <Comment 
                        key={index}
                        comment={value.comment}
                        picture={value.picture}
                        isFollowing={value.isFollowing}
                        name={value.name}
                        userId={value.userId}
                        authorId={userId}
                    />
                )) 
                : 
                    <></>
                }
            </CommentsWrapper>
            <InputComment>
                <img src={userData.picture} alt="img"/>
                <CommentForm onSubmit={sendComment}>
                   <input
                        placeholder="write a comment..."
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        disabled={disableSend}
                        type="textl"
                        maxLength="250"
                        required
                   />
                    <button disabled={disableSend}>
                    <TbSend
                        style={{
                            color: "#F3F3F3",
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
    display: ${(props) => props.disabled ? "normal" : "none"};

    @media (max-width: 937px) {
        width: 100%;
        border-radius: 0;

    }
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
        cursor: "pointer";
    }
 `