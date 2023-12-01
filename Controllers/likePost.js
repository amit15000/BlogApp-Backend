const LIKES = require("../Models/likes");
const Post = require("../Models/Post");
exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const newLike = new LIKES({
      post,
      user,
    });

    const saveLike = await newLike.save();

    //also update that post

    const updatedPost = await Post.findByIdAndUpdate(
      { _id: post },
      { $push: { likes: saveLike._id } },
      { new: true }
    ).populate("likes");

    res.json({
      success: true,
      updatedPost: updatedPost,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      message: "Server internal error",
    });
  }
};
