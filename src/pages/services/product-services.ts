// import { Request, Response } from "express";
import type { NextApiRequest, NextApiResponse } from "next";
import ProductModel from "../../models/product";
import { Product } from "../utils/types";
import { connnectDb } from "../utils/db-connect";

connnectDb();
export const getCoffees = async (): Promise<Product[]> => {
  try {
    const coffees = await ProductModel.find({});
    return coffees;
  } catch (error) {
    console.error("Error fetching coffees:", error);
    throw error;
  }
};

export const createCoffees = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const data = req.body;
    const coffee = await ProductModel.create(data);
    res.status(200).json(coffee);
  } catch (error) {
    console.error("Error creating coffee:", error);
    res.status(500).json(error);
  }
};
