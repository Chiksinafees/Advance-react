import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((sample) => (
        <ExpenseItem
          key={sample.id}
          title={sample.title}
          date={sample.date}
          amount={sample.amount}
          LocationOfExpenditure={sample.LocationOfExpenditure}
        />
      ))}
      {props.items.length === 1 && (
        <p className="expenses-list__fallback">
          <b>Only single Expense here.Please add more...</b>
        </p>
      )}
    </ul>
  );
};

export default ExpensesList;
