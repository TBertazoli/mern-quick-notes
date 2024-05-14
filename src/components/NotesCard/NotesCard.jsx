import { useState } from "react";

export default function NotesCard() {
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    setNote(e.target.value);
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setNote(...note, [e.target.value]);
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
