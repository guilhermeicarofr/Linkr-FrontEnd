import { TbSend } from "react-icons/tb"
import { useContext, useEffect, useState } from "react";
import { createComment, getPostComments } from "../../services/axios";
import LoginContext from "../../contexts/LoginContext";
import Comment from "./Comment";
import { CommentsWrapper } from "../../styles/comments/CommentsWrapper";
import { InputComment } from "../../styles/comments/InputComment";
import { CommentForm } from "../../styles/comments/CommentForm";
import { ContainerPostComments } from "../../styles/comments/ContainerPostComments";


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
                if(error.response.status === 500) {
                    return;
                }
            })
    }, [config, refresh, postId]);

    async function sendComment(e) {
        e.preventDefault()

        setDisableSend(true)

        const body = {
            comment
        }

        try {
            await createComment({body, config, postId})
                setComment("");
                setDisableSend(false);
                setRefresh(!refresh);
        } catch (error) {
                setDisableSend(false);
        }
                
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


