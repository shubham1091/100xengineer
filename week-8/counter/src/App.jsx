import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid">
        <div className="card">{count}</div>
        <div className="card">{count}</div>
        <div className="card">{count}</div>
        <div className="card">{count}</div>
      </div>
      <div className="flex">
        <button onClick={() => setCount((count) => count + 1)}>➕</button>
        <button onClick={() => setCount((count) => count - 1)}>➖</button>
      </div>
    </>
  );
}

export default App;
