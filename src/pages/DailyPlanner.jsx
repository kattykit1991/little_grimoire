import { useEffect, useState } from "react";

function DailyPlanner() {
  // merkt sich den Entwurf fürs nächste Todo; noch nicht Teil der gespeicherten Liste
  const [todoText, setTodoText] = useState("");
  // holt den Focus beim Mounten aus dem Speicher; ohne gespeicherten Text bleibt er leer
  const [focus, setFocus] = useState(
    () => localStorage.getItem("plannerFocus") || "",
  );

  // holt die Todo-Liste als JSON-Text und macht wieder ein Array draus, sonst []
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("plannerTodos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // merkt sich Little Notes, mit gespeichertem Text als Startwert
  const [notes, setNotes] = useState(
    () => localStorage.getItem("plannerNotes") || "",
  );

  // nach Mount und bei Focus-Änderung: Text direkt in den Speicher
  useEffect(() => {
    localStorage.setItem("plannerFocus", focus);
  }, [focus]);

  // bei Änderung der Liste: Array als JSON-Text speichern
  useEffect(() => {
    localStorage.setItem("plannerTodos", JSON.stringify(todos));
  }, [todos]);

  // bei Notes-Änderung: Notiztext speichern; diese Keys sind noch nicht nach Datum getrennt
  useEffect(() => {
    localStorage.setItem("plannerNotes", notes);
  }, [notes]);

  function addTodo(event) {
    // React übernimmt Submit, also kein normaler Formular-Reload
    event.preventDefault();

    // leere Eingaben und reine Leerzeichen kommen nicht in die Todo-Blerps
    if (!todoText.trim()) return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: todoText,
      completed: false,
    };

    // neues Array aus bisheriger Liste plus Todo; danach Eingabe leeren
    setTodos((currentTodos) => [...currentTodos, newTodo]);
    setTodoText("");
  }
  return (
    <div className="page-layout planner-layout">
      <h1>Daily Planner</h1>

      <section className="card grimoire-card">
        <h2>Today's Focus</h2>
        {/* controlled: State liefert den sichtbaren Text, onChange merkt sich die Eingabe; genauso bei Todos und Notes */}
        <input
          className="input input-bordered w-full"
          type="text"
          value={focus}
          onChange={(event) => setFocus(event.target.value)}
          placeholder="What matters most today?"
        />
      </section>

      <section className="card grimoire-card">
        <h2>Todos</h2>

        <form className="todo-form" onSubmit={addTodo}>
          <input
          className="input input-bordered w-full"
            type="text"
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
            placeholder="Add a todo"
          />
          <button className="btn btn-primary" type="submit">Add</button>
        </form>

        {/* map baut aus jedem Todo eine Textzeile; die ID bleibt der stabile React-key */}
        {todos.map((todo) => (
          <p className="todo-item" key={todo.id}>{todo.text}</p>
        ))}
      </section>

      <section className="card grimoire-card">
        <h2>Little Notes</h2>
        <textarea
          className="textarea textarea-bordered w-full notes-input"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Tiny thoughts, reminders, brainblerps..."
        />
      </section>
    </div>
  );
}

export default DailyPlanner;
