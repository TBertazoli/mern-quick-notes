import { useState, useEffect } from "react";
import { getNotes } from "../../utilities/notes-service";
import NotesCard from "../../components/NotesCard/NotesCard";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  const populateNotes = async () => {
    const notes = await getNotes();
    setNotes(notes);
  };

  useEffect(() => {
    populateNotes();
  }, []);

  return (
    <>
      <h2>Notes List</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderStyle: "none",
          justifyItems: "center",
        }}
      >
        {notes.map((note, _id) => (
          <NotesCard note={note} key={_id} />
        ))}
      </div>
    </>
  );
}
