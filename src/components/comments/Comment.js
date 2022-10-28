import { useContext } from "react"
import styled from "styled-components"
import LoginContext from "../../contexts/LoginContext"

export default function Comment({comment, isFollowing, name, picture, postId, userId}) {
    const { userData } = useContext(LoginContext);

    return (
        <CommentWrapper>
            <img src={picture} alt="img"/>
            <Texts>
                <h1>{name}
                    <span>
                        {userId === userData.userId ? 
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
    }

    img {
        height: 39px;
        width: 39px;
        border-radius: 50px;
        object-fit: cover;
        margin-right: 25px;
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
    }
    h2 {
        font-family: Lato;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: #ACACAC;
    }
`