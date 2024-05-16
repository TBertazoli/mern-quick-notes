export default function NotesCard({ note }) {
  const date = new Date(note.createdAt).toLocaleString();

  return (
    <div
      className="card"
      style={{
        backgroundColor: "rgb(250,250,210)",
        height: "30vh",
        width: "30vw",
        margin: "1rem",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{note.text}</h5>
        <p className="card-text">{date}</p>
      </div>
    </div>
  );
}
