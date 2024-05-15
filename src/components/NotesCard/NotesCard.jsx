import { useState } from "react";
import * as notesService from "../../utilities/notes-service";

export default function NotesCard() {
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    setNote(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await notesService.addNotes({ text: note });
      setNote(user);
    } catch {
      setError("Note creation failed - Try again");
    }
    setNote("");
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Note</label>
          <input
            type="text"
            name="text"
            value={note}
            onChange={handleChange}
            required
          />

          <button type="submit">SAVE</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
