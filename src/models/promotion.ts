import mongoose, { Model, Schema } from "mongoose";
import { Promotion } from "@/utils/types";

const PromotionSchema = new Schema<Promotion>({
  productId: String,
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const PromotionModel: Model<Promotion> =
  mongoose.models.Promotion ||
  mongoose.model<Promotion>("Promotion", PromotionSchema);
export default PromotionModel;
