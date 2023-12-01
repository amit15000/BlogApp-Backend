const Post = require("../Models/Post");

exports.createPost = async (req, res) => {
  //import model

  try {
    const { title, description } = req.body;
    const item = await Post.create({ title, description });

    res.status(200).json({
      success: true,
      data: item,
      message: "Item inserted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      message: "Item insertion failed",
    });
  }
};
