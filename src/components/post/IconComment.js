import { useContext, useEffect, useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import styled from "styled-components";
import LoginContext from "../../contexts/LoginContext";
import { getCountComments } from "../../services/axios";


export default function IconComment({disableComments, setDisableComments, postId}) {
    const [commentNumber, setCommentNumber] = useState(0);
	const { config, refresh } = useContext(LoginContext);

	useEffect(() => {
		getCountComments({config, postId})
			.then((res) => {
				setCommentNumber(res.data.commentCount)
			})
			.catch(() => {
				alert("Error getting comment count")
			})
	}, [config, setCommentNumber, postId, refresh]);

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