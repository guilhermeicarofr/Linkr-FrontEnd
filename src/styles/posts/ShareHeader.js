import styled from "styled-components";

const ShareHeader = styled.header`
    height: 53px;
    width: 611px;
    z-index: 0;
    background-color: #1E1E1E;
    padding: 0px 13px 20px 13px;
    margin-bottom: -20px;
    border-radius: 16px 16px 0px 0px;
    color: #FFFFFF;
    font-size: 11px;
    display: flex;
    align-items: center;

    @media (max-width: 937px) {
        width: 100%;
        border-radius: 0;
        min-height: 53px;
    }
`;

export { ShareHeader };