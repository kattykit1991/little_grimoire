// onViewChange ist der setCurrentView-blerps aus App
// onViewChange ist die von App übergebene Setter-Funktion, kein eigener Navigations-State
function Navigation({ onViewChange }) {
  return (
    <nav className="grimoire-nav" aria-label="Main navigation">
      {/* beim klick wird currentView in App auf "dashboard" geändert */}
      <button className="btn btn-ghost" onClick={() => onViewChange("dashboard")}>Dashboard</button>
      <button className="btn btn-ghost" onClick={() => onViewChange("habits")}>Habit Tracker</button>
      <button className="btn btn-ghost" onClick={() => onViewChange("diary")}>Diary</button>
      <button className="btn btn-ghost" onClick={() => onViewChange("dailyPlanner")}>
        Daily Planner
      </button>
    </nav>
  );
}

export default Navigation;
