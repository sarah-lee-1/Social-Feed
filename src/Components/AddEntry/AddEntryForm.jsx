import React, { useState } from 'react';


const AddEntryForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        }
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }

    return ( 
        <form>
            <label>Name</label>
            <input type='name' value={name} />
            <label>Post</label>
            <input type='paragraph' value={post} />
            <label>Status</label>
            <button type='submit'>Add</button>
            <label>Rank</label>
            <button type='status'>Thumbs Up/Thumbs Down</button>
            {/* <button type='submit'>Thumbs Down</button> */}
        </form>
     );
}
 
export default AddEntryForm;