import { useContext, useEffect, useState } from "react";
import LoginContext from "../../contexts/LoginContext";
import { followUser, isFollowing } from "../../services/axios";
import {SmallButton} from "../../styles/commons/SmallButton"

export default function FollowButton ({ followedId }){

    const [disableFollow, setDisableFollow] = useState(false)
    const [following, setFollowing] = useState(false)
    const { config } = useContext(LoginContext);

    useEffect(() => {
        isFollowing({config, followedId})
            .then((res) => {
                setFollowing(res.data.isFollowing);
            })
            .catch((error) => {
                alert("Server Error, please refresh or try again later");
            })

    }, [config, followedId, setFollowing, following]);

    function follow() {
        setDisableFollow(true);

        followUser({config, followedId})
            .then(() => {
                setFollowing(!following);
                setDisableFollow(false);
            })
            .catch(() => {
                alert("Unable to complete requisition, please try again");
                setDisableFollow(false)
            });
    };

    return(
        <>
                <SmallButton
                    following={following} disabled={disableFollow}
                    onClick={() =>  follow() }> 
                    {following ? "Unfollow" : "Follow"}
                </SmallButton>
        </>
    )
}
