import "./App.css";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import styled from "styled-components";

function App() {
  return (
    <AppBg>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/*" element={<MainPage />} />
        {/* 회원가입 페이지 */}
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </AppBg>
  );
}

const AppBg = styled.div`
  background-color: #f5f5f5;
`;

export default App;
