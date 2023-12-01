const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLenght: 50,
  },
  description: {
    type: String,
    required: true,
    maxLenght: 1000,
  },
});
module.exports = mongoose.model("Post", postSchema);
