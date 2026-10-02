# 🎮 PROJECT STATE

> Savegame des Projekts – kein Tagebuch.

## 🎯 CURRENT GOAL

Woran arbeiten wir gerade?

> Stage 02 · App-Grundgerüst ist abgeschlossen. Als Nächstes folgt Stage 03 · Habit Tracker.

## 📍 CURRENT STATE

Was funktioniert bereits?

- Vite + React eingerichtet; Starttemplate bereinigt.
- Eigenes Favicon eingebunden und nach Leeren des Browser-Caches sichtbar.
- TailwindCSS und DaisyUI eingerichtet. Lokaler Start unter http://localhost:5173 und funktionierendes Styling von Kat bestätigt; Produktions-Build erfolgreich geprüft.
- Öffentliches GitHub Repository: https://github.com/kattykit1991/little_grimoire. Erster Commit erfolgreich auf `main` gepusht.
- Hosting und erstes Deployment auf Cloudflare abgeschlossen (von Kat bestätigt): https://grimoire.katcoded.de/ und https://little-grimoire.pages.dev/.
- Stage 01 und Stage 02 im Build Guide vollständig abgehakt.
- Hauptansichten unter `src/pages/`: Dashboard, Habits, DailyPlanner und Diary als getrennte, erkennbare Platzhalter-Komponenten.
- Navigation unter `src/components/Navigation.jsx`; vier Buttons ändern über `onViewChange` den `currentView`-State in `App.jsx`.
- Dashboard ist die Startansicht. Conditional Rendering zeigt jeweils genau die ausgewählte Hauptansicht.
- Stage 02 von Kat im Browser getestet; Code geprüft, Produktions-Build und Lint erfolgreich. Feature-Logik ist noch nicht implementiert.

## ➡️ NEXT STEP

Was ist der konkrete nächste Schritt?

> Stage 03 beginnen: überlegen, welche Daten ein Habit benötigt (Name, Zielhäufigkeit, aktueller Zähler und eindeutige ID). Danach State für die Habit-Liste anlegen und schrittweise Formular, Liste und einzelne Habit-Komponente aufbauen. Persistenz folgt erst in Stage 04.

## 🐛 KNOWN PROBLEMS

Was ist gerade kaputt, unklar oder nervig?

- Keine bekannten aktuellen Blocker.

## 🐇 PARKED SIDEQUESTS

Was ist uns eingefallen, gehört aber gerade nicht zum aktuellen Ziel?

- Keine konkreten Sidequests festgehalten. Zusätzliche Features bleiben bis nach den Kernfunktionen geparkt.

## 🧹 CLEANUP LATER

Was funktioniert, sollte später aber noch aufgeräumt/verbessert werden?

- README bei weiteren Fortschritten an den tatsächlichen Funktionsumfang anpassen; die Kernfeatures und localStorage sind noch nicht implementiert.
- Die Platzhalter verwenden bisher Text in `div`-Elementen. Beim Ausbau passende semantische Überschriften verwenden.

## 🧠 IMPORTANT CONTEXT

Was darf Future Kat beim Wiedereinstieg nicht vergessen?

- Savepoint: 2. Oktober 2026, nach Abschluss von Stage 02.
- Mit dem Instructor geklärt: Für dieses Soloprojekt direkt auf `main` arbeiten; Entwicklungs-Branches und Pull Requests sind nicht erforderlich.
- Kat schreibt den Application Code. Nabi unterstützt Planung, Erklärung, Prüfung, Git-Workflow und Dokumentation.
- Der konkrete Bauplan steht in `PROJECT_BUILD_GUIDE.md`; beim Wiedereinstieg mit dem ersten offenen Punkt von Stage 03 fortfahren.
