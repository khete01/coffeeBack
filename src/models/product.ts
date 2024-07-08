import mongoose, { Model, Schema } from "mongoose";
import { Product } from "@/pages/utils/types";

const ProductSchema = new Schema<Product>({
  id: { type: String, required: true },
  imageUrl: { type: String, required: true },
  name: { type: String, required: true },
  price: {
    small: Number,
    medium: Number,
    large: Number,
  },
  description: String,
  category: { type: String, required: true },
});

const ProductModel: Model<Product> =
  mongoose.models.Product || mongoose.model<Product>("Product", ProductSchema);

export default ProductModel;
