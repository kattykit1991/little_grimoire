import HabitItem from "./HabitItem";

function HabitList({ habits, increaseCounter, decreaseCounter }) {
  return (
    <div>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          item={habit}
          increaseCounter={increaseCounter}
          decreaseCounter={decreaseCounter}
        />
      ))}
    </div>
  );
}

export default HabitList;
