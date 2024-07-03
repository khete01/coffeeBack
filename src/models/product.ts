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
});

const ProductModel = mongoose.model<Product>("Product", ProductSchema);

export default ProductModel;

// {
//   id: String,
//   imageUrl: String,
//   name: String,
//   price: {
//     small: Number,
//     medium: Number,
//     large: Number,
//   },
//   description: String,
//   category: String,
// }
