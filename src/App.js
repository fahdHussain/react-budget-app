import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummyExpenses = [
  {
    id: "e1",
    title: "Subscription",
    amount: 50,
    date: new Date(2021, 11, 1),
  },
  { id: "e2", title: "Food", amount: 100, date: new Date(2021, 11, 1) },
  { id: "e3", title: "Phone", amount: 80, date: new Date(2020, 1, 5) },
  { id: "e4", title: "Car", amount: 200, date: new Date(2021, 2, 4) },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return[expense, ...prevExpenses];
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
