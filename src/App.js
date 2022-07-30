import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainPage from "./components/pages/MainPage";
import SignUpPage from "./components/pages/SignUpPage";
import PostPage from "./components/pages/PostPage";
import NotFoundPage from "./components/pages/NotFoundPage";
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
        {/* 포스팅 페이지 */}
        <Route path="/post" element={<PostPage />} />

        {/* 잘못 된 접근 페이지 */}
        {/* 위의 경로를 제외한 모든 주소를 NotFound로 제공 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppBg>
  );
}

const AppBg = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
`;

export default App;
