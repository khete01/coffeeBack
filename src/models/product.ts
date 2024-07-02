import mongoose, { Schema } from "mongoose";
import { Product } from "@/pages/utils/types";

const ProductSchema = new Schema<Product>({
  id: String,
  imageUrl: String,
  name: String,
  price: {
    small: Number,
    medium: Number,
    large: Number,
  },
  description: String,
  category: String,
  size: { type: String, enum: ["small", "medium", "large"] },
});

const ProductModel = mongoose.model<Product>("Product", ProductSchema);

export default ProductModel;
