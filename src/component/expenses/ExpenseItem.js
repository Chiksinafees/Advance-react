import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const Expense = (props) => {
  const [title, setTitle] = useState(props.title); //  title= old title     setTitle= new value
  const [amount, setAmount] = useState(props.amount);

  const titleHandler = () => {
    setTitle("just updated");
    //console.log(title);
  };
  const amountHandler = () => {
    setAmount("100");
   // console.log(amount);
  };

  const deleteHandler = () => {
    //console.log("u just clicked deleteHandler !!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <h2>{title}</h2>
      <h2>{props.LocationOfExpenditure}</h2>

      <div>
        <ExpenseDetails amount={amount} />
      </div>
      <button onClick={titleHandler}>Change Title</button>
      <button onClick={amountHandler}>Chnge amount</button>
      <button onClick={deleteHandler}>Delete Expense </button>
    </Card>
  );
  // just did for checking how createElement work
  //import React from "react";

  //   React.createElement("div",{ className: "expense-item" },
  //   React.createElement(ExpenseDate, { date: props.date }),
  //   React.createElement("h2", {}, props.title),
  //   React.createElement("h2", {}, props.LocationOfExpenditure),
  //   React.createElement("div",{},
  //   React.createElement(ExpenseDetails, { amount: props.amount })
  //   )
  // );
};

export default Expense;
