import Expense from "./component/expenses/ExpenseItem";
import Card from "./component/UI/Card";
import "./App.css";
import NewExpense from "./component/NewExpense/NewExpense";

const App = () => {
  const Sampleexpense = [
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

  return (
    <div>
      <NewExpense />
      <Card className="expense123">
        {Sampleexpense.map((Sample) => {
          return (
            <div key={Sample.id}>
              <Expense
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
