import { useRef,useEffect } from 'react';
const Component1 = () => {    
    //useRef() hook allows us to get the DOM element reference.
    const refContainer = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
        // refContainer.current.focus();
    }
    useEffect(() => {
        refContainer.current.focus(); 
    });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} />
                </div>
                <div>
                    <input type="text"  />
                </div>
                <button type="submit">Submit</button>
        </form>
        
        </>
    );
}

export default Component1;