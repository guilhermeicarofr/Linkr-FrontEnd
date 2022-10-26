import { useState } from "react";
import {SmallButton} from "../../styles/commons/SmallButton"
export default function FollowButton (){

    const [disableFollow, setDisableFollow] = useState(false)
    const [following, setFollowing] = useState(false)

    return(
        <>
                <SmallButton
                following={following} disabled={disableFollow}> 
                {following ? "Following" : "Follow"}
                </SmallButton>
              </>
    )
}