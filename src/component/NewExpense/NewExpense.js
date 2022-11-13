import React from "react";
import ExpenseForm from "./ExpenseForm ";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveDataHandler = (obj) => {
    const obj2 = {
      ...obj,
      id: Math.random().toString(),
    };

    props.onSaveData2(obj2);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={onSaveDataHandler} />
    </div>
  );
};
export default NewExpense;
