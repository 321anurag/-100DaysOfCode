import "./App.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index.js";

const App = () => {
  const mystate = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  const diff = 1;

  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count (${count})`;
  });

  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h3>React and Redux</h3>
        <h4> {count} </h4>
        <div className="btn">
          <button onClick={() => setCount(count + 1)}> Use ME </button>
        </div>
        <div className="quantity">
          <button
            className="Quantity_minus"
            title="Decrement"
            onClick={() => dispatch(decNumber(diff))}
          >
            -
          </button>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={mystate}
          />
          <button
            className="Quantity_plus"
            title="Increment"
            onClick={() => dispatch(incNumber(diff))}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
