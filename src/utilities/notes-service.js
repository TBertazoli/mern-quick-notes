import * as notesAPI from "./notes-api";

export async function addNotes({ text: note }) {
  return notesAPI.createNotes({ text: note });
}

export async function getNotes() {
  return notesAPI.getAllNotes();
}

export async function deleteNotes(id) {
  return notesAPI.deleteOne(id);
}
