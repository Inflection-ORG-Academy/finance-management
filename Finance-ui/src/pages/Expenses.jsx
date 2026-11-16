import React from "react";
import { MainLayout } from "../components/MainLayout";
import ExpenseForm from "../components/ExpenseForm";
import { getCookie } from "../utils/cookies";

const ExpensesPage = () => {
  const addExpense = async (exp) => {
    try {
      const res = await fetch("http://127.0.0.1:5000/expenses/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
        body: JSON.stringify(exp),
      });

      const data = await res.json();

      console.log(data);

      if (data.success == false) {
        alert(data.message);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-end">
        <button className="px-5 py-1 bg-violet-800 text-violet-100 rounded shadow transition duration-500 hover:shadow-2xl hover:cursor-pointer hover:bg-violet-950 hover:text-violet-100">
          New Expense
        </button>
      </div>

      {/* Expense Form */}

      <ExpenseForm onSubmit={addExpense} />
    </MainLayout>
  );
};

export default ExpensesPage;
