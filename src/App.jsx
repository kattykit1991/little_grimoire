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
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem("habits");
    return savedHabits ? JSON.parse(savedHabits) : [];
  });
  // console.log(habits);

  function addHabit(newHabit) {
    setHabits((currentHabits) => [...currentHabits, newHabit]);
  }
  function increaseCounter(targetId) {
    setHabits((currentHabits) =>
      currentHabits.map((habit) =>
        habit.id === targetId
          ? { ...habit, counter: habit.counter + 1 }
          : habit,
      ),
    );
  }
  function decreaseCounter(targetId) {
    setHabits((currentHabits) =>
      currentHabits.map((habit) =>
        habit.id === targetId
          ? { ...habit, counter: habit.counter - 1 }
          : habit,
      ),
    );
  }
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);
  return (
    <div>
      {/* gibt Navigation den setCurrentView-blerps, dort heißt er dann onViewChange */}
      <Navigation onViewChange={setCurrentView} />
      {/* guckt was in currentView steht und zeigt nur die passende page */}
      {currentView === "dashboard" && <Dashboard />}
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
