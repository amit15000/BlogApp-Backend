const { default: mongoose } = require("mongoose");

//create schema for comment
const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", //reference to the post model
  },
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("COMMENT", commentSchema);
