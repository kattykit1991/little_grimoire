import HabitItem from "./HabitItem";

function HabitList({ habits, increaseCounter, decreaseCounter }) {
  return (
    <div className="habit-list">
      {/* macht aus jedem Habit ein HabitItem; key hilft React, Einträge anhand ihrer ID wiederzuerkennen */}
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
