import { listTrending } from "../services/axios";
import TrendingBox from "../styles/Trending/TrendingBox";

export default function Trendings() {	
    const [hashtags, setHashtags] = useState([]);
	useEffect(() => {
		const promise = getMovements();
		promise.catch((error) => {
			if (error.code === "ERR_NETWORK") {
				return alert("Failed to connect to the server");
			}
			alert(error.response.data);
		});

		promise.then((res) => {		
            console.log(res.data);	
			setHashtags(res.data);
		});
	}, []);
	return (
		<TrendingBox>
			<h1>trending</h1>
			<div></div>
			<span>
				{hashtags.map((hash, index) => (
					<h2># {hash}</h2>
				))}
			</span>
		</TrendingBox>
	);
}
