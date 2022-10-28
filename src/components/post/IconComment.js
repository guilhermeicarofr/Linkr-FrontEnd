import { useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import styled from "styled-components";


export default function IconComment({disableComments, setDisableComments}) {
    const [commentNumber, setCommentNumber] = useState(0);

    return (
        <CommnetStyle>
            <AiOutlineComment onClick={() => setDisableComments(!disableComments) }/>
            <p>{commentNumber}</p>
			<p>comments</p>
        </CommnetStyle>
    );
};

const CommnetStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    font-size: 20px;
	color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	p {
		font-size: 11px;
		margin-top: 4px;
	}
`;