import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm ";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editing, setEditing] = useState(false);

  const onSaveDataHandler = (obj) => {
    const obj2 = { ...obj, id: Math.random().toString() };
    props.onSaveData2(obj2);
    setEditing(false);
  };

  const editingHandler = () => {
    setEditing(true);
  };

  const notEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!editing && <button onClick={editingHandler}>Fill New Expense</button>}
      {editing && (
        <ExpenseForm
          onSaveData={onSaveDataHandler}
          onCancel={notEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
