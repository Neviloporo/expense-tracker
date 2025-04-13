import React, {useState } from 'react'
import ExpenseTable from "./components/ExpenseTable";
import ExpenseForm from "./components/ExpenseForm";
import SearchBar from "./components/SearchBar";
import initialExpenses from './data/InitialExpenses';
import './index.css'

 function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = expenses.filter(exp =>
    exp.expense.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (indexToRemove) => {
    setExpenses(expenses.filter((_, index) => index !== indexToRemove));
  };
  
  return (
    <div className="App">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
      <p>You can check on your expenses through this tracker as it makes it easier to track everything</p>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
    </div>
  )
}

export default App