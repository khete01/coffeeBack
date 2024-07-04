import mongoose, { Schema } from "mongoose";
import { Order } from "@/pages/utils/types";

const OrderSchema = new Schema<Order>({
  id: { type: String },
  products: [
    {
      productId: { type: String },
      size: { type: String, enum: ["small", "medium", "large"] },
      quantity: { type: Number },
    },
  ],
  user: { type: String },
  date: { type: Date, default: Date.now },
  state: {
    type: String,
    enum: ["placed", "in progress", "on your way", "delivered"],
  },
  milkAmount: { type: Number, min: 1, max: 10 },
  promotionCode: { type: String, default: null },
});

const OrderModel = mongoose.model<Order>("Order", OrderSchema);

export default OrderModel;
