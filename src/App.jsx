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
  return (
    <div className="App">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  )
}

export default App