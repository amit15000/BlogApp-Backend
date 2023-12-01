//import schema
const LIKE = require("../Models/likes.js");
const POST = require("../Models/Post.js");
exports.likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await POST.findById({ _id: id });
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
    const { user } = req.body;
    const likeItem = await LIKE.create({ post, user });
    if (!likeItem) {
      //item found but not liked
      return res.status(500).json({
        success: false,
        data: item,
        message: "Item not liked",
      });
    }

    //item found and liked
    res.status(200).json({
      success: true,
      Post_data: item,
      Like_data: likeItem,
      message: "Items liked successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      message: "Server internal error",
    });
  }
};
