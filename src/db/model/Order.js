import mongoose from "mongoose";
const { Schema } = mongoose;
const orderSchema = new Schema({
  items: [
    {
      soap: { type: mongoose.Schema.Types.ObjectId, ref: "Soaps" },
      amount: Number,
      soapPrice: String,
    },
  ],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  total: Number,
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
