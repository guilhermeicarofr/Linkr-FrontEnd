import { useContext, useState } from "react";
import LoginContext from "../../contexts/LoginContext";
import { followUser } from "../../services/axios";
import {SmallButton} from "../../styles/commons/SmallButton"

export default function FollowButton ({ followedId }){

    const [disableFollow, setDisableFollow] = useState(false)
    const [following, setFollowing] = useState(false)
    const { config } = useContext(LoginContext);

    function follow() {
        setDisableFollow(true);

        followUser({config, followedId})
            .then((res) => {
                setFollowing(!following);
                setDisableFollow(false);
            })
            .catch((error) => {
                console.log(error)
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