import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productname: { type: String, required: true },
  category: { type: String, index: true },
  price: { type: Number, index: true },
  description: { type: String },
});

// Text index for productname and description fields
productSchema.index({ productname: "text", description: "text" });

// Compound index for category and price
productSchema.index({ category: 1, price: 1 });

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
