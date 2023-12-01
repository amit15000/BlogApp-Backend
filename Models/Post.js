const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LIKES",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "COMMENT",
    },
  ],
});
module.exports = mongoose.model("Post", postSchema);
