// item ist dieser eine Datensatz; die Counter-Funktionen kommen über Props von oben
function HabitItem({ item, increaseCounter, decreaseCounter }) {
  // erreicht oder drüber? Dann completed; der Ziel-String wird dafür zur Zahl
  const isCompleted = item.counter >= Number(item.target);
  return (
    <article className="card grimoire-card habit-item">
      <p className="habit-name">{item.name}</p>
      <p className="habit-target">Target: {item.target}</p>
      <p className="habit-counter">{item.counter}</p>
      {/* Klick reicht genau diese ID nach oben, damit App nur den passenden Counter ändert */}
      <button className="btn btn-outline btn-sm counter-button" onClick={() => decreaseCounter(item.id)}>-</button>
      <button className="btn btn-outline btn-sm counter-button" onClick={() => increaseCounter(item.id)}>+</button>
      {/* && zeigt den Completed-Blerps nur, wenn die Bedingung true ist */}
      {isCompleted && <p className="badge badge-success completed-badge">Completed ✨</p>}
    </article>
  );
}

export default HabitItem;
