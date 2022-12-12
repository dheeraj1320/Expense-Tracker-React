import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import "./index.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Dish Washer",
    amount: 20000,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 35000, date: new Date(2022, 10, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 15500,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 12000,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e5",
    title: "New Phone",
    amount: 23599,
    date: new Date(2022, 3, 1),
  },
  { id: "e6", title: "New Laptop", amount: 34000, date: new Date(2022, 6, 1) },
  {
    id: "e7",
    title: "New AC",
    amount: 35500,
    date: new Date(2022, 4, 18),
  },
  {
    id: "e8",
    title: "New Juicer",
    amount: 2300,
    date: new Date(2022, 1, 17),
  },
  {
    id: "e9",
    title: "Washing Machine",
    amount: 45000,
    date: new Date(2022, 0, 21),
  },
  {
    id: "e10",
    title: "AC service charge",
    amount: 5500,
    date: new Date(2022, 9, 4),
  },
  {
    id: "e11",
    title: "Rent",
    amount: 12500,
    date: new Date(2022, 1, 14),
  },
  {
    id: "e12",
    title: "Life Insurance",
    amount: 17500,
    date: new Date(2022, 8, 24),
  },
  {
    id: "e13",
    title: "Car Repairing",
    amount: 19500,
    date: new Date(2022, 11, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
