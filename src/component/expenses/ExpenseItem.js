import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expense = (props) => {
  // props=full array details

  const [title, setTitle] = useState(props.title); //  title= old title     setTitle= new value
  const [amount, setAmount] = useState(props.amount);
  const [filterYear, setFilterYear] = useState("2020");
  const titleHandler = () => {
    setTitle("just updated");
  };
  const amountHandler = () => {
    setAmount("100");
  };

  const deleteHandler = () => {
    // console.log(`${props.id} is called to delete called`)
  };

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expense-item">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseDate date={props.date} />

      <h2>{title}</h2>
      <h2>{props.LocationOfExpenditure}</h2>

      <div>
        <ExpenseDetails amount={amount} />
      </div>
      <button onClick={titleHandler}>Change Title</button>
      <button onClick={amountHandler}>Change amount</button>
      <button onClick={deleteHandler}>Delete Expense </button>
    </Card>
  );
  // just did for checking how createElement work

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
