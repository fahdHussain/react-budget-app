import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const selectYearHandler = (filteredYear) => {
    setYear(filteredYear);
    console.log(year);
  };

  const filteredExpense = props.items.filter(expenses => {
    return(expenses.date.getFullYear().toString() === year);
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelectYear={selectYearHandler} />
        <ExpensesList items={filteredExpense}/>
      </Card>
    </div>
  );
}

export default Expenses;
