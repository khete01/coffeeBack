import mongoose, { Model, Schema } from "mongoose";
import { User } from "@/utils/types";

const UserSchema = new Schema<User>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  address: { type: String },
  paymentInfo: {
    cardHolder: { type: String },
    cardNumber: { type: String },
    expirationDate: { type: String },
    cvv: { type: String },
  },
  favorites: [{ type: String }],
});

const UserModel: Model<User> =
  mongoose.models.User || mongoose.model<User>("User", UserSchema);
export default UserModel;
