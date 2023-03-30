import mongoose from "mongoose";
const { Schema } = mongoose;
const orderSchema = new Schema({
  items: [
    {
      soap: { type: mongoose.Schema.Types.ObjectId, ref: "Soaps" },
      amount: Number,
      soapPrice: String,
      name: String,
    },
  ],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: String,
  total: Number,
  date: String,
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
