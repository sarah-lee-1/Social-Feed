const handleRsvpButton = (event) => {
    event.preventDefault(); 
    const [state, setState] = useState(false);

    function rsvp() {
        setState(!state);
    }
    
    return ( 
        <button onClick={rsvp} className={'toggle--button '+ 
        (state ? 'toggle--Like': 'toggle--Unlike')}>
            {state ? 'YES' :'RSVP'}
        </button>
    );
}
