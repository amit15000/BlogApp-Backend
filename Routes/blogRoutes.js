//Router import
const express = require("express");
const router = express.Router();
const { createPost } = require("../Controllers/createPost");

//router was writeen in function and that function was never been called.
router.post("/createPost", createPost);
module.exports = router;
