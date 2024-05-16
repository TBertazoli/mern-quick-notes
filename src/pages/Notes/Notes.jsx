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
    <div>
      <h1 className="mt-5">All my Notes</h1>
      {notes.map((note, _id) => (
        <NotesCard note={note} key={_id} />
      ))}
    </div>
  );
}
