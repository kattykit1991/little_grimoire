# 🗺️ PROJECT BUILD GUIDE

STAGE 01 🦺 Bauvorbereitung
↓
STAGE 02 🏠 App-Grundgerüst
↓
STAGE 03 🌱 Habit Tracker
↓
STAGE 04 💾 Persistenz / localStorage
↓
STAGE 05 📊 Habit Progress + Activity
↓
STAGE 06 🗓 Daily Planner
↓
STAGE 07 📖 Diary
↓
STAGE 08 🏠 Dashboard mit echten Daten
↓
STAGE 09 ✨ Polish + Test + Final Deployment

## STAGE 01 · Bauvorbereitung

### 🎯 ZIEL

Was soll nach dieser Stage funktionieren?

> Die technische Grundlage für das Projekt steht. Die React-App läuft lokal, Styling und Komponenten-Library sind eingerichtet, das Projekt liegt in einem GitHub-Repository und eine erste leere bzw. minimale Version ist bereits erfolgreich deployed.

### 🧱 CODE-BAUSTEINE

Was müssen wir dafür können / vorbereiten / verstehen?

#### Vite-Projekt erstellen

```bash
npm create vite@latest <project-name> -- --template react
```

- `<project-name>` = Name bzw. Zielordner des Projekts
- `--template react` = React als Vite-Template verwenden

#### Dependencies installieren

```bash
npm install
```

Installiert die Dependencies, die in der `package.json` des Projekts eingetragen sind.

Ein zusätzliches Package kann allgemein so installiert werden:

```bash
npm install <package-name>
```

- `<package-name>` = das Package, das hinzugefügt werden soll

#### Git-Status prüfen

```bash
git status
```

Zeigt, welche Dateien neu, verändert oder bereits für einen Commit vorgemerkt sind.

#### Änderungen für einen Commit vorbereiten

```bash
git add .
```

Fügt die aktuellen Änderungen zur Staging Area hinzu.

#### Commit erstellen

```bash
git commit -m "<message>"
```

- `<message>` = kurze Beschreibung der Änderungen

#### Neuen Branch erstellen

```bash
git switch -c <branch-name>
```

- `<branch-name>` = Name des neuen Entwicklungs-Branches
- `-c` erstellt den Branch und wechselt direkt hinein

#### Änderungen zu GitHub pushen

```bash
git push
```

Überträgt lokale Commits zum verbundenen Remote Repository.

> TailwindCSS und DaisyUI werden anhand ihrer jeweiligen Setup-Anweisungen eingerichtet. Die konkreten Installationsschritte gehören zur Bauvorbereitung und werden beim Setup durchgeführt.

### 🔨 BAUEN

Was setzen wir in dieser Stage konkret zusammen?

- [x] Vite + React im Projektordner einrichten
- [x] Vite-Startprojekt bereinigen
- [x] Styling-Lösung einrichten
- [x] DaisyUI als Komponenten-Library einrichten
- [x] Git Repository initialisieren
- [x] öffentliches GitHub Repository erstellen und verbinden
- [x] Git-Workflow mit Instructor geklärt
      → Soloprojekt: direktes Arbeiten auf `main` ist okay
      → Pull Requests sind für dieses Projekt nicht erforderlich
- [x] Hosting einrichten
- [x] erste minimale Version deployen

Deployment auf Cloudflare:

- [grimoire.katcoded.de](https://grimoire.katcoded.de/)
- [little-grimoire.pages.dev](https://little-grimoire.pages.dev/)

### ✅ FERTIG, WENN

Woran erkennen wir konkret, dass diese Stage geschafft ist?

- [x] Die React-App startet lokal ohne Fehler.
- [x] Die gewählte Styling-/Komponenten-Lösung funktioniert.
- [x] Das Projekt liegt in einem öffentlichen GitHub Repository.
- [x] Der Git-Workflow ist mit dem Trainer geklärt: direktes Arbeiten auf `main`, keine Pull Requests erforderlich.
- [x] Die App ist über eine öffentliche Deployment-URL erreichbar.

---

## STAGE 02 · App-Grundgerüst

### 🎯 ZIEL

Was soll nach dieser Stage funktionieren?

> Das grundlegende Gerüst von Little Grimoire steht. Die Hauptbereiche der App existieren als eigene Komponenten und können über eine Navigation angezeigt werden. Das Dashboard ist die Startansicht. Die einzelnen Bereiche enthalten zunächst nur einfache Platzhalter und noch keine eigentliche Feature-Logik.

### 🧱 CODE-BAUSTEINE

Was müssen wir dafür können / vorbereiten / verstehen?

#### React-Komponente erstellen

```jsx
function ComponentName() {
  return <div>Content</div>;
}

export default ComponentName;
```

Eine React-Komponente ist eine JavaScript-Funktion, die JSX zurückgibt.

- `ComponentName` = Name der Komponente
- `return` = beschreibt, was die Komponente anzeigen soll
- `export default` = macht die Komponente für andere Dateien importierbar

---

#### Komponente importieren

```jsx
import ComponentName from "./path/ComponentName";
```

Importiert eine Komponente aus einer anderen Datei.

- `ComponentName` = importierte Komponente
- `"./path/ComponentName"` = relativer Pfad zu ihrer Datei

---

#### Komponente rendern

```jsx
<ComponentName />
```

Eine importierte Komponente kann wie ein eigenes HTML-Element in JSX verwendet werden.

Mehrere Komponenten können dadurch zu einer größeren Oberfläche zusammengesetzt werden.

---

#### State für einen veränderbaren Wert

```jsx
const [value, setValue] = useState(initialValue);
```

Mit `useState` kann sich eine Komponente einen Wert zwischen Render-Vorgängen merken.

- `value` = aktueller Wert
- `setValue` = Funktion zum Ändern des Wertes
- `initialValue` = Startwert

`useState` muss dafür aus React importiert werden:

```jsx
import { useState } from "react";
```

---

#### State durch ein Event verändern

```jsx
<button onClick={() => setValue(newValue)}>Button</button>
```

`onClick` führt beim Anklicken des Buttons eine Funktion aus.

Hier wird dabei:

```jsx
setValue(newValue);
```

aufgerufen und der gespeicherte State verändert.

Die Änderung des States löst anschließend ein neues Rendering der Komponente aus.

---

#### Conditional Rendering

Eine Komponente kann abhängig von einer Bedingung angezeigt werden:

```jsx
{
  value === expectedValue && <ComponentName />;
}
```

Dabei wird geprüft:

```jsx
value === expectedValue;
```

Ist die Bedingung `true`, wird die Komponente gerendert.

Ist sie `false`, wird sie nicht gerendert.

Dieses Muster kann mehrfach mit unterschiedlichen Bedingungen verwendet werden.

### 🔨 BAUEN

Was setzen wir in dieser Stage konkret zusammen?

Die Hauptbereiche werden in dieser Stage nur als erkennbare Platzhalter aufgebaut. Ihre eigentlichen Funktionen folgen in den späteren Stages. Ordner und Dateien entstehen erst beim jeweiligen Schritt; zukünftige Formulare, Listen und andere Feature-Komponenten müssen noch nicht angelegt werden.

**1. Mit einer Ansicht beginnen**

- [x] Ablage für Hauptansichten und gemeinsame UI-Komponenten überlegen
- [x] Dashboard-Komponente mit einer einfachen Überschrift erstellen; den benötigten Ordner dabei anlegen
- [x] Dashboard in `App.jsx` importieren und anzeigen
- [x] im Browser prüfen, ob der Dashboard-Platzhalter erscheint

**2. Die übrigen Ansichten vorbereiten**

- [x] Habit-Bereich als eigene Komponente mit einer einfachen Überschrift erstellen
- [x] Daily Planner als eigene Komponente mit einer einfachen Überschrift erstellen
- [x] Diary-Bereich als eigene Komponente mit einer einfachen Überschrift erstellen

**3. Den Ansichtswechsel aufbauen**

- [x] State für die ausgewählte Ansicht in `App.jsx` anlegen; Dashboard als Startwert verwenden
- [x] Hauptansichten importieren und abhängig vom State genau eine davon anzeigen
- [x] Navigation-Komponente mit Buttons für die vier Hauptansichten erstellen; den benötigten Ordner dabei anlegen
- [x] Navigation in `App.jsx` einbinden und ihr eine Funktion zum Wechseln der Ansicht übergeben
- [x] Klicks auf die Navigationsbuttons mit dieser Funktion verbinden

**4. Das Grundgerüst prüfen**

- [x] prüfen, ob beim Start das Dashboard angezeigt wird
- [x] alle Navigationsbuttons ausprobieren und prüfen, ob jeweils nur die passende Ansicht erscheint

### ✅ FERTIG, WENN

Woran erkennen wir konkret, dass diese Stage geschafft ist?

- [x] Die App startet ohne Fehler.
- [x] Das Dashboard wird beim Start der App angezeigt.
- [x] Dashboard, Habits, Daily Planner und Diary existieren als getrennte Komponenten.
- [x] Alle Hauptbereiche sind über die Navigation erreichbar.
- [x] Beim Wechsel der Navigation wird nur der ausgewählte Hauptbereich angezeigt.
- [x] Die einzelnen Bereiche benötigen noch keine Feature-Logik.

## STAGE 03 · Habit Tracker

### 🎯 ZIEL

Was soll nach dieser Stage funktionieren?

> Der grundlegende Habit Tracker funktioniert. Neue Habits können mit einem eigenen Namen und einer Zielhäufigkeit angelegt und anschließend als Liste angezeigt werden. Für jedes Habit gibt es einen eigenen Zähler, der erhöht und verringert werden kann. Die Daten müssen in dieser Stage noch nicht nach einem Neuladen erhalten bleiben.

### 🧱 CODE-BAUSTEINE

Was müssen wir dafür können / vorbereiten / verstehen?

#### Kontrolliertes Input-Feld

```jsx
const [value, setValue] = useState("");

<input value={value} onChange={(event) => setValue(event.target.value)} />;
```

Bei einem kontrollierten Input liegt der aktuelle Wert im React-State.

- `value` = aktueller Wert des Eingabefeldes
- `onChange` = reagiert darauf, wenn sich die Eingabe verändert
- `event.target.value` = der neue Wert des Eingabefeldes
- `setValue(...)` = speichert diesen Wert im State

---

#### Formular absenden

```jsx
function handleSubmit(event) {
  event.preventDefault();
}

<form onSubmit={handleSubmit}>
  {/* Eingabefelder */}
  <button type="submit">Submit</button>
</form>;
```

- `onSubmit` reagiert auf das Absenden des Formulars
- `event.preventDefault()` verhindert das normale Neuladen der Seite
- `type="submit"` löst das Submit-Event des Formulars aus

---

#### Ein Objekt erstellen

```jsx
const newItem = {
  id: crypto.randomUUID(),
  name: value,
  target: number,
};
```

Ein Objekt kann mehrere zusammengehörige Informationen speichern.

- `id` = eindeutige Kennzeichnung des Eintrags
- `crypto.randomUUID()` = erzeugt eine eindeutige ID
- Properties wie `name` oder `target` speichern die einzelnen Informationen
- die Werte können aus State, Eingaben oder anderen Variablen stammen

---

#### Array-State um einen Eintrag erweitern

```jsx
setItems((currentItems) => [...currentItems, newItem]);
```

Dabei wird das vorhandene Array nicht direkt verändert.

- `currentItems` = bisheriger State
- `...currentItems` = übernimmt alle bisherigen Einträge
- `newItem` = fügt den neuen Eintrag hinzu
- daraus entsteht ein neues Array

---

#### Array mit `.map()` rendern

```jsx
{
  items.map((item) => <ComponentName key={item.id} item={item} />);
}
```

`.map()` geht durch die Einträge eines Arrays und kann für jeden Eintrag JSX erzeugen.

- `item` = der gerade betrachtete Eintrag
- `key` = eindeutige Kennzeichnung für React
- über Props können die Daten an eine andere Komponente weitergegeben werden

---

#### Props an eine Kind-Komponente übergeben

```jsx
<ComponentName value={someValue} onAction={someFunction} />
```

Die Kind-Komponente kann diese Props entgegennehmen:

```jsx
function ComponentName({ value, onAction }) {
  // ...
}
```

Dadurch können:

- Daten an eine Kind-Komponente weitergegeben werden
- Funktionen weitergegeben werden, die dort durch ein Event ausgelöst werden können

---

#### Einen bestimmten Eintrag in einem Array aktualisieren

```jsx
setItems((currentItems) =>
  currentItems.map((item) =>
    item.id === targetId ? { ...item, value: item.value + 1 } : item,
  ),
);
```

Dieses Muster erstellt ein neues Array und verändert darin nur den passenden Eintrag.

- `.map()` betrachtet jeden Eintrag
- `item.id === targetId` sucht den gewünschten Eintrag
- `{ ...item }` übernimmt dessen bisherige Properties
- eine einzelne Property kann dabei überschrieben werden
- alle anderen Einträge bleiben unverändert

### 🔨 BAUEN

Was setzen wir in dieser Stage konkret zusammen?

- [x] überlegen, welche Daten ein Habit für diese Stage benötigt
- [x] State für die Habit-Liste anlegen
- [x] Formular-Komponente für neue Habits erstellen
- [x] kontrollierte Eingabefelder für Name und Zielhäufigkeit verwenden
- [x] aus den Formulardaten ein neues Habit erzeugen
- [x] neues Habit zur Habit-Liste hinzufügen
- [x] Listen-Komponente für die Habits erstellen
- [x] einzelne Habit-Komponente erstellen
- [x] Habit-Liste mit `.map()` anzeigen
- [x] aktuellen Zähler eines Habits anzeigen
- [x] Zähler eines einzelnen Habits erhöhen können
- [x] Zähler eines einzelnen Habits verringern können

### ✅ FERTIG, WENN

Woran erkennen wir konkret, dass diese Stage geschafft ist?

- [x] Ein neues Habit kann mit eigenem Namen angelegt werden.
- [x] Für ein Habit kann eine Zielhäufigkeit festgelegt werden.
- [x] Mehrere Habits können gleichzeitig angezeigt werden.
- [x] Jedes Habit zeigt seinen aktuellen Zähler und sein Ziel an.
- [x] Der Zähler eines einzelnen Habits kann erhöht werden.
- [x] Der Zähler eines einzelnen Habits kann verringert werden.
- [x] Änderungen an einem Habit verändern nicht versehentlich andere Habits.
- [x] Nach einem Neuladen dürfen die Daten in dieser Stage noch verschwinden.

## STAGE 04 · Persistenz / localStorage

### 🎯 ZIEL

Was soll nach dieser Stage funktionieren?

> Die Habit-Daten bleiben auch nach einem Neuladen der App erhalten. Änderungen an der Habit-Liste werden im localStorage gespeichert und vorhandene Daten werden beim Start der App wieder geladen.

### 🧱 CODE-BAUSTEINE

Was müssen wir dafür können / vorbereiten / verstehen?

#### Daten im localStorage speichern

```js
localStorage.setItem("key", value);
```

`localStorage` speichert Daten dauerhaft im Browser.

- `"key"` = Name, unter dem der Wert gespeichert wird
- `value` = zu speichernder Wert
- localStorage speichert Werte als Strings

---

#### Objekte oder Arrays in einen String umwandeln

```js
const storedValue = JSON.stringify(value);
```

`JSON.stringify()` wandelt JavaScript-Daten in einen JSON-String um.

Dadurch können zum Beispiel:

- Arrays
- Objekte

im localStorage gespeichert werden.

Beides lässt sich kombinieren:

```js
localStorage.setItem("key", JSON.stringify(value));
```

---

#### Daten aus dem localStorage lesen

```js
const storedValue = localStorage.getItem("key");
```

`localStorage.getItem()` liest einen gespeicherten Wert.

Existiert unter diesem Key noch nichts, ist das Ergebnis:

```js
null;
```

---

#### JSON-String wieder in JavaScript-Daten umwandeln

```js
const value = JSON.parse(storedValue);
```

`JSON.parse()` macht aus einem gespeicherten JSON-String wieder verwendbare JavaScript-Daten.

Zum Beispiel wird aus einem gespeicherten Array-String wieder ein echtes Array.

---

#### Gespeicherte Daten mit einem Fallback laden

```js
const storedValue = localStorage.getItem("key");

const initialValue = storedValue ? JSON.parse(storedValue) : fallbackValue;
```

Damit kann geprüft werden, ob bereits gespeicherte Daten vorhanden sind.

- Daten vorhanden → gespeicherten Wert verwenden
- keine Daten vorhanden → einen festgelegten Startwert verwenden

---

#### Code nach einem Render ausführen

```jsx
useEffect(() => {
  // Code
}, [dependency]);
```

`useEffect` führt Code nach dem Rendern einer Komponente aus.

Das Dependency Array bestimmt, wann der Effect erneut ausgeführt wird.

```jsx
[dependency];
```

bedeutet:

> Führe den Effect erneut aus, wenn sich dieser Wert verändert.

`useEffect` muss aus React importiert werden:

```jsx
import { useEffect } from "react";
```

---

#### State-Änderungen automatisch speichern

```jsx
useEffect(() => {
  localStorage.setItem("key", JSON.stringify(value));
}, [value]);
```

Dieses Muster verbindet React-State mit localStorage.

Wenn sich `value` verändert:

1. React rendert erneut.
2. Der Effect wird ausgeführt.
3. Der aktuelle Wert wird gespeichert.

### 🔨 BAUEN

Was setzen wir in dieser Stage konkret zusammen?

- [x] einen eindeutigen localStorage-Key für die Habit-Daten festlegen
- [x] prüfen, ob beim Start bereits gespeicherte Habit-Daten existieren
- [x] vorhandene Habit-Daten beim Start laden
- [x] ohne gespeicherte Daten mit einer leeren Habit-Liste starten
- [x] Änderungen an der Habit-Liste im localStorage speichern
- [x] prüfen, ob neu angelegte Habits nach einem Reload erhalten bleiben
- [x] prüfen, ob veränderte Habit-Zähler nach einem Reload erhalten bleiben

### ✅ FERTIG, WENN

Woran erkennen wir konkret, dass diese Stage geschafft ist?

- [x] Habits bleiben nach einem Neuladen der Seite erhalten.
- [x] Name und Zielhäufigkeit eines Habits bleiben erhalten.
- [x] Der aktuelle Zähler eines Habits bleibt erhalten.
- [x] Mehrere Habits werden vollständig wiederhergestellt.
- [x] Beim ersten Start ohne gespeicherte Daten funktioniert die App weiterhin ohne Fehler.
- [x] Änderungen am Habit-State werden automatisch im localStorage gespeichert.

## STAGE 05 · Habit Progress + Activity

### 🎯 ZIEL

Was soll nach dieser Stage funktionieren?

> Der Habit Tracker zeigt den täglichen Fortschritt sichtbar an. Ein Habit wird als abgeschlossen erkannt, sobald sein aktueller Zähler das festgelegte Ziel erreicht. Zusätzlich wird der Gesamtfortschritt des Tages berechnet und eine Activity History aufgebaut, die den täglichen Habit-Fortschritt über mehrere Tage hinweg sichtbar machen kann.

### 🧱 CODE-BAUSTEINE

Was müssen wir dafür können / vorbereiten / verstehen?

#### Einen Zielwert prüfen

```js
const isComplete = currentValue >= targetValue;
```

Ein Vergleich kann verwendet werden, um einen Zustand aus vorhandenen Daten abzuleiten.

- `currentValue` = aktueller Wert
- `targetValue` = festgelegtes Ziel
- `>=` prüft, ob der aktuelle Wert mindestens so groß wie das Ziel ist
- `isComplete` enthält anschließend `true` oder `false`

---

#### Array nach einer Bedingung filtern

```js
const matchingItems = items.filter((item) => item.value >= item.target);
```

`.filter()` erstellt ein neues Array, das nur Einträge enthält, für die die Bedingung `true` ergibt.

Die Anzahl dieser Einträge kann anschließend über:

```js
matchingItems.length;
```

ermittelt werden.

---

#### Fortschritt als Verhältnis berechnen

```js
const progress = total > 0 ? completed / total : 0;
```

Damit kann aus zwei Zahlen ein Fortschrittswert berechnet werden.

Beispiele:

```text
0 / 4 → 0
1 / 4 → 0.25
2 / 4 → 0.5
4 / 4 → 1
```

Die Prüfung `total > 0` verhindert eine Division durch `0`.

---

#### Bedingte CSS-Klasse verwenden

```jsx
<div className={condition ? "completed" : "default"}>Content</div>
```

Mit einem ternären Operator kann abhängig von einer Bedingung eine andere CSS-Klasse verwendet werden.

```js
condition ? valueIfTrue : valueIfFalse;
```

bedeutet:

> Wenn die Bedingung wahr ist, verwende den ersten Wert.  
> Andernfalls verwende den zweiten.

---

#### Einen dynamischen Property-Namen in einem Objekt verwenden

```js
const key = "some-key";

const data = {
  [key]: value,
};
```

Die eckigen Klammern erlauben es, den Inhalt einer Variablen als Property-Namen zu verwenden.

Das ist beispielsweise nützlich, wenn Daten unter dynamisch erzeugten Schlüsseln gespeichert werden sollen.

---

#### Bestehendes Objekt um einen Eintrag erweitern oder aktualisieren

```js
const updatedData = {
  ...currentData,
  [key]: newValue,
};
```

- `...currentData` übernimmt die bisherigen Properties
- `[key]` bestimmt die Property, die hinzugefügt oder überschrieben werden soll
- `newValue` wird unter diesem Key gespeichert

Andere vorhandene Properties bleiben erhalten.

---

#### Aktuelles Datum als speicherbaren Schlüssel erzeugen

```js
const dateKey = new Date().toISOString().split("T")[0];
```

Das erzeugt einen String im Format:

```text
YYYY-MM-DD
```

Zum Beispiel:

```text
2026-10-01
```

Ein einheitliches Datumsformat kann verwendet werden, um Daten bestimmten Tagen zuzuordnen.

---

#### Objekt-Einträge durchlaufen

```js
Object.entries(data).map(([key, value]) => (
  <ComponentName key={key} value={value} />
));
```

`Object.entries()` verwandelt die Properties eines Objekts in Paare aus:

```text
[key, value]
```

Diese können anschließend beispielsweise mit `.map()` gerendert werden.

---

#### Daten abhängig von einem berechneten Wert darstellen

```jsx
<div data-level={level}>Content</div>
```

Berechnete Werte können als Attribute oder Props an Elemente weitergegeben werden.

Dadurch kann die Darstellung später abhängig von verschiedenen Fortschrittsstufen gestaltet werden.

### 🔨 BAUEN

Was setzen wir in dieser Stage konkret zusammen?

- [x] erkennen, ob ein einzelnes Habit sein Tagesziel erreicht hat
- [x] Darstellung eines abgeschlossenen Habits sichtbar verändern
- [ ] Anzahl der abgeschlossenen Habits berechnen
- [ ] Gesamtzahl der Habits bestimmen
- [ ] täglichen Gesamtfortschritt anzeigen
- [ ] überlegen, welche Zusammenfassung eines Tages für die Activity History gespeichert werden muss
- [ ] Tagesfortschritt einem eindeutigen Datum zuordnen
- [ ] Activity History dauerhaft speichern
- [ ] vorhandene Activity History beim Start laden
- [ ] Activity-Übersicht aus den gespeicherten Tagesdaten erzeugen
- [ ] unterschiedliche Fortschrittsstufen in der Activity sichtbar darstellen

### ✅ FERTIG, WENN

Woran erkennen wir konkret, dass diese Stage geschafft ist?

- [x] Ein Habit wird als abgeschlossen erkannt, sobald sein Ziel erreicht oder überschritten wurde.
- [x] Abgeschlossene Habits unterscheiden sich sichtbar von noch offenen Habits.
- [ ] Der Gesamtfortschritt des aktuellen Tages wird angezeigt.
- [ ] Der Tagesfortschritt kann als Verhältnis von abgeschlossenen zu vorhandenen Habits bestimmt werden.
- [ ] Der Fortschritt eines Tages wird unter dem passenden Datum gespeichert.
- [ ] Bereits gespeicherte Tage bleiben nach einem Neuladen erhalten.
- [ ] Mehrere Tage können in der Activity History dargestellt werden.
- [ ] Unterschiedliche Fortschrittsstufen sind in der Activity-Übersicht visuell unterscheidbar.

## STAGE 06 · Daily Planner

### 🎯 ZIEL

Was soll nach dieser Stage funktionieren?

> Der Daily Planner stellt für jeden Kalendertag eine eigene Tagesseite bereit. Jeder Tag kann einen Today's Focus, eine To-do-Liste und Little Notes enthalten. Zwischen verschiedenen Tagen kann gewechselt werden, ohne dass die bereits eingetragenen Inhalte verloren gehen. Die Planner-Daten werden dauerhaft im localStorage gespeichert.

### 🧱 CODE-BAUSTEINE

Was müssen wir dafür können / vorbereiten / verstehen?

#### Datum in einem Input auswählen

```jsx
<input
  type="date"
  value={value}
  onChange={(event) => setValue(event.target.value)}
/>
```

Ein Input mit `type="date"` ermöglicht die Auswahl eines Kalendertages.

Der Wert wird dabei als String im Format:

```text
YYYY-MM-DD
```

bereitgestellt.

Durch `value` und `onChange` kann auch ein Datumsfeld als kontrolliertes Input verwendet werden.

---

#### Daten über einen dynamischen Schlüssel lesen

```js
const selectedData = data[key];
```

Mit der Bracket Notation kann eine Property über den Inhalt einer Variablen angesprochen werden.

Beispiel:

```js
const key = "2026-10-01";
const selectedData = data[key];
```

Dadurch können unterschiedliche Datensätze über einen dynamischen Schlüssel ausgewählt werden.

---

#### Fallback verwenden, wenn noch keine Daten existieren

```js
const selectedData = data[key] ?? fallbackValue;
```

Der Nullish Coalescing Operator `??` verwendet den rechten Wert, wenn der linke Wert:

```js
null;
```

oder:

```js
undefined;
```

ist.

Dadurch kann für noch nicht vorhandene Einträge ein Startwert verwendet werden.

---

#### Einzelne Property eines Objekts aktualisieren

```js
const updatedValue = {
  ...currentValue,
  property: newValue,
};
```

- `...currentValue` übernimmt die bisherigen Properties
- `property` wird mit dem neuen Wert überschrieben
- andere Properties bleiben unverändert

---

#### Verschachtelte Daten aktualisieren

```js
const updatedData = {
  ...currentData,
  [key]: {
    ...currentData[key],
    property: newValue,
  },
};
```

Dieses Muster kann verwendet werden, wenn ein Objekt mehrere Datensätze enthält und nur ein bestimmter Datensatz verändert werden soll.

Dabei werden:

1. die bisherigen Daten übernommen
2. der Eintrag unter `[key]` ausgewählt
3. dessen bisherige Properties übernommen
4. eine bestimmte Property aktualisiert

---

#### Ein neues Element zu einer Liste hinzufügen

```js
const updatedItems = [
  ...currentItems,
  {
    id: crypto.randomUUID(),
    value: newValue,
  },
];
```

Das bestehende Array wird übernommen und um ein neues Objekt erweitert.

Eine eindeutige `id` hilft dabei, einzelne Listeneinträge später gezielt zu finden oder zu verändern.

---

#### Boolean-Wert eines bestimmten Listeneintrags ändern

```js
const updatedItems = currentItems.map((item) =>
  item.id === targetId ? { ...item, completed: !item.completed } : item,
);
```

`!` kehrt einen Boolean-Wert um:

```text
true  → false
false → true
```

Dadurch kann beispielsweise ein Zustand zwischen zwei Möglichkeiten umgeschaltet werden.

---

#### Einen bestimmten Eintrag aus einem Array entfernen

```js
const updatedItems = currentItems.filter((item) => item.id !== targetId);
```

`.filter()` erstellt ein neues Array.

Hier bleiben nur die Einträge erhalten, deren `id` nicht der gesuchten ID entspricht.

---

#### Daten im localStorage speichern

```js
localStorage.setItem("key", JSON.stringify(value));
```

#### Daten aus dem localStorage laden

```js
const storedValue = localStorage.getItem("key");

const value = storedValue ? JSON.parse(storedValue) : fallbackValue;
```

Diese bereits bekannten Muster können für einen weiteren dauerhaft gespeicherten Datenbereich wiederverwendet werden.

### 🔨 BAUEN

Was setzen wir in dieser Stage konkret zusammen?

- [ ] überlegen, welche Daten zu einer einzelnen Tagesseite gehören
- [ ] Datenstruktur entwickeln, in der Planner-Daten einem Datum zugeordnet werden können
- [ ] aktuellen bzw. ausgewählten Tag im State verwalten
- [ ] beim Öffnen des Planners den aktuellen Tag anzeigen
- [ ] Möglichkeit zum Wechseln des ausgewählten Tages einbauen
- [ ] ausgewähltes Datum sichtbar anzeigen
- [ ] Bereich für Today's Focus erstellen
- [ ] Today's Focus für den ausgewählten Tag bearbeiten können
- [ ] To-do-Bereich erstellen
- [ ] neue To-dos hinzufügen können
- [ ] einzelne To-dos als erledigt bzw. offen markieren können
- [ ] einzelne To-dos entfernen können
- [ ] Bereich für Little Notes erstellen
- [ ] Little Notes für den ausgewählten Tag bearbeiten können
- [ ] Planner-Daten getrennt nach Datum speichern
- [ ] Planner-Daten im localStorage speichern
- [ ] vorhandene Planner-Daten beim Start wieder laden

### ✅ FERTIG, WENN

Woran erkennen wir konkret, dass diese Stage geschafft ist?

- [ ] Beim Öffnen des Daily Planners wird der aktuelle Tag angezeigt.
- [ ] Ein anderer Kalendertag kann ausgewählt werden.
- [ ] Jeder Tag besitzt einen eigenen Today's Focus.
- [ ] Jeder Tag besitzt eine eigene To-do-Liste.
- [ ] To-dos können hinzugefügt, abgehakt und entfernt werden.
- [ ] Jeder Tag besitzt eigene Little Notes.
- [ ] Inhalte verschiedener Tage überschreiben sich nicht gegenseitig.
- [ ] Beim Wechsel zwischen Tagen erscheinen die jeweils passenden Inhalte.
- [ ] Planner-Daten bleiben nach einem Neuladen der App erhalten.

## STAGE 07 · Diary

### 🎯 ZIEL

Was soll nach dieser Stage funktionieren?

> Das Diary ermöglicht das Erstellen und dauerhafte Speichern persönlicher Tagebucheinträge. Ein Eintrag besteht aus Titel, Datum, Bild-URL und Inhalt. Gespeicherte Einträge werden mit dem neuesten Eintrag zuerst als Karten angezeigt. Über eine Karte kann der vollständige Eintrag geöffnet werden. Pro Kalendertag kann maximal ein Diary-Eintrag erstellt werden.

### 🧱 CODE-BAUSTEINE

Was müssen wir dafür können / vorbereiten / verstehen?

#### Mehrere kontrollierte Eingabefelder verwenden

```jsx
const [value, setValue] = useState("");

<input value={value} onChange={(event) => setValue(event.target.value)} />;
```

Dasselbe Grundmuster kann für mehrere voneinander unabhängige Eingabefelder verwendet werden.

Für längeren Text kann statt eines Inputs beispielsweise ein `textarea` verwendet werden:

```jsx
<textarea value={value} onChange={(event) => setValue(event.target.value)} />
```

---

#### Prüfen, ob mehrere Werte vorhanden sind

```js
const isValid = valueA && valueB && valueC;
```

Der Ausdruck ergibt nur dann einen truthy Wert, wenn alle angegebenen Werte vorhanden sind.

Damit kann beispielsweise geprüft werden, ob benötigte Eingaben ausgefüllt wurden.

---

#### Prüfen, ob bereits ein passender Eintrag existiert

```js
const exists = items.some((item) => item.property === expectedValue);
```

`.some()` prüft, ob mindestens ein Eintrag im Array die angegebene Bedingung erfüllt.

Das Ergebnis ist ein Boolean:

```text
true
false
```

---

#### Ein Modal abhängig von State anzeigen

```jsx
const [isOpen, setIsOpen] = useState(false);

{
  isOpen && <ComponentName />;
}
```

Der Boolean-State bestimmt, ob die Komponente angezeigt wird.

Öffnen:

```js
setIsOpen(true);
```

Schließen:

```js
setIsOpen(false);
```

---

#### Ausgewählten Eintrag im State speichern

```jsx
const [selectedItem, setSelectedItem] = useState(null);
```

Ein State kann statt eines einfachen Booleans auch den aktuell ausgewählten Datensatz enthalten.

Auswählen:

```js
setSelectedItem(item);
```

Auswahl entfernen:

```js
setSelectedItem(null);
```

Damit kann eine Detailansicht wissen, welche Daten sie anzeigen soll.

---

#### Daten an eine Detail-Komponente weitergeben

```jsx
<ComponentName item={selectedItem} />
```

Die Kind-Komponente kann den Wert als Prop entgegennehmen:

```jsx
function ComponentName({ item }) {
  // ...
}
```

Dadurch kann dieselbe Detail-Komponente unterschiedliche Datensätze anzeigen.

---

#### Array nach einem Wert sortieren

```js
const sortedItems = [...items].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
);
```

`sort()` verändert normalerweise das ursprüngliche Array.

Deshalb wird mit:

```js
[...items];
```

zuerst eine Kopie erstellt.

Der Vergleich mit den Datumswerten sorgt dafür, dass neuere Einträge vor älteren stehen.

---

#### Bild über eine URL anzeigen

```jsx
<img src={imageUrl} alt={description} />
```

- `src` enthält die Bild-URL
- `alt` beschreibt das Bild, falls es nicht angezeigt werden kann und unterstützt die Barrierefreiheit

---

#### Gespeicherte Daten wiederverwenden

Speichern:

```js
localStorage.setItem("key", JSON.stringify(value));
```

Laden:

```js
const storedValue = localStorage.getItem("key");

const value = storedValue ? JSON.parse(storedValue) : fallbackValue;
```

Das bekannte localStorage-Muster kann auch für einen weiteren Datenbereich der App verwendet werden.

### 🔨 BAUEN

Was setzen wir in dieser Stage konkret zusammen?

- [ ] überlegen, welche Daten ein Diary-Eintrag benötigt
- [ ] State für die Diary-Einträge anlegen
- [ ] Button zum Erstellen eines neuen Eintrags hinzufügen
- [ ] Modal zum Erstellen eines Eintrags bauen
- [ ] kontrollierte Eingabefelder für Titel, Datum, Bild-URL und Inhalt verwenden
- [ ] prüfen, ob alle benötigten Felder ausgefüllt sind
- [ ] prüfen, ob für das gewählte Datum bereits ein Eintrag existiert
- [ ] gültigen Diary-Eintrag zur Sammlung hinzufügen
- [ ] Creation Modal nach erfolgreichem Speichern schließen
- [ ] gespeicherte Diary-Einträge mit dem neuesten Eintrag zuerst anzeigen
- [ ] Kartenansicht für einzelne Diary-Einträge erstellen
- [ ] auf einer Karte mindestens Bild, Datum und Titel anzeigen
- [ ] angeklickten Diary-Eintrag als ausgewählten Eintrag speichern
- [ ] Detail-Modal für einen ausgewählten Eintrag erstellen
- [ ] im Detail-Modal den vollständigen Diary-Eintrag anzeigen
- [ ] Detail-Modal wieder schließen können
- [ ] Diary-Einträge im localStorage speichern
- [ ] vorhandene Diary-Einträge beim Start wieder laden

### ✅ FERTIG, WENN

Woran erkennen wir konkret, dass diese Stage geschafft ist?

- [ ] Über einen Button kann ein neuer Diary-Eintrag begonnen werden.
- [ ] Das Erstellen findet in einem Modal statt.
- [ ] Ein Eintrag enthält Titel, Datum, Bild-URL und Inhalt.
- [ ] Ein Eintrag kann nur gespeichert werden, wenn alle benötigten Felder ausgefüllt sind.
- [ ] Für denselben Kalendertag kann kein zweiter Eintrag angelegt werden.
- [ ] Gespeicherte Einträge erscheinen mit dem neuesten Eintrag zuerst.
- [ ] Eine Diary-Karte zeigt Bild, Datum und Titel.
- [ ] Durch Anklicken einer Karte kann der vollständige Eintrag geöffnet werden.
- [ ] Die Detailansicht kann wieder geschlossen werden.
- [ ] Diary-Einträge bleiben nach einem Neuladen der App erhalten.

## STAGE 08 · Dashboard mit echten Daten

### 🎯 ZIEL

Was soll nach dieser Stage funktionieren?

> Das Dashboard wird zur kompakten Startseite von Little Grimoire. Es führt die bereits vorhandenen Informationen aus Habit Tracker, Daily Planner und Diary für den aktuellen Tag zusammen, ohne deren Feature-Logik zu duplizieren. Dadurch ist auf einen Blick sichtbar, was heute wichtig ist und wie der aktuelle Stand aussieht.

### 🧱 CODE-BAUSTEINE

Was müssen wir dafür können / vorbereiten / verstehen?

#### State in einer gemeinsamen Eltern-Komponente verwalten

```jsx
const [value, setValue] = useState(initialValue);

return (
  <>
    <ComponentA value={value} setValue={setValue} />
    <ComponentB value={value} />
  </>
);
```

Wenn mehrere Komponenten dieselben Daten benötigen, kann der State in einer gemeinsamen Eltern-Komponente liegen.

Die Daten und benötigten Funktionen werden anschließend über Props an die Kind-Komponenten weitergegeben.

Dieses Prinzip wird häufig als **Lifting State Up** bezeichnet.

---

#### Mehrere Props an eine Komponente übergeben

```jsx
<ComponentName valueA={valueA} valueB={valueB} valueC={valueC} />
```

Die Komponente kann die Props entgegennehmen:

```jsx
function ComponentName({ valueA, valueB, valueC }) {
  // ...
}
```

Dadurch kann eine Komponente Informationen aus mehreren Datenquellen erhalten.

---

#### Werte aus vorhandenen Daten ableiten

```js
const derivedValue = items.filter((item) => condition).length;
```

Nicht jeder Wert muss als eigener State gespeichert werden.

Wenn eine Information vollständig aus bereits vorhandenem State berechnet werden kann, kann sie direkt daraus abgeleitet werden.

---

#### Einen bestimmten Eintrag suchen

```js
const matchingItem = items.find((item) => item.property === expectedValue);
```

`.find()` durchsucht ein Array und gibt den ersten Eintrag zurück, der die Bedingung erfüllt.

Wird kein passender Eintrag gefunden, ist das Ergebnis:

```js
undefined;
```

---

#### Daten über einen Schlüssel auswählen

```js
const selectedValue = data[key];
```

Wenn Daten in einem Objekt unter eindeutigen Schlüsseln gespeichert sind, kann über den passenden Schlüssel gezielt auf einen Eintrag zugegriffen werden.

Mit einem Fallback:

```js
const selectedValue = data[key] ?? fallbackValue;
```

kann auch der Fall behandelt werden, dass noch keine Daten vorhanden sind.

---

#### Optionalen Inhalt anzeigen

```jsx
{
  value ? <ComponentName value={value} /> : <p>No content yet.</p>;
}
```

Ein ternärer Operator kann verwendet werden, wenn je nach vorhandenen Daten unterschiedliche Inhalte angezeigt werden sollen.

Das ist beispielsweise hilfreich, wenn eine Zusammenfassung entweder vorhandene Informationen oder einen leeren Zustand anzeigen soll.

---

#### Werte nur zur Anzeige formatieren

```js
const displayValue = `${current} / ${total}`;
```

Bereits vorhandene Daten können für die Benutzeroberfläche in eine leichter lesbare Form gebracht werden, ohne die ursprünglichen Daten zu verändern.

### 🔨 BAUEN

Was setzen wir in dieser Stage konkret zusammen?

- [ ] prüfen, welche Daten aus Habits, Daily Planner und Diary das Dashboard benötigt
- [ ] gemeinsamen State dort platzieren, wo mehrere Hauptbereiche darauf zugreifen können
- [ ] benötigte Daten und Funktionen über Props an die jeweiligen Komponenten weitergeben
- [ ] aktuelles Datum auf dem Dashboard anzeigen
- [ ] Today's Focus des aktuellen Tages aus dem Daily Planner anzeigen
- [ ] heutige To-dos bzw. eine kompakte To-do-Zusammenfassung anzeigen
- [ ] aktuellen Habit-Fortschritt anzeigen
- [ ] Anzahl abgeschlossener und vorhandener Habits anzeigen
- [ ] vorhandenen Diary-Eintrag des aktuellen Tages finden
- [ ] bei vorhandenem Diary-Eintrag eine kompakte Vorschau anzeigen
- [ ] sinnvolle Empty States anzeigen, wenn für einen Bereich heute noch keine Daten existieren
- [ ] sicherstellen, dass das Dashboard vorhandene Daten nur zusammenfasst und keine zweite getrennte Datenquelle erzeugt

### ✅ FERTIG, WENN

Woran erkennen wir konkret, dass diese Stage geschafft ist?

- [ ] Das Dashboard ist weiterhin die Startansicht der App.
- [ ] Das aktuelle Datum wird angezeigt.
- [ ] Der Today's Focus des aktuellen Tages wird aus den vorhandenen Planner-Daten angezeigt.
- [ ] Die heutigen To-dos werden kompakt zusammengefasst.
- [ ] Der aktuelle Habit-Fortschritt wird angezeigt.
- [ ] Das Dashboard zeigt, wie viele Habits bereits abgeschlossen sind.
- [ ] Ein vorhandener Diary-Eintrag des aktuellen Tages kann auf dem Dashboard zusammengefasst werden.
- [ ] Fehlende Tagesdaten führen nicht zu Fehlern und werden sinnvoll dargestellt.
- [ ] Änderungen in den jeweiligen Bereichen werden auch auf dem Dashboard sichtbar, ohne dieselben Daten separat pflegen zu müssen.

## STAGE 09 · Polish + Test + Final Deployment

### 🎯 ZIEL

Was soll nach dieser Stage funktionieren?

> Little Grimoire wird für die Abgabe fertiggestellt. Die vorhandenen Funktionen werden getestet, kleinere Fehler behoben und die Oberfläche konsistent und responsive gestaltet. Anschließend wird eine produktionsfertige Version erstellt, direkt auf `main` committet und gepusht und final deployed.

### 🧱 CODE-BAUSTEINE

Was müssen wir dafür können / vorbereiten / verstehen?

#### Formularfelder als erforderlich markieren

```jsx
<input required />
```

Das HTML-Attribut `required` verhindert das normale Absenden eines Formulars, solange das Feld leer ist.

Dasselbe funktioniert beispielsweise auch bei:

```jsx
<textarea required />
```

Für komplexere Prüfungen kann zusätzlich eigene JavaScript-Logik verwendet werden.

---

#### Button abhängig von einem Zustand deaktivieren

```jsx
<button disabled={!condition}>Action</button>
```

`disabled` bestimmt, ob ein Button verwendet werden kann.

Mit:

```js
!condition;
```

wird der Boolean-Wert einer Bedingung umgekehrt.

Dadurch kann eine Aktion beispielsweise deaktiviert werden, solange notwendige Voraussetzungen noch nicht erfüllt sind.

---

#### Einen Fallback-Inhalt anzeigen

```jsx
{
  items.length === 0 ? <p>No entries yet.</p> : <ComponentName />;
}
```

Eine Benutzeroberfläche sollte auch dann sinnvoll funktionieren, wenn noch keine Daten vorhanden sind.

Solche Zustände werden häufig als **Empty States** bezeichnet.

---

#### Responsive CSS mit einer Media Query

```css
.container {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

Mit einer Media Query kann sich ein Layout abhängig von der verfügbaren Bildschirmbreite verändern.

Dadurch kann dieselbe Oberfläche auf kleineren und größeren Geräten sinnvoll dargestellt werden.

---

#### Wiederkehrende CSS-Werte als Variablen definieren

```css
:root {
  --spacing-small: 0.5rem;
  --spacing-medium: 1rem;
  --border-radius: 0.5rem;
}
```

CSS Custom Properties können wiederkehrende Werte zentral speichern.

Verwendung:

```css
.element {
  padding: var(--spacing-medium);
  border-radius: var(--border-radius);
}
```

Dadurch lassen sich wiederkehrende Designentscheidungen konsistenter verwenden.

---

#### Produktions-Build erstellen

```bash
npm run build
```

Vite erstellt damit eine optimierte Version der App für die Veröffentlichung.

Bei einem erfolgreichen Build entsteht standardmäßig der Ordner:

```text
dist/
```

Dieser enthält die fertigen statischen Dateien der App.

---

#### Produktions-Build lokal prüfen

```bash
npm run preview
```

Damit kann der zuvor erstellte Produktions-Build lokal gestartet und getestet werden.

So lässt sich vor dem finalen Deployment prüfen, ob die gebaute Version weiterhin korrekt funktioniert.

---

#### Git-Status vor dem Abschluss prüfen

```bash
git status
```

Vor Commit oder Push kann damit kontrolliert werden, welche Änderungen aktuell vorhanden sind.

---

#### Änderungen committen

```bash
git add .

git commit -m "<message>"
```

Die fertigen Änderungen werden zur Staging Area hinzugefügt und anschließend in einem Commit gespeichert.

---

#### Branch zu GitHub übertragen

```bash
git push
```

Die lokalen Commits auf `main` werden zum verbundenen Remote Repository übertragen. Für dieses Soloprojekt sind laut Absprache mit dem Trainer keine Pull Requests erforderlich.

### 🔨 BAUEN

Was setzen wir in dieser Stage konkret zusammen?

- [ ] alle Hauptbereiche der App einmal vollständig durchtesten
- [ ] Habit Tracker mit mehreren Habits testen
- [ ] Habit Progress und Activity History testen
- [ ] Daily Planner mit mehreren verschiedenen Tagen testen
- [ ] Diary mit mehreren Einträgen und unterschiedlichen Daten testen
- [ ] Dashboard mit vorhandenen und fehlenden Tagesdaten testen
- [ ] Reload testen und prüfen, ob gespeicherte Daten erhalten bleiben
- [ ] Formulare mit gültigen und ungültigen Eingaben testen
- [ ] Empty States für Bereiche ohne vorhandene Daten prüfen
- [ ] sichtbare Bugs beheben
- [ ] Navigation und Bedienung auf Verständlichkeit prüfen
- [ ] Styling der Hauptbereiche vereinheitlichen
- [ ] Abstände, Größen und wiederkehrende UI-Elemente konsistent gestalten
- [ ] Layout auf kleineren Bildschirmgrößen prüfen
- [ ] Layout auf größeren Bildschirmgrößen prüfen
- [ ] offensichtliche Accessibility-Grundlagen prüfen
- [ ] unnötige Platzhalter und nicht mehr benötigten Test-Code entfernen
- [ ] Browser-Konsole auf Fehler prüfen
- [ ] Produktions-Build erstellen
- [ ] Produktions-Build lokal testen
- [ ] finalen Entwicklungsstand committen und pushen
- [ ] finale Version deployen
- [ ] öffentliche Deployment-URL testen
- [ ] README auf den tatsächlichen Projektstand aktualisieren

### ✅ FERTIG, WENN

Woran erkennen wir konkret, dass diese Stage geschafft ist?

- [ ] Dashboard, Habits, Daily Planner und Diary funktionieren ohne bekannte kritische Fehler.
- [ ] Gespeicherte Daten bleiben nach einem Reload erhalten.
- [ ] Die App funktioniert auch mit leeren bzw. noch nicht vorhandenen Daten.
- [ ] Die wichtigsten Eingaben werden sinnvoll validiert.
- [ ] Die Oberfläche wirkt visuell zusammengehörig.
- [ ] Die App ist auf kleinen und größeren Bildschirmgrößen sinnvoll benutzbar.
- [ ] Die Browser-Konsole zeigt beim normalen Verwenden der App keine unbehandelten Fehler.
- [ ] `npm run build` läuft erfolgreich durch.
- [ ] Der Produktions-Build wurde vor dem Deployment getestet.
- [ ] Der finale Stand wurde direkt auf `main` committet und gepusht.
- [ ] Das öffentliche GitHub Repository enthält den aktuellen Projektstand.
- [ ] Die finale Deployment-Version ist über eine öffentliche URL erreichbar.
- [ ] Die README beschreibt den tatsächlichen Stand von Little Grimoire.
