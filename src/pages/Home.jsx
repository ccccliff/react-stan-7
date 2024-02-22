import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      {localStorage.getItem("accessToken") ? (
        <p>안녕하세요, {localStorage.getItem("nickname")}님!</p>
      ) : (
        <p>로그인을 해주세요.</p>
      )}
    </div>
  );
};

export default Home;
