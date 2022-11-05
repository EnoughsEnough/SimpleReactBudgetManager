import { useContext } from "react";
import { AppContext } from "./Context";


function ExpenseTotal() {
    const {expenses} = useContext(AppContext)

    const total = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0)
    
  return <div className="totalSpent">Spent so far: ${total} </div>;
}

export default ExpenseTotal;
