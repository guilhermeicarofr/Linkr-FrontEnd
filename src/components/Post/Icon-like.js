import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { TbHeart } from "react-icons/tb";
import ReactTooltip from "react-tooltip";
import LoginContext from "../../contexts/LoginContext";
import { getLikes, toggleLike } from "../../services/axios";
import { useContext, useEffect, useState } from "react";

export default function IconLike(postId) {
	const { userData, config } = useContext(LoginContext);
	const [likes, setLikes] = useState("");
	const [isLiked, setIsLiked] = useState(false);
	const [likesNumber, setLikesNumber] = useState(0);

	useEffect(() => {
		getLikes(postId.postId, config)
			.then((res) => {
				const isUserLiked = res.data.filter(
					(user) => user.name === userData.name
				);
				const usersLikes = res.data.filter(
					(user) => user.name !== userData.name
				);

				if (isUserLiked.length !== 0) {
					setIsLiked(true);
					usersLikes.unshift({ name: "You" });
				}
				setLikesNumber(usersLikes.length);
				switch (usersLikes.length) {
					case 0:						
						setLikes("Nobody liked");
						break;
					case 1:						
						setLikes(usersLikes[0].name + " liked");
						break;
					case 2:						
						setLikes(
							usersLikes[0].name + " and " + usersLikes[1].name + " liked"
						);
						break;
					case 3:
						setLikes(
							usersLikes[0].name +
								", " +
								usersLikes[1].name +
								" and " +
								usersLikes[2].name
						);
						break;
					default:
						setLikes(
							usersLikes[0].name +
								", " +
								usersLikes[1].name +
								" and another " +
								(usersLikes.length - 2) +
								" people"
						);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, [postId, config, userData, isLiked]);

	function likeClick() {
		toggleLike(postId.postId, config)
			.then((res) => {
				setIsLiked(!isLiked);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<LikesStyle>
			{isLiked ? (
				<AiFillHeart color="red" onClick={() => likeClick()} />
			) : (
				<TbHeart onClick={() => likeClick()} />
			)}
			<p data-tip={likes}>
				{likesNumber} likes
			</p>

			<ReactTooltip place="bottom" effect="solid" />
		</LikesStyle>
	);
}

const LikesStyle = styled.div`
	font-size: 20px;
	color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		font-size: 11px;
		margin-top: 4px;
	}
`;
