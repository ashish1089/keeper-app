function Note({ id, title, content, onDelete, onEdit }) {

  const handleDelete = () => {
    onDelete(id);
  }


  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
