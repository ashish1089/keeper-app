import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    })
    event.preventDefault();
  }

  function onEditNote() {
    props.onEdit(note)
    setNote({
      title: note.title,
      content: note.content
    })
  }

  return (
    <div>
      <form action="">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          id=""
          cols="30"
          rows="3"
        ></textarea>

        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
