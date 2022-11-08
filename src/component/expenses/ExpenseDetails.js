import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  const title = props.title;
  const amount = props.amount;

  return (
    <div>
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price ">${amount}</div>
    </div>
  );
};

export default ExpenseDetails;