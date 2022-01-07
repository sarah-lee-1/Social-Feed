import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {

  const [entries, setEntries] = useState([{Index: '', name: 'Buddy the Elf', post: 'Merry Christmas', status: 'Thumbs Up'}, {index: '', name: 'Scrooge', post: 'Bah Humbug', status: 'Thumbs Down'}])

  function addNewEntry(entry) {

    let tempEntries = [...entries, entry];
    
    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayPosts parentEntries={entries}/>
      <CreatePost addNewEntryProperty={addNewEntry}/>
    </div>
  );
}

export default App;
