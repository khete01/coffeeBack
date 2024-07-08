import type { NextApiRequest, NextApiResponse } from "next";
import ProductModel from "../../models/product";

export const getProducts = async () => {
  try {
    const products = await ProductModel.find({});
    return products;
  } catch (error) {
    console.log("Error fetching products:", error);
    throw error;
  }
};

export const createProduct = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const data = req.body;
    const product = await ProductModel.create(data);
    res.status(200).json(product);
  } catch (error) {
    console.log("Error creating product:", error);
    res.status(500).json({ error: "Error creating product" });
  }
};

export const updateProduct = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { id } = req.query;
    const data = req.body;
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log("Error updating product:", error);
    res.status(500).json({ error: "Error updating product" });
  }
};
export const deleteProduct = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { id } = req.query;
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    res.status(200).send(deletedProduct);
  } catch (error) {
    console.log("Error deleting product:", error);
    res.status(500).json({ error: "Error deleting product" });
  }
};