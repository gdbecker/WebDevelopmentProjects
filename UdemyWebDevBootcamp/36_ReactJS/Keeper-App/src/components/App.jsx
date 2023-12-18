import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(newNote) {
    setNotes((previousValue) => {
      return [...previousValue, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={addNote} />
      {notes.map((n, index) => (
        <Note
          key={index}
          id={index}
          title={n.title}
          content={n.content}
          onChecked={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
