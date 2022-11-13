import "./App.css";
import NewExpense from "./component/NewExpense/NewExpense";
import Expenses from "./component/expenses/Expenses";
import React, { useState } from "react";

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
const App = () => {
  const [exp, setExp] = useState(arr);

  const onSave2Handler = (obj2) => {
    const newArr = [obj2, ...exp];
    setExp(newArr);
  };
  return (
    <div>
      <NewExpense onSaveData2={onSave2Handler} />
      <Expenses items={exp} />
    </div>
  );
};
export default App;
