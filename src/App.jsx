import { useState } from "react";
import "./App.css";
import Dice from "./dice";

function App() {
  return (
    <main>
      <h2 className="title">Tenzies</h2>
      <p className="sub-title">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
      </div>
    </main>
  );
}

export default App;
