const { Schema, model } = require("mongoose");

const CommentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    postID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Comment", CommentSchema);
