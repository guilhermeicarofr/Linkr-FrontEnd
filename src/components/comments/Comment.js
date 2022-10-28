import { useNavigate } from "react-router-dom"
import styled from "styled-components"

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

const CommentWrapper = styled.div`
    height: 65px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #353535;

    span {
        color: #565656;
        cursor: default;
    }

    img {
        height: 39px;
        width: 39px;
        border-radius: 50px;
        object-fit: cover;
        margin-right: 25px;
        cursor: pointer;
    }
`

const Texts = styled.div`
    h1 {
        font-family: Lato;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        color: #F3F3F3;
        margin-bottom: 6px;
        cursor: pointer;
    }
    h2 {
        font-family: Lato;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: #ACACAC;
    }
`