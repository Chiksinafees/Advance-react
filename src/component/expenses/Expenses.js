import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");

  const FilterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filterExpenseYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expense123">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={FilterChangeHandler}
      />
      <ExpensesChart expenses={filterExpenseYear} />
      <ExpensesList items={filterExpenseYear} />
    </Card>
  );
}
export default Expenses;
