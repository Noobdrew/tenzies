import { useState } from "react";
import "./App.css";
import Dice from "./dice";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(randomDiceArr());

  function randomDiceArr() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
      });
    }

    return newDice;
  }

  function rollDice() {
    setDice((prevDice) => {
      return prevDice.map((element) => {
        if (element.isHeld) {
          return element;
        } else {
          return { ...element, value: Math.floor(Math.random() * 6) + 1 };
        }
      });
    });
  }

  function holdDice(event, diceId) {
    setDice((prevDice) => {
      return prevDice.map((element) => {
        if (element.id === diceId) {
          return { ...element, isHeld: !element.isHeld };
        } else {
          return element;
        }
      });
    });
  }

  const diceElements = dice.map((item) => (
    <Dice
      key={item.id}
      value={item.value}
      isHeld={item.isHeld}
      id={item.id}
      holdDice={holdDice}
    />
  ));

  return (
    <main>
      <h2 className="title">Tenzies</h2>
      <p className="sub-title">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
