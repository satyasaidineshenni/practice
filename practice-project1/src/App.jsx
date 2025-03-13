import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);
  const addValue = () => {
    count >= 20 ? setCount(20) : setCount(count + 1);
  };
  const subValue = () => {
    count == 0 ? setCount(0) : setCount(count - 1);
  };
  return (
    <>
      <h3>Count : {count}</h3>
      <button onClick={addValue}>Add value</button>
      <button onClick={subValue}>Subtract value</button>
    </>
  );
}

export default App;
