import mongoose, { Schema } from "mongoose";
import { Category } from "@/pages/utils/types";

const CategorySchema = new Schema<Category>({
  id: String,
  name: String,
  
});

const CategoryModel = mongoose.model<Category>("Category", CategorySchema);

export default CategoryModel;