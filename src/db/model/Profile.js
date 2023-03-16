import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  adress: String,
  email: String,
  basketCount: Number,
  basketItem: String,
  userId: String,
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", userSchema);
export default Profile;
