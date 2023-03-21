import mongoose from "mongoose";
const { Schema } = mongoose;
const orderSchema = new Schema({
  soapId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Soaps" }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  total: Number,
  amount: Number,
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
