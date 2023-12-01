const Post = require("../Models/Post");
const COMMENT = require("../Models/Comment");

exports.createComment = async (req, res) => {
  try {
    const { post, user, comment } = req.body;

    const newComment = new COMMENT({
      post,
      user,
      comment,
    });

    //save comment
    const saveComment = await newComment.save();

    //update the array of the Post's comment

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: saveComment._id },
      },
      { new: true }
    ).populate("comments");

    if (!updatedPost) {
      return res.json({
        message: "Item not available with this ID",
      });
    }
    res.status(200).json({
      UpdatedPost: updatedPost,
      message: "Commnet done Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      message: "Server internal error",
    });
  }
};
