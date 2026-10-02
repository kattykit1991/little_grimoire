import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import Habits from "./pages/Habits";
import Diary from "./pages/Diary";
import DailyPlanner from "./pages/DailyPlanner";
import Navigation from "./components/Navigation";
import Formular from "./components/Formular";
import { useEffect } from "react";

function App() {
  // merkt sich wo userblerps grad draufguckt
  const [currentView, setCurrentView] = useState("dashboard");
  // merkt sich unsere Habit-Blerps zentral; so sehen Dashboard und Tracker dieselben Daten
  // die Startfunktion holt gespeichertes JSON beim Mounten raus – ohne Speicher starten wir mit []
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem("habits");
    return savedHabits ? JSON.parse(savedHabits) : [];
  });
  // console.log(habits);

  // schmeißt das neue Habit in ein neues Array; currentHabits ist der bisherige State
  function addHabit(newHabit) {
    setHabits((currentHabits) => [...currentHabits, newHabit]);
  }
  // guckt per ID welches Habit gemeint ist; map baut ein neues Array
  // nur das passende Habit wird kopiert und bekommt +1, die anderen bleiben erhalten
  function increaseCounter(targetId) {
    setHabits((currentHabits) =>
      currentHabits.map((habit) =>
        habit.id === targetId
          ? { ...habit, counter: habit.counter + 1 }
          : habit,
      ),
    );
  }
  // dasselbe ID-Spiel für -1: bisherige Properties bleiben durch ...habit erhalten
  function decreaseCounter(targetId) {
    setHabits((currentHabits) =>
      currentHabits.map((habit) =>
        habit.id === targetId
          ? { ...habit, counter: habit.counter - 1 }
          : habit,
      ),
    );
  }
  // packt den ganzen Habit-Bums nach dem Mounten und jeder habits-Änderung in localStorage
  // JSON.stringify macht aus unserem Array den Text, den der Speicher braucht
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);
  return (
    <div className="grimoire-shell">
      {/* gibt Navigation den setCurrentView-blerps, dort heißt er dann onViewChange */}
      <Navigation onViewChange={setCurrentView} />
      {/* guckt was in currentView steht und zeigt nur die passende page */}
      {/* reicht Daten nach unten: Dashboard liest Habits, der Tracker bekommt zusätzlich die Änderungsfunktionen */}
      {currentView === "dashboard" && <Dashboard habits={habits} />}
      {currentView === "habits" && (
        <Habits
          habits={habits}
          addHabit={addHabit}
          increaseCounter={increaseCounter}
          decreaseCounter={decreaseCounter}
        />
      )}
      {currentView === "diary" && <Diary />}
      {currentView === "dailyPlanner" && <DailyPlanner />}
    </div>
  );
}

export default App;
