import mongoose from "mongoose";

const { Schema } = mongoose;
const soapSchema = new Schema({
  name: String,
  description: String,
  price: String,
  recipes: String,
  method: String,
  image: String,
  price_id: String,
});

const Soap = mongoose.models.Soap || mongoose.model("Soap", soapSchema);
export default Soap;
