import React, { useState } from 'react'

function ExpenseForm({ onAddExpense }) {
    const [expense, setExpense] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!(expense && description && category && amount && date)) return;


        const newExpense = { expense, description, category, amount, date };
        onAddExpense(newExpense);

        setExpense("");
        setDescription("");
        setCategory("");
        setAmount("");
        setDate("");
    };

  return (
    <form onSubmit={handleSubmit}>
        <input 
           type="text"
           placeholder='Expense'
           value={expense}
           onChange={(e) => setExpense(e.target.value)} />

         <input 
           type="text"
           placeholder='Description'
           value={description}
           onChange={(e) => setDescription(e.target.value)} />

         <input 
           type="text"
           placeholder='Category'
           value={category}
           onChange={(e) => setCategory(e.target.value)} />

         <input 
           type="text"
           placeholder='Amount'
           value={amount}
           onChange={(e) => setAmount(e.target.value)} />

         <input 
           type="text"
           placeholder='date'
           value={date}
           onChange={(e) => setDate(e.target.value)} />

        <button type='submit'>Add Expense</button>              
    </form>
  ) 
}

export default ExpenseForm
