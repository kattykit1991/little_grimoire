import { useState } from "react";
import Formular from "../components/Formular";
import HabitList from "../components/HabitList";
import ActivityOverview from "../components/ActivityOverview";

// Daten und Änderungsfunktionen kommen aus App; die Page verteilt sie an ihre Kinder
function Habits({ habits, addHabit, increaseCounter, decreaseCounter }) {
  // filter sammelt nur Habits mit erreichtem Ziel; Number macht aus dem Ziel-String eine Zahl
  const completedHabits = habits.filter(
    (habit) => habit.counter >= Number(habit.target),
  );
  // zählt fertige und vorhandene Blerps – abgeleitete Werte, kein zusätzlicher State
  const completedCount = completedHabits.length;
  const totalCount = habits.length;
  // Anteil in Prozent und gerundet; bei leerer Liste 0 statt Teilen durch null
  const progressPercent =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const days = Array.from({ length: 35 }, (_, index) => index);

  return (
    <div className="page-layout habits-layout">
      <h1>Habit Tracker</h1>
      <p className="habit-summary">
        Progress: {completedCount} / {totalCount} ({progressPercent}%)
      </p>
      <progress className="progress progress-primary w-full" value={progressPercent} max="100" aria-label="Habit progress" />
      {/* Heatmap bekommt die berechnete Zusammenfassung, Formular die Add-Funktion und Liste Daten plus +/- Funktionen */}
      <ActivityOverview
        completedCount={completedCount}
        totalCount={totalCount}
        progressPercent={progressPercent}
      />
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
