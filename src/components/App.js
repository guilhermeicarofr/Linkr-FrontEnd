import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "../pages/Sign-up";
import GlobalStyle from "../styles/reset";
import Timeline from "../pages/Timeline";
import SignIn from "../pages/Sign-in";
import UserTimeline from "../pages/UserPosts";
import Hashtag from "../pages/Hashtag";
import LoginContext from "../contexts/LoginContext";
import { useState } from "react";
import { getUser } from "../utils/localstorage";
import PrivatePage from "../decorator/PrivatePage";

export default function App() {
  const [userData, setUserData] = useState(getUser());
  const [config, setConfig] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const PrivateTimeLine = <PrivatePage> <Timeline/> </PrivatePage>
  const PrivateHashtag =  <PrivatePage> <Hashtag /> </PrivatePage>
  const PrivateUserPosts = <PrivatePage>  <UserTimeline /> </PrivatePage>
  
  return (
    <BrowserRouter>
      <GlobalStyle />
      <LoginContext.Provider
        value={{
          userData,
          setUserData,
          config,
          setConfig,
          refresh,
          setRefresh
        }}
      >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={PrivateTimeLine} />
          <Route path="/hashtag/:hashtag" element={PrivateHashtag} />
          <Route path="/user/:id" element={PrivateUserPosts} />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}
