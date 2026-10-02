// onViewChange ist der setCurrentView-blerps aus App
function Navigation({ onViewChange }) {
  return (
    <>
      {/* beim klick wird currentView in App auf "dashboard" geändert */}
      <button onClick={() => onViewChange("dashboard")}>Dashboard</button>
      <button onClick={() => onViewChange("habits")}>Habit Tracker</button>
      <button onClick={() => onViewChange("diary")}>Diary</button>
      <button onClick={() => onViewChange("dailyPlanner")}>
        Daily Planner
      </button>
    </>
  );
}

export default Navigation;
