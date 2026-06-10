import { useState } from "react";
import "./App.css";

function App() {

  // State variable to store counter value
  const [counter, setCounter] = useState(0);

  // Function to increase counter
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // Function to decrease counter
  const removeValue = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <div className="container">

      {/* Main Heading */}
      <h1>🚀 React Counter App</h1>
      <br />
      {/* Description */}
      <p className="subtitle">
        Learn React State Management with useState Hook
      </p>

      {/* Counter Display */}
      <div className="counter-box">
        <h2>{counter}</h2>
        <p>Current Counter Value</p>
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button className="btn increment" onClick={addValue}>
          ➕ Increment
        </button>

        <button
          className="btn decrement"
          onClick={removeValue}
          disabled={counter === 0}
        >
          ➖ Decrement
        </button>
      </div>

      {/* Footer Text */}
      <p className="footer">
        Built with ❤️ using React Hooks
      </p>

    </div>
  );
}

export default App;