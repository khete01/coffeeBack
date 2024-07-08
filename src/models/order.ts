import mongoose, { Model, Schema } from "mongoose";
import { Order } from "@/pages/utils/types";

const OrderSchema = new Schema<Order>({
  id: { type: String, required: true },
  products: [
    {
      productId: { type: String, required: true },
      size: { type: String, enum: ["small", "medium", "large"] },
      quantity: { type: Number, required: true },
    },
  ],
  user: { type: String, required: true },
  date: { type: Date, default: Date.now },
  state: {
    type: String,
    enum: ["placed", "in progress", "on your way", "delivered"],
  },
  milkAmount: { type: Number, min: 1, max: 10 },
  promotionCode: { type: String, default: null },
});

const OrderModel: Model<Order> =
  mongoose.models.Order || mongoose.model<Order>("Order", OrderSchema);
export default OrderModel;
