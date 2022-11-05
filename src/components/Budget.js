import { useContext } from "react";
import { AppContext } from "./Context";

function Budget() {
  const { budget } = useContext(AppContext);

  const { dispatch } = useContext(AppContext);

  const setNewBudget = (budget) => {
    dispatch({ type: "SET_BUDGET", payload: budget });
  };

  return (
    <div className="budgetStat">
      <div className="budget--footer">
        Budget: ${budget}
        <button
          onClick={() => setNewBudget(Number(prompt()))}
          class="btn-primary"
          style={{ marginLeft: "200px" }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default Budget;
