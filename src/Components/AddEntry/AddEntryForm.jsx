import React, { useState } from 'react';


const AddEntryForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    return ( 
        <form>
            <label>Name</label>
            <input type='name' value={name} />
            <label>Post</label>
            <input type='paragraph' value={post} />
            <label>Status</label>
            <button type='Thumbs Up' />
            <button type='Thumbs Down' />
        </form>
     );
}
 
export default AddEntryForm;