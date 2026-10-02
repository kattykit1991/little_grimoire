import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import Habits from "./pages/Habits";
import Diary from "./pages/Diary";
import DailyPlanner from "./pages/DailyPlanner";
import Navigation from "./components/Navigation";

function App() {
  // merkt sich wo userblerps grad draufguckt
  const [currentView, setCurrentView] = useState("dashboard");
  const [habits, setHabits] = useState([]);

  // WIESO HIER REIN?!?!
  function addHabit(newHabit) {
    setHabits((currentHabits) => [...currentHabits, newHabit]);
  }

  return (
    <div>
      {/* gibt Navigation den setCurrentView-blerps, dort heißt er dann onViewChange */}
      <Navigation onViewChange={setCurrentView} />
      {/* guckt was in currentView steht und zeigt nur die passende page */}
      {currentView === "dashboard" && <Dashboard />}
      {currentView === "habits" && <Habits habits={habits} />}
      {currentView === "diary" && <Diary />}
      {currentView === "dailyPlanner" && <DailyPlanner />}
    </div>
  );
}

export default App;
