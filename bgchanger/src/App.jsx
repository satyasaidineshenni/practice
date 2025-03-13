import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("gold");

  return (
    <div className="main" style={{ backgroundColor: color, height: "100vh" }}>
      <div className="buttons">
        <button className="red" onClick={() => setColor("red")}>
          Red
        </button>
        <button className="green" onClick={() => setColor("green")}>
          Green
        </button>
        <button className="orange" onClick={() => setColor("orange")}>
          Orange
        </button>
        <button className="yellow" onClick={() => setColor("yellow")}>
          Yellow
        </button>
        <button className="lightblue" onClick={() => setColor("lightblue")}>
          LightBlue
        </button>
      </div>
    </div>
  );
}

export default App;
