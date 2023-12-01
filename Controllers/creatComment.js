const COMMENT = require("../Models/Comment");
const Post = require("../Models/Post");

exports.createComment = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Post.findById({ _id: id });
    if (!item) {
      //means item not found
      return res.status(404).json({
        success: false,
        data: item,
        message: "Item not found with this ID",
      });
    }

    //item found
    const post = id;
    const { user, comment } = req.body;
    const commentItem = await COMMENT.create({ post, user, comment });
    if (!commentItem) {
      //item found but not liked
      return res.status(500).json({
        success: false,
        data: item,
        message: "Failed to comment",
      });
    }

    //item found and commented
    res.status(200).json({
      success: true,
      Post_data: item,
      Comment_data: commentItem,
      message: "Post commented successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      message: "Server internal error",
    });
  }
};
