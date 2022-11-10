import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredtitle: "",
    enteredAmount: "",
    enteredDate: "",
  });                          // it's a alternative way to use single state instead of multiple

  const titleHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredtitle: e.target.value };   //  we don't use setUserInput ({...prevState, enteredtitle: e.target.value })
    });
  };
  const amountHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };
  const dateHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };

  return (
    <form>
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
          <button>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
