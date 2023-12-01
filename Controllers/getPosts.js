const Post = require("../Models/Post");

exports.getPosts = async (req, res) => {
  try {
    const item = await Post.find({}).populate(["comments", "likes"]);
    if (!item) {
      return res.status(404).json({
        success: false,
        data: item,
        message: "No item present",
      });
    }
    res.status(200).json({
      success: true,
      data: item,
      message: "Items fetched successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      message: "Server internal error",
    });
  }
};
