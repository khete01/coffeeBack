import type { NextApiRequest, NextApiResponse } from "next";
import PromotionModel from "../models/promotion";

export const getPromotions = async () => {
  try {
    const promotions = await PromotionModel.find({});
    return promotions;
  } catch (error) {
    console.log("Error fetching promotions:", error);
    throw error;
  }
};

export const createPromotion = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const data = req.body;
    const promotion = await PromotionModel.create(data);
    res.status(200).json(promotion);
  } catch (error) {
    console.log("Error creating promotion:", error);
    res.status(500).json({ error: "Error creating promotion" });
  }
};

export const updatePromotion = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { id } = req.query;
    const data = req.body;
    const updatedPromotion = await PromotionModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json(updatedPromotion);
  } catch (error) {
    console.log("Error updating promotion:", error);
    res.status(500).json({ error: "Error updating promotion" });
  }
};

export const deletePromotion = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { id } = req.query;
    const deletedPromotion = await PromotionModel.findByIdAndDelete(id);
    res.status(200).send(deletedPromotion);
  } catch (error) {
    console.log("Error deleting promotion:", error);
    res.status(500).json({ error: "Error deleting promotion" });
  }
};
