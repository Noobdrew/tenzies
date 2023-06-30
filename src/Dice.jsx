export default function Dice(props) {
  const diceId = props.id;
  const style = { backgroundColor: props.isHeld ? "#59E391" : "white" };
  return (
    <div className="die" style={style} onClick={() => props.holdDice(diceId)}>
      {props.value}
    </div>
  );
}
