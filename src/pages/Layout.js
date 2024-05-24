import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };
  const goArticles = () => {
    // articles 경로로 이동
    navigate("/articles");
  };
  return (
    <div>
      <header style={{ background: "dodgerblue", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}> ⬅️ 뒤로가기</button>
        <button onClick={goArticles}>🏠 게시글 목록</button>
      </header>
      <main>+
      
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
