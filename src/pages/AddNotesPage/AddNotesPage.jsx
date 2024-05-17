import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as notesService from "../../utilities/notes-service";
import { set } from "mongoose";

export default function AddNotesPage() {
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  function handleChange(e) {
    setNote(e.target.value);
  }
  useEffect(() => {
    async function getNote() {
      const note = await notesService.getNote(id);
      setNote(note.text);
    }
    if (id) getNote();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (id) {
        const editedNote = await notesService.editNotes(id, { text: note });
        setNote(editedNote);

        navigate("/");
        return;
      } else {
        const user = await notesService.addNotes({ text: note });

        setNote(user);
        navigate("/");
      }
    } catch {
      setError("Note creation failed - Try again");
    }
    setNote("");
  }
  return (
    <div className="container mt-5">
      <h3>Add New Note</h3>
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
    </div>
  );
}
