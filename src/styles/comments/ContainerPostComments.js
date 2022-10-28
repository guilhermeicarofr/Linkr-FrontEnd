import styled from "styled-components";

export const ContainerPostComments = styled.div`
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
`;
