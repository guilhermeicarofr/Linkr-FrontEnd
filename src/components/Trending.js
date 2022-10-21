import { useState, useEffect, useContext } from "react";
import LoginContext from "../contexts/LoginContext";
import { Link } from "react-router-dom";
import { listTrending } from "../services/axios";
import TrendingBox from "../styles/Trending/TrendingBox";

export default function Trendings() {
	const { config } = useContext(LoginContext);
	const [hashtags, setHashtags] = useState([]);
	useEffect(() => {
		const promise = listTrending(config);
		promise.catch((error) => {
			if (error.code === "ERR_NETWORK") {
				return alert("Failed to connect to the server");
			}
			alert(error.response.data);
		});

		promise.then((res) => {			
			setHashtags(res.data);
		});
	}, [config]);
	return (
		<TrendingBox>
			<h1>trending</h1>
			<div></div>
			<span>
				{hashtags.length > 0 ?  (hashtags.map((hash, index) => (
					<Link to={`/hashtag/${hash.id}`} key={index}>
						<h2># {hash.name}</h2>
					</Link>
				))) :
                <h2>No hashtags yet</h2>
                }
			</span>
		</TrendingBox>
	);
}
