import React, { useContext } from "react";
import { AppContext } from "./Context";

function RemainingBudget() {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total , item) => {
            return (total += item.cost)
    }, 0)

  return <div className="remainingBudget">Remaining: ${budget - totalExpenses}</div>;
}

export default RemainingBudget;
