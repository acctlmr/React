import { useState } from "react";
const Component1 = () => {
    //let title = 'React JS';

    const [title, setTitle] = useState("React JS");
    //console.log(useState());
    const value = useState()[0];
    const handler = useState()[1];
    console.log(value,handler);


    const handleClick = (e) => {
        //title = 'Javascript';
        setTitle('Javascript');
        console.log(title);
        
    }

    return (
        <>
            <h2>{title}</h2>
        <button type="button" onClick={handleClick}>Change title</button>
        </>
    );
}

export default Component1;