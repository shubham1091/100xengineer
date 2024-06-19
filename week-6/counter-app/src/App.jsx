import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Simple Counter</h1>
      <p>Current Count: {count}</p>
      <button
        onClick={() => {
          if (count == 20) return;
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          if (count == 0) return;
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
