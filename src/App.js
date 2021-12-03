import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id: 'e1', title: "Subscription", amount: 50, date: new Date(2021, 11, 1) },
    { id: 'e2', title: "Food", amount: 100, date: new Date(2021, 11, 1) },
    { id: 'e3', title: "Phone", amount: 80, date: new Date(2021, 11, 1) },
    { id: 'e4', title: "Car", amount: 200, date: new Date(2021, 11, 1) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
