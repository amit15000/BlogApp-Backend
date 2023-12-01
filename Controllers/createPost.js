const Post = require("../Models/Post");
exports.createPost = async (req, res) => {
  try {
    const { user, title, description } = req.body;

    const newPost = new Post({
      user,
      title,
      description,
    });

    //save object
    const savedPost = await newPost.save();
    res.status(200).json({
      Post: savedPost,
      Message: "Inserted Successfully",
    });
    //upadate the post's comment array
  } catch (err) {
    res.status(500).json({
      Error: err.message,
    });
  }
};
