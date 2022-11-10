import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredtitle, setEnteredtitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleHandler = (e) => {
    setEnteredtitle(e.target.value);
  };

  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      title: enteredtitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(obj)
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-00-01"
            max="2022-11-31"
            onChange={dateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
