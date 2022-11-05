
import React, { useContext, useState } from "react";
import { AppContext } from "./Context";
import { v4 as uuidv4 } from 'uuid';

function AddExpense() {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const { dispatch } = useContext(AppContext);

  const createExpense = (e) => {
    e.preventDefault();
    if (!name.length || !cost.length) {
      return (
        alert("Введите расходы!")
      )
    }
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost)
    };

    dispatch({
      type: "ADD_EXPENSEgit add README.md",
      payload: expense,
    });

    setName('')
    setCost('')
  };

 

  return (
    <div className="addNewExpense">
      <div className="nameExpense">
        <h5>Name</h5>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          style={{ width: "300px", height: "35px" }}
        ></input>
      </div>
      <div className="costExpense" style={{ marginLeft: "40px" }}>
        <h5>Cost</h5>
        <input
          onChange={(e) => setCost(e.target.value)}
          value={cost}
          style={{ width: "300px", height: "35px" }}
        ></input>
      </div>
      <div className="btnAdd">
        <button onClick={createExpense} class="btn-primary">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddExpense;
