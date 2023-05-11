import mongoose from "mongoose";

const { Schema } = mongoose;
const CommentSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  commentText: String,
  ratingStar: Number,
  soapId: { type: mongoose.Schema.Types.ObjectId, ref: "Soap" },
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
export default Comment;
