import React from 'react'

export default function DownloadNotesButton({ notes }) {
  const handleDownlad = () => {
    console.log(notes);

    if (notes.length !== 0) {
      const text = notes.map(notes => `Title:${notes.title}\nContent: ${notes.content}\n\n`).join('')
      console.log(text)
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'notes.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    }
  }
  return (
    <button className='download_btn' onClick={handleDownlad}>Download Notes</button>
  )
}
