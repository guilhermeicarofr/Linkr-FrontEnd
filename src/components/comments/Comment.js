import { useNavigate } from "react-router-dom"
import { CommentWrapper } from "../../styles/comments/CommentWrapper";
import { Texts } from "../../styles/comments/Texts";

export default function Comment({comment, isFollowing, name, picture, userId, authorId}) {
    const navigate = useNavigate();

    function navigateUser(userId) {
        navigate(`/user/${userId}`)
    }

    return (
        <CommentWrapper>
            <img src={picture} alt="img" onClick={() => navigateUser(userId)}/>
            <Texts>
                <h1 onClick={() => navigateUser(userId)}>{name}
                    <span>
                        {userId === authorId ? 
                            `    •  post's author` 
                            : 
                            isFollowing ? "    •  following" : ""
                        }
                    </span>
                </h1>
                <h2>{comment}</h2>
            </Texts>
        </CommentWrapper>

    )
}

