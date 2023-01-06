import { useState } from "react";
import Expenses from "./Expenses";
import NewExpense from "./NewExpense";

const EXISTING_EXPENSES = [
    { 
      id: 1, 
      title: 'Grocery Items',
      amount: 2500.45,
      date:new Date(2019,6,15),
    },
    { 
      id: 2, 
      title: 'Mac Book',
      amount: 195000.55,
      date:new Date(2019,8,22),
    },
    { 
      id: 3, 
      title: 'Samsumg LED',
      amount: 15000.35,
      date:new Date(2020,2,5),
    },
    { 
      id: 4, 
      title: 'AC',
      amount: 75000.55,
      date:new Date(2021,8,11),
    },
  ];

function App() {
  
  const [expenses, setExpenses] = useState(EXISTING_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
