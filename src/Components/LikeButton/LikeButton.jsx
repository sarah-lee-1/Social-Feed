
import React, { useState } from 'react';
// import likebutton.css


const LikeButton = () => {
    const [state, setState] = useState(false);

    function likeUnlike() {
    
        setState(!state);

    }
    
    return ( 
        <button onClick={likeUnlike} className={'toggle--button '+ (state ? 'toggle--Unlike': 'toggle--Like')}>
            {state ? 'Unlike' :'Like'}
        </button>
    );
}

export default LikeButton 