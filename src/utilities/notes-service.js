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

export async function getNote(id) {
  return notesAPI.getOne(id);
}

export async function editNotes(id, { text: note }) {
  return notesAPI.editOne(id, { text: note });
}
