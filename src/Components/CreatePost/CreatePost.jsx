import React, { useState } from 'react';
import './CreateForm.css'; 

const CreatePost = (props) => {

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
        <form onSubmit={handleSubmit} className='form-grid'> 
            <div className='form-group'>
            <label>Post</label>
            <input type='name' className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'> 
            <label>Name</label>
            <input type='paragraph' className='form-control' value={post} onChange={(event) => setName(event.target.value)} />
            </div>
            <label>Status</label>
            <button type='submit' className='btn btn-primary' >Add</button>
        </form>
     );
}
 
export default CreatePost;