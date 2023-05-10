import mongoose from "mongoose";

const { Schema } = mongoose;
const CommentSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  commentText: String,
  starRating: Number,
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
export default Comment;
