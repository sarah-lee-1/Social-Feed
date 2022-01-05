
const DisplayEntries = (props) => {
    return ( 
        <table>
        <thead>
         <tr>
           <th>Post#</th>
           <th>Name:</th>
           <th>Post:</th>
           <th>Status:</th>
           </tr> 
        </thead>
        <tbody>
          {props.parentEntries.map((entry, index) =>{
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.post}</td>
                <td>{entry.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;