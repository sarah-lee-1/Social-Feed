
const DisplayPosts = (props) => {
    return ( 
        <table>
        <thead>
         <tr>
           <th>Post#</th>
           <th>Name:</th>
           <th>Post:</th>
           <th></th>
           </tr> 
        </thead>
        <tbody>
          {props.parentEntries.map((entry, index) =>{
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.post}</td>
                <td><LikeButton /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayPosts;