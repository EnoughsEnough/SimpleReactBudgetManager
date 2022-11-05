import React from "react";
import AddExpense from "./components/AddExpense";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import RemainingBudget from "./components/RemainingBudget";
import { AppProvider } from "./components/Context";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <div class="background">
          <img
            src="https://phonoteka.org/uploads/posts/2021-04/1618916884_2-phonoteka_org-p-fon-dlya-prezentatsii-biznes-minimalizm-2.jpg"
            alt="1"
          />
        </div>
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <RemainingBudget />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpense />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
