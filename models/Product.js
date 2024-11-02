import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, index: true },
  price: { type: Number, index: true },
  brand: { type: String, index: true },
  stock: { type: Number },
  tags: [{ type: String, index: true }],
  reviews: [
    {
      rating: Number,
      comment: String,
    },
  ],
});

// Text index for name and description fields
productSchema.index({ name: "text", description: "text" });

// Compound index for category and price
productSchema.index({ category: 1, price: 1 });

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
