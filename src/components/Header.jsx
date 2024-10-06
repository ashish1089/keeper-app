import DownloadNotesButton from "./DownloadNotesButton";
function Header({ notes }) {
  return (
    <header>
      <h1>Keeper</h1>
      <DownloadNotesButton notes ={notes} />
    </header>
  );
}

export default Header;
