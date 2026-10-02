// habits kommt direkt aus App – dieselbe Liste wie im Tracker, keine zweite Datenquelle
function Dashboard({ habits }) {
  // guckt wie viele Habit-Blerps heute schon erledigt sind
  const completedHabits = habits.filter(
    (habit) => habit.counter >= Number(habit.target),
  );

  // length zählt die gefilterten fertigen Habits und alle vorhandenen Habits
  const completedCount = completedHabits.length;
  const totalCount = habits.length;

  // verhindert NaN-Gremlins wenn noch gar keine Habits existieren
  // rechnet den Anteil fertig/gesamt in gerundete Prozent um
  const progressPercent =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <div className="dashboard-layout page-layout">
      <h1>Little Grimoire</h1>
      <p>Your little overview for today ✨</p>

      {/* echter heutiger Habit-Fortschritt aus App */}
      <section className="card grimoire-card">
        <h2>Habit Progress</h2>
        <p>
          {completedCount} / {totalCount} completed
        </p>
        <p className="progress-number">{progressPercent}%</p>
        <progress
          className="progress progress-primary w-full"
          value={progressPercent}
          max="100"
          aria-label="Habit progress"
        />
      </section>

      {/* Planner und Diary wohnen aktuell noch in ihren eigenen Räumchen */}
      <section className="card grimoire-card">
        <h2>Daily Planner</h2>
        <p>Your focus, todos and little notes are waiting for you.</p>
      </section>

      <section className="card grimoire-card">
        <h2>Diary</h2>
        <p>Keep a little piece of your day in your Grimoire.</p>
      </section>
    </div>
  );
}

export default Dashboard;
