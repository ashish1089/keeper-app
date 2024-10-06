import { useState } from "react";
import "./styles/App.css";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      localStorage.setItem('notes', JSON.stringify(notes))
      return [...prevNotes, newNote]
    })

  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="footer-parent">
      <Header notes={notes} />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItems, index) => {
        return <Note
          key={index}
          id={index}
          title={noteItems.title}
          content={noteItems.content}
          onDelete={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
