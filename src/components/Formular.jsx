import { useState } from "react";

// addHabit kommt als Prop aus App: hier bauen wir das Habit, dort wird die Liste geändert
function Formular({ addHabit }) {
  // merkt sich Name und Ziel während des Tippens; Input-Werte kommen als Strings rein
  const [habitName, setHabitName] = useState("");
  const [habitTarget, setHabitTarget] = useState("");

  function handleSubmit(event) {
    // verhindert den normalen Seiten-Reload beim Submit; React übernimmt den Bums
    event.preventDefault();
    // baut einen Datensatz mit eigener ID und Counter 0 aus den aktuellen Eingaben
    const habit = {
      id: crypto.randomUUID(),
      name: habitName,
      target: habitTarget,
      counter: 0,
    };
    // gibt den fertigen Datensatz über die Prop-Funktion an App weiter
    addHabit(habit);
    // SESAM LEERE DICH: setzt den State und damit beide controlled Inputs zurück
    setHabitName("");
    setHabitTarget("");
  }

  return (
    <form className="card grimoire-card habit-form" onSubmit={handleSubmit}>
      <h2>New habit</h2>
      {/* controlled: value liest den State, onChange schreibt jede Eingabe wieder rein */}
      <input
        className="input input-bordered w-full"
        aria-label="Habit name"
        placeholder="Habit name"
        value={habitName}
        onChange={(event) => setHabitName(event.target.value)}
      />
      <input
        className="input input-bordered w-full"
        aria-label="Habit target"
        placeholder="Target"
        value={habitTarget}
        onChange={(event) => setHabitTarget(event.target.value)}
      />
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
}

export default Formular;
