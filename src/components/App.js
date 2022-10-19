import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./pages/Sign-up";
import GlobalStyle from "../styles/reset";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
