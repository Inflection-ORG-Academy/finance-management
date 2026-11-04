import { Expense } from "../models/expenseModel.js";

export const createExpense = async (req, res) => {
  console.log(req.user.id);

  try {
    const title = req.body.title;
    const amount = req.body.amount;
    const date = req.body.date;
    const description = req.body.description;

    if (
      typeof title !== "string" ||
      typeof amount !== "number" ||
      !title.trim() ||
      !amount
    ) {
      return res.status(400).json({
        success: false,
        message: "title and amount are required",
      });
    }

    console.log(req.body);

    const expense = await new Expense({
      title,
      description,
      amount,
      date,
      user: req.user.id,
    }).save();

    res.status(201).json({
      success: true,
      message: "Expense added",
      expense,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
