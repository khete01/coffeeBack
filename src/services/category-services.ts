//category tai hamaaraltai buh function
import type { NextApiRequest, NextApiResponse } from "next";
import CategoryModel from "@/models/category";

export const getCategories = async () => {
  try {
    const categories = await CategoryModel.find({});
    return categories;
  } catch (error) {
    console.log("Error fetching categories:", error);
    throw error;
  }
};

export const createCategory = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const data = req.body;
    const category = await CategoryModel.create(data);
    res.status(200).json(category);
  } catch (error) {
    console.log("Error creating category:", error);
    res.status(500).json({ error: "Error creating category" });
  }
};
export const updateCategory = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { id } = req.query;
    const data = req.body;
    const updatedCategory = await CategoryModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).send(updatedCategory);
  } catch (error) {
    console.log("Error updating category");
  }
};
export const deleteCategory = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { id } = req.query;
    const data = req.body;
    const deletedCategory = await CategoryModel.findByIdAndDelete(id);
    res.status(200).send(deletedCategory);
  } catch (error) {
    console.log("Error deleting category");
  }
};
