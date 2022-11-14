import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");

  const FilterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filtereExpenseYear = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expense123">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={FilterChangeHandler}
      />
      <ExpensesList items={filtereExpenseYear} />
    </Card>
  );
}
export default Expenses;
