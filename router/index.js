// Express 모듈과 express-asyncify 모듈을 불러옵니다.
const express = require("express");
const asyncify = require("express-asyncify").default;

// 비동기 처리를 위해 express-asyncify로 Express 라우터를 감싸서 생성합니다.
const router = asyncify(express.Router());

// "./test" 모듈을 불러옵니다.
const test = require("./test");

// "/test" 경로로 들어오는 요청을 불러온 test 라우터로 처리합니다.
router.use("/test", test);

// 설정된 라우터를 모듈로 내보내서 다른 파일에서 사용할 수 있게 합니다.
module.exports = router;
