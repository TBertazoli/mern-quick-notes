import sendRequest from "./send-request";
const BASE_URL = "/api/notes";

export async function createNotes({ text: note }) {
  console.log("notes-api");
  return sendRequest(BASE_URL, "POST", { text: note });
}

export async function getAllNotes() {
  return sendRequest(BASE_URL);
}
