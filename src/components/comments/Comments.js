import styled from "styled-components";
import { TbSend } from "react-icons/tb"


export default function Comments({postId}) {
    return(
        <ContainerPostComments>
            <CommentsWrapper>
                <Comment>
                    <img src="https://i.pinimg.com/originals/76/b9/3d/76b93d3a1a0ba058f998b14c1f5547e0.jpg" alt="img"/>
                    <Texts>
                        <h1>djiodijajdojdoaj <span>• following</span></h1>
                        <h2>Adorei esse post, ajuda muito a usar Material UI com React!</h2>
                    </Texts>
                </Comment>
            </CommentsWrapper>
            <InputComment>
                <img src="https://i.pinimg.com/originals/76/b9/3d/76b93d3a1a0ba058f998b14c1f5547e0.jpg" alt="img"/>
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
const Comment = styled.div`
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