import { useState } from "react";

function Formular({ addHabit }) {
  const [habitName, setHabitName] = useState("");
  const [habitTarget, setHabitTarget] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const habit = {
      id: crypto.randomUUID(),
      name: habitName,
      target: habitTarget,
      counter: 0,
    };
    addHabit(habit);
    setHabitName("");
    setHabitTarget("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={habitName}
        onChange={(event) => setHabitName(event.target.value)}
      />
      <input
        value={habitTarget}
        onChange={(event) => setHabitTarget(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Formular;
