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
        {/* 분기점으로서의 App.js // 0. 자기 자신은 index로 path 표현 가능 */}
        {/* 와일드카드 *를 이용해 다양한 페이지 작성 가능 */}
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
