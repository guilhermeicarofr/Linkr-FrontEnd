import { useContext, useEffect, useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import LoginContext from "../../contexts/LoginContext";
import { getCountComments } from "../../services/axios";
import { CommnetIconStyle } from "../../styles/comments/CommnetIconStyle";


export default function IconComment({disableComments, setDisableComments, postId}) {
    const [commentNumber, setCommentNumber] = useState(0);
	const { config, refresh } = useContext(LoginContext);

	useEffect(() => {
		getCountComments({config, postId})
			.then((res) => {
				setCommentNumber(res.data.commentCount)
			})
	}, [config, setCommentNumber, postId, refresh]);

    return (
        <CommnetIconStyle>
            <AiOutlineComment onClick={() => setDisableComments(!disableComments) }/>
            <p>{commentNumber}</p>
			<p>comments</p>
        </CommnetIconStyle>
    );
};

