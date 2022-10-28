import styled from "styled-components";

export const CommentForm = styled.form`
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
 `;
