function HabitItem({ item, increaseCounter, decreaseCounter }) {
  const isCompleted = item.counter >= Number(item.target);
  return (
    <>
      <p>{item.name}</p>
      <p>{item.target}</p>
      <p>{item.counter}</p>
      <button onClick={() => increaseCounter(item.id)}>+</button>
      <button onClick={() => decreaseCounter(item.id)}>-</button>
      {isCompleted && <p>Completed ✨</p>}
    </>
  );
}

export default HabitItem;
