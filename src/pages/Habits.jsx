import { useState } from "react";
import Formular from "../components/Formular";
import HabitList from "../components/HabitList";

function Habits({ habits, addHabit, increaseCounter, decreaseCounter }) {
  return (
    <div>
      <Formular addHabit={addHabit} />
      <HabitList
        habits={habits}
        increaseCounter={increaseCounter}
        decreaseCounter={decreaseCounter}
      />
    </div>
  );
}

export default Habits;
