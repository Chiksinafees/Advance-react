import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);

  const titleHandler = () => {
    setTitle("just updated");
  };
  // const amountHandler = () => {
  //   setAmount(100);

  // };
  const deleteHandler = () => {
    //console.log(`${props.title} is called to delete`)
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <h2>{title}</h2>
        <h2>{props.LocationOfExpenditure}</h2>

        <ExpenseDetails amount={props.amount} />
        <button onClick={titleHandler}>Change title</button>
        <button onClick={deleteHandler}>delete expense</button>
      </Card>
    </li>
  );
  //just did for checking how createElement work
  //     React.createElement("div",{className:"expense-item"},
  //     React.createElement(ExpenseDate,{date:props.date}),
  //     React.createElement("h2",{}, props.title),
  //     React.createElement("h2",{}, props.locationOfExpenditure),
  //     React.createElement("div",{},
  //     React.createElement(ExpenseDetails,{amount:props.amount})
  //     )
  //     )
};
export default ExpenseItems;
