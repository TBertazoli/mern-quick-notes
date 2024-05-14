import * as notesAPI from "./notes-api";

export async function addNotes({ text: note }) {
  return notesAPI.createNotes({ text: note });
}
