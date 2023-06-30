export default function Dice(props) {
  const diceId = props.id;

  return (
    <div
      className="die"
      style={{ backgroundColor: props.isHeld ? "#59E391" : "white" }}
      onClick={(event) => props.holdDice(event, diceId)}
    >
      {props.value}
    </div>
  );
}
