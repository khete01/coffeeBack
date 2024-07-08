import mongoose, { Model, Schema } from "mongoose";
import { User } from "@/pages/utils/types";

const UserSchema = new Schema<User>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, required: true },
  address: { type: String, required: true },
  paymentInfo: {
    cardHolder: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expirationDate: { type: String, required: true },
    cvv: { type: String, required: true },
  },
  favorates: [{ type: String, required: true }],
});

const UserModel: Model<User> =
  mongoose.models.User || mongoose.model<User>("User", UserSchema);
export default UserModel;
