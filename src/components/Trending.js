import { useState, useEffect, useContext } from "react";
import LoginContext from "../contexts/LoginContext";
import { Link } from "react-router-dom";
import { listTrending } from "../services/axios";
import TrendingBox from "../styles/Trending/TrendingBox";

export default function Trending({ refresh }) {
  const { config } = useContext(LoginContext);
  const [hashtags, setHashtags] = useState([]);
  useEffect(() => {
    const promise = listTrending(config);
    promise.catch((error) => {
      if (error.response.status === 500) {
        return alert("Failed to connect to the server");
      }
      alert(error.response.data);
    });

    promise.then((res) => {
      setHashtags(res.data);
    });
  }, [refresh, hashtags.length]);

  return (
    <TrendingBox>
      <h1>trending</h1>
      <div></div>
      <span>
        {hashtags.length > 0 ? (
          hashtags.map((hash, index) => (
            <Link to={`/hashtag/${hash.name}`} key={index}>
              <h2># {hash.name}</h2>
            </Link>
          ))
        ) : (
          <h2>No hashtags yet</h2>
        )}
      </span>
    </TrendingBox>
  );
}
