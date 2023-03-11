import mongoose from "mongoose";

const { Schema } = mongoose;
const soapSchema = new Schema({
  name: String,
  description: String,
  price: String,
  recipes: String,
  method: String,
});

const Soap = mongoose.models.Soap || mongoose.model("Soap", soapSchema);
export default Soap;
