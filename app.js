const express = require("express");

// Express 앱 생성
const app = express();
const port = 3001;

// 기본 라우트
app.get("/", (req, res) => {
  res.send("안녕하세요! 이것은 홈페이지입니다.");
});

// 사용자 정의 라우트
app.get("/about", (req, res) => {
  res.send("회사 소개 페이지입니다.");
});

app.get("/contact", (req, res) => {
  res.send("문의하기 페이지입니다.");
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
