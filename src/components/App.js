import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./pages/Sign-up";
import GlobalStyle from "../styles/reset";
import Timeline from './pages/Timeline.js'
import SignIn from "./pages/Sign-in";
import Hashtag from "./pages/Hashtag"
import LoginContext from "../contexts/LoginContext";
import { useState } from "react";

export default function App() {
  const [userData, setUserData] = useState(
    localStorage.getItem("linkr")
      ? JSON.parse(localStorage.getItem("linkr"))
      : null
  );
  const [config, setConfig] = useState(
    localStorage.getItem("linkr")
      ? { headers: { Authorization: `Bearer ${userData.token}`}}
      : null
  );


  return (
    <BrowserRouter>
      <GlobalStyle />
      <LoginContext.Provider value={{
        userData,
        setUserData,
        config,
        setConfig
      }}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/hashtag/:hashtagId" element={<Hashtag />} />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}
