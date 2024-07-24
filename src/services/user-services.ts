import type { NextApiRequest, NextApiResponse } from "next";
import UserModel from "../models/user";

export const getUsers = async () => {
  try {
    const users = await UserModel.find({});
    return users;
  } catch (error) {
    console.log("Error fetching users:", error);
    throw error;
  }
};

export const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  console.log(data);

  try {
    const user = await UserModel.findOne({ email: data.email });

    if (user) {
      const id = user.id;
      res.status(200).send(id);
      console.log(id);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Internal server error");
    console.error(error);
  }
};
export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body;
    const user = await UserModel.create(data);
    res.status(200).json(user);
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};

export const updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const data = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Error updating user:", error);
    res.status(500).json({ error: "Error updating user" });
  }
};

export const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const deletedUser = await UserModel.findByIdAndDelete(id);
    res.status(200).send(deletedUser);
  } catch (error) {
    console.log("Error deleting user:", error);
    res.status(500).json({ error: "Error deleting user" });
  }
};
