import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./pages/Sign-up";
import GlobalStyle from "../styles/reset";
import Timeline from "./pages/Timeline.js";
import SignIn from "./pages/Sign-in";
import UserTimeline from "./pages/UserTimeline";
import Hashtag from "./pages/Hashtag";
import LoginContext from "../contexts/LoginContext";
import { useState } from "react";
import PrivatePage from "./commons/PrivatePage";
import { getUser } from "../services/localstorage";

export default function App() {
  const [userData, setUserData] = useState(getUser());
  const [config, setConfig] = useState(null);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <LoginContext.Provider
        value={{
          userData,
          setUserData,
          config,
          setConfig,
        }}
      >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={
            <PrivatePage>
                <Timeline />
            </PrivatePage>
          } />
          <Route path="/hashtag/:hashtag" element={
            <PrivatePage>
               <Hashtag />
          </PrivatePage>
          } />
          <Route path="/user/:id" element={
            <PrivatePage>
               <UserTimeline />
            </PrivatePage>
          } />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}
