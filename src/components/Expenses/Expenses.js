import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const selectYearHandler = (filteredYear) => {
    setYear(filteredYear);
    console.log(year);
  };

  const filteredExpense = props.items.filter(expenses => {
    return(expenses.date.getFullYear().toString() === year);
  });

  let expensesContent = <p>No Expenses.</p>;

  if(filteredExpense.length > 0){
    expensesContent = filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelectYear={selectYearHandler} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
