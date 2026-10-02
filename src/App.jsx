import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import Habits from "./pages/Habits";
import Diary from "./pages/Diary";
import DailyPlanner from "./pages/DailyPlanner";
import Navigation from "./components/Navigation";

function App() {
  // merkt sich wo userblerps grad draufguckt
  const [currentView, setCurrentView] = useState("dashboard");

  return (
    <div>
      {/* gibt Navigation den setCurrentView-blerps, dort heißt er dann onViewChange */}
      <Navigation onViewChange={setCurrentView} />
      {/* guckt was in currentView steht und zeigt nur die passende page */}
      {currentView === "dashboard" && <Dashboard />}
      {currentView === "habits" && <Habits />}
      {currentView === "diary" && <Diary />}
      {currentView === "dailyPlanner" && <DailyPlanner />}
    </div>
  );
}

export default App;
