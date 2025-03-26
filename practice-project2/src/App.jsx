import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <div className="mainDiv">
        <div className="title">Welcome to RCB</div>
        <div className="cards">
          <Cards name="Virat" number="18" /> 
          <Cards name="Virat" number="18" />
          <Cards name="Virat" number="18" />
          <Cards name="Virat" number="18" />
          <Cards name="Virat" number="18" />
          <Cards name="Virat" number="18" />
        </div>
        <div className="buttonClass">
          <button className="modalButton" >Next</button>
    
        </div>
      </div>
    </>
  );
}

export default App;
