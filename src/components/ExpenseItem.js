import React, { useContext } from "react";
import { AppContext } from "./Context";

function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);

  const handleBtnDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span class="badge badge-primary badge-pill mr-3">${props.cost}</span>
        <i onClick={handleBtnDelete} class="fa-regular fa-circle-xmark"></i>
      </div>
    </li>
  );
}

export default ExpenseItem;
