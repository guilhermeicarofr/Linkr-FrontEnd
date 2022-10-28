import styled from "styled-components";

export const CommentWrapper = styled.div`
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
`;
