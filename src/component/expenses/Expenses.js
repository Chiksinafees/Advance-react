import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");

  const FilterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filtereExpenseYear = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filterYear;
  });

  let selectedExpenses = (
    <p className="null-expense">
      <b>No Expenses added</b>
    </p>
  );

  if (filtereExpenseYear.length > 0) {
    selectedExpenses = filtereExpenseYear.map((sample) => (
      <ExpenseItem
        key={sample.id}
        title={sample.title}
        date={sample.date}
        amount={sample.amount}
        LocationOfExpenditure={sample.LocationOfExpenditure}
      />
    ));
  }

  return (
    <Card className="expense123">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={FilterChangeHandler}
      />
      {selectedExpenses}
      {filtereExpenseYear.length === 1 && (
        <p className="null-expense">
          <b>Only single Expense here.Please add more...</b>
        </p>
      )}
    </Card>
  );
}
export default Expenses;
