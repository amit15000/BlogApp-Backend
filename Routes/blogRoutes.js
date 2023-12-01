//Router import
const express = require("express");
const router = express.Router();
const { createPost } = require("../Controllers/createPost");
const { getPosts } = require("../Controllers/getPosts.js");

//router was writeen in function and that function was never been called.
router.post("/createPost", createPost);
router.get("/getPosts", getPosts);
module.exports = router;
