import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>환영합니다.<br />아래의 원하는 메뉴를 이용하세요.</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/ev3">EV3 정보</Link>
        </li>
        <li>
          <Link to="/profiles/ev5">EV5 정보</Link>
        </li>
        <li>
          <Link to="/profiles/ev7">EV7 정보</Link>
        </li>
        <li>
          <Link to="/profiles/ev9">EV9 정보</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
