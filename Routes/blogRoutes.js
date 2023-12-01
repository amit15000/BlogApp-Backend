//Router import
const express = require("express");
const router = express.Router();
const { createPost } = require("../Controllers/createPost");
const { getPosts } = require("../Controllers/getPosts.js");
const { likePost } = require("../Controllers/likePost.js");
const { createComment } = require("../Controllers/creatComment.js");

//router was writeen in function and that function was never been called.
router.post("/createPost", createPost);
// router.get("/getPosts", getPosts);
router.post("/likes/like", likePost);
router.post("/comments/comment", createComment);
module.exports = router;
