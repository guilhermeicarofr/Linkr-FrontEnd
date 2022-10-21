import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./pages/Sign-up";
import GlobalStyle from "../styles/reset";
import Timeline from "./pages/Timeline.js";
import SignIn from "./pages/Sign-in";
import UserTimeline from "./pages/UserTimeline";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/user/:id" element={<UserTimeline />} />
      </Routes>
    </BrowserRouter>
  );
}
