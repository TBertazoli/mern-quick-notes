import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Notes from "../Notes/Notes";
import AddNotesPage from "../AddNotesPage/AddNotesPage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />

          <Routes>
            <Route path="/" element={<Notes user={user} />} />
            <Route path="/notes/new" element={<AddNotesPage />} />
            <Route path="/notes/:id" element={<AddNotesPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
