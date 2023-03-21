import mongoose from "mongoose";

const { Schema } = mongoose;
const basketItemSchema = new Schema({
  quantity: String,
  soapId: { type: mongoose.Schema.Types.ObjectId, ref: "Soaps" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const BasketItem =
  mongoose.models.BasketItem || mongoose.model("BasketItem", basketItemSchema);
export default BasketItem;
