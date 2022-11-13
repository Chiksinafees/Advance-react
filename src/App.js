import Expense from "./component/expenses/ExpenseItem";
import Card from "./component/UI/Card";
import "./App.css";
import NewExpense from "./component/NewExpense/NewExpense";
import React, { useState } from "react";
import ExpenseFilter from "./component/expenses/ExpenseFilter";

const App = () => {
  const arr = [
    {
      id: "a1",
      title: "Fridge",
      date: new Date(2021, 5, 15),
      amount: 500,
      LocationOfExpenditure: "DELHI",
    },
    {
      id: "a2",
      title: "Mobile",
      date: new Date(2020, 6, 29),
      amount: 400,
      LocationOfExpenditure: "UTTAR PRADESH",
    },
    {
      id: "a3",
      title: "Toilet paper",
      date: new Date(2022, 2, 14),
      amount: 300,
      LocationOfExpenditure: "NOIDA",
    },
    {
      id: "a4",
      title: "Tv",
      date: new Date(2021, 8, 20),
      amount: 900,
      LocationOfExpenditure: "GAZIABAD",
    },
  ];

  const [exp, setExp] = useState(arr);
  const [filterYear, setFilterYear] = useState("2020");

  const onSave2Handler = (obj2) => {
    setExp((prevArr) => {
      return [obj2, ...prevArr];
    });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <NewExpense onSaveData2={onSave2Handler} />
      <Card className="expense123">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {exp.map((Sample) => {
          return (
            <div key={Sample.id}>
              <Expense
                id={Sample.id}
                title={Sample.title}
                date={Sample.date}
                amount={Sample.amount}
                LocationOfExpenditure={Sample.LocationOfExpenditure}
              />
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default App;
