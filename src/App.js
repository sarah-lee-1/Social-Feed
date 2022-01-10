import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';
import './App.css';

function App() {

  const [entries, setEntries] = useState([{Index: '', name: 'Buddy the Elf', post: 'Merry Christmas', status: 'Thumbs Up'}, {index: '', name: 'Scrooge', post: 'Bah Humbug', status: 'Thumbs Down'}])

  function addNewEntry(entry) {

    let tempEntries = [entry, ...entries,];
    
    setEntries(tempEntries);
  }

  return (
    <div>
      <CreatePost addNewEntryProperty={addNewEntry}/>
      <DisplayPosts parentEntries={entries}/>
     
    </div>
  );
}

export default App;
