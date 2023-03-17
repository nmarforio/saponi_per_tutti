import mongoose from "mongoose";

const { Schema } = mongoose;
const basketItemSchema = new Schema({
  quantity: String,
  item: String,
  userId: String,
});

const BasketItem =
  mongoose.models.BasketItem || mongoose.model("BasketItem", basketItemSchema);
export default BasketItem;
