import type { NextApiRequest, NextApiResponse } from "next";
import OrderModel from "../models/order";

export const getOrders = async () => {
  try {
    const orders = await OrderModel.find({});
    return orders;
  } catch (error) {
    console.log("Error fetching orders:", error);
    throw error;
  }
};

export const createOrder = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const data = req.body;
    const order = await OrderModel.create(data);
    res.status(200).json(order);
  } catch (error) {
    console.log("Error creating order:", error);
    res.status(500).json({ error: "Error creating order" });
  }
};
export const updateOrder = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { id } = req.query;
    const data = req.body;
    const updatedOrder = await OrderModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).send(updatedOrder);
  } catch (error) {
    console.log("Error updating order");
  }
};

export const deleteOrder = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { id } = req.query;
    const data = req.body;
    const deletedOrder = await OrderModel.findByIdAndDelete(id);
    res.status(200).send(deletedOrder);
  } catch (error) {
    console.log("Error deleting order");
  }
};
