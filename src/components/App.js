import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./pages/Sign-up";
import GlobalStyle from "../styles/reset";
import Timeline from './pages/Timeline.js'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}
