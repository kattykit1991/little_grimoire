import { useEffect, useState } from "react";

function Diary() {
  // merkt sich was userblerps gerade ins Diary tippt
  const [title, setTitle] = useState("");
  // ISO liefert UTC; vor dem T steht das Datum fürs date-Input (kann lokal um Mitternacht abweichen)
  const [date, setDate] = useState(
    () => new Date().toISOString().split("T")[0],
  );
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  // guckt beim Start ob schon Diary-Blerps im localStorage wohnen
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("diaryEntries");
    // JSON.parse macht aus gespeichertem Text wieder das Entries-Array; ohne Speicher []
    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  // wenn sich die Entries ändern -> ab in den localStorage damit
  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  function addEntry(event) {
    // hält den Browser vom Formular-Reload ab, damit wir per State speichern können
    event.preventDefault();

    // console.log("SUBMIT", { title, date, imageUrl, content });

    // stoppt, sobald ein Feld leer/falsy ist; reine Leerzeichen werden hier nicht extra geprüft
    if (!title || !date || !imageUrl || !content) return;

    // bündelt Formulardaten und eine eindeutige ID zu einem Diary-Datensatz
    const newEntry = {
      id: crypto.randomUUID(),
      title,
      date,
      imageUrl,
      content,
    };

    // Reihenfolge ist zuletzt erstellt zuerst – keine Sortierung nach dem gewählten Datum
    // neuer Entry kommt vorne rein -> neuestes Zeug zuerst
    setEntries((currentEntries) => [newEntry, ...currentEntries]);

    // SESAM LEERE DICH
    setTitle("");
    setDate(new Date().toISOString().split("T")[0]);
    setImageUrl("");
    setContent("");
  }

  return (
    <div className="page-layout diary-layout">
      <h1>Diary</h1>

      {/* hier werden neue Diary-Blerps zusammengebaut */}
      <form className="card grimoire-card diary-form" onSubmit={addEntry}>
        {/* alle Felder sind controlled: value kommt aus State, onChange schreibt zurück */}
        <input
          className="input input-bordered w-full"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
        />

        <input
          className="input input-bordered w-full"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <input
          className="input input-bordered w-full"
          type="url"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          placeholder="Image URL"
        />

        <textarea
          className="textarea textarea-bordered w-full diary-content-input"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Dear Grimoire..."
        />

        <button className="btn btn-primary" type="submit">Add Entry</button>
      </form>

      {/* nimmt jeden gespeicherten Diary-Blerps und baut daraus eine kleine Karte */}
      <div className="diary-grid">
        {entries.map((entry) => (
          <article className="card grimoire-card diary-entry" key={entry.id}>
            <img className="diary-image" src={entry.imageUrl} alt="" />

            <p className="entry-date">{entry.date}</p>
            <h2>{entry.title}</h2>
            <p className="entry-content">{entry.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Diary;
