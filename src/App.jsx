import { useState } from "react";
import "./App.css";
import Dice from "./dice";

function App() {
  const [diceNumbers, setDiceNumbers] = useState(randomDiceArr());

  function randomDiceArr() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 6) + 1);
    }
    return arr;
  }

  const diceElements = diceNumbers.map((number) => {
    return <Dice value={number} />;
  });

  return (
    <main>
      <h2 className="title">Tenzies</h2>
      <p className="sub-title">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll">Roll</button>
    </main>
  );
}

export default App;
