import mongoose from "mongoose";
const uri =
  "mongodb+srv://user:Zxcv1001Tu@cluster0.fq5chxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};
