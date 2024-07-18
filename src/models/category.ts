import mongoose, { Model, Schema } from "mongoose";
import { Category } from "@/utils/types";

const CategorySchema = new Schema<Category>({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

const CategoryModel: Model<Category> =
  mongoose.models.Category ||
  mongoose.model<Category>("Category", CategorySchema);
export default CategoryModel;
