import sendRequest from "./send-request";
const BASE_URL = "/api/notes";

export async function createNotes({ text: note }) {
  console.log("notes-api");
  return sendRequest(BASE_URL, "POST", { text: note });
}

export async function getAllNotes() {
  return sendRequest(BASE_URL);
}

export async function deleteOne(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}

export async function getOne(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function editOne(id, { text: note }) {
  return sendRequest(`${BASE_URL}/${id}`, "PUT", { text: note });
}
