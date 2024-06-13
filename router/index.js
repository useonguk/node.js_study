const express = require("express");
const asyncify = require("express-asyncify").default;
const router = asyncify(express.Router());
const test = require("./test");

router.use("/test", test);

module.exports = router;