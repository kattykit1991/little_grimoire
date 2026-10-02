// liest nur die Fortschritts-Props; speichert selbst keine History
function ActivityOverview({ completedCount, totalCount, progressPercent }) {
  // baut 35 Positionen für fünf Wochen – noch keine echten Kalenderdaten
  const days = Array.from({ length: 35 }, (_, index) => index);

  return (
    <div className="card grimoire-card activity-card">
      <h2>Activity Overview</h2>
      <p>Past 5 Weeks</p>

      <div className="grid grid-cols-7 gap-2 w-fit activity-grid">
        {/* baut je Position ein Kästchen; volle/halbe Farbe bedeutet 100%/etwas Fortschritt */}
        {days.map((day) => {
          // nur das letzte Kästchen gilt hier als Today und bekommt echte Fortschrittswerte
          // alle anderen sind V0.1-Platzhalter ohne historische Daten
          const isToday = day === days.length - 1;

          return (
            <div
              key={day}
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-md activity-cell ${
                isToday
                  ? progressPercent === 100
                    ? "bg-success"
                    : progressPercent > 0
                      ? "bg-success/50"
                      : "bg-base-300"
                  : "bg-base-300"
              }`}
              title={
                isToday
                  ? `Today: ${completedCount}/${totalCount} (${progressPercent}%)`
                  : "No activity data yet"
              }
            />
          );
        })}
      </div>

      <p>
        Today: {completedCount} / {totalCount} habits ({progressPercent}%)
      </p>
    </div>
  );
}

export default ActivityOverview;
