import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [desiabled, setDesiabled] = useState(false);

  return (
    <div className="container">
      <div data-testid="counter" className="counter">
        {counter}
      </div>
      <div>
        <button
          data-testid="minus-button"
          onClick={() => setCounter((count) => count - 1)}
          disabled={desiabled}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={() => setCounter((count) => count + 1)}
          disabled={desiabled}
        >
          +
        </button>
      </div>
      <div>
        <button
          data-testid="on/off-button"
          style={{ backgroundColor: "blue" }}
          onClick={() => setDesiabled((prev) => !prev)}
        >
          on/off
        </button>
      </div>
    </div>
  );
}

export default App;
