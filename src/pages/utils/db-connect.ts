import mongoose from "mongoose";
// const uri =
//   "mongodb+srv://user:Zxcv1001Tu@cluster0.fq5chxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = process.env.MONGODB_URI as string;
export const connnectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};
