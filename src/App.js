import React, { useState } from 'react';


function App() {

  const [entries, setEntries] = useState([{Index: '', name: 'Buddy the Elf', post: 'Merry Christmas'}, {index: '', name: 'Scrooge', post: 'Bah Humbug'}])

  return (
    <div>
      <table>
        <thead>
         <tr>
           <th>Post#</th>
           <th>Name:</th>
           <th>Post:</th>
           </tr> 
        </thead>
        <tbody>
          {entries.map((entry, index) =>{
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.post}</td>
              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );
}

export default App;
