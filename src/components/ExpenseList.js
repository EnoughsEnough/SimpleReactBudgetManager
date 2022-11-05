import { useContext, useState, useEffect } from "react";
import { AppContext } from "./Context";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const { expenses } = useContext(AppContext);
  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  const searchExpense = (e) => {
    const searchResults = expenses.filter((expense) =>
      expense.name.toLowerCase().includes(e.target.value)
    );
    setfilteredExpenses(searchResults);
  };

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);

  if (!filteredExpenses.length) {
    return <h1 style={{ textAlign: "center" }}>Здесь ничего нет!</h1>;
  }

  return (
    <div className="expensesList">
      <input
        onChange={searchExpense}
        placeholder="Type to search..."
        type="text"
        class="form-control mb-2 mr-sm-2"
      ></input>
      {filteredExpenses.map((expense) => (
        <ExpenseItem name={expense.name} id={expense.id} cost={expense.cost} />
      ))}
    </div>
  );
}

export default ExpenseList;
