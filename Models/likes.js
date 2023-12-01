//create mongoose schema
const mongoose = require("mongoose");
const likeSchema = new mongoose.Schema({
  post: {
    type: String,
    required: false,
  },
  user: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("LIKES", likeSchema);
