import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
  name: String,
  adress: String,
  email: String,
  basketCount: Number,
  basketItem: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
