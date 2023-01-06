import "./styles.css";
import { useState } from "react";
const Event3 = () => {
     /*
       Hooks allow function components to have access to state and other features of React.
       Hooks allow us to "hook" into features of React such as sate and lifecycle methods.

       One of the hooks is useState().
       useState() hook 
       useState() hook allows us to track state in a function component.
       To use the useState() hook we first need to import it in our component.
       useState accepts an initial state and returns two values:
       ->the current state
       -> a function that updates the state
     */

    let [title, setTitle] = useState("React Learning");
   // let title = "React Learning";

    const getData = (e) => {
        //title = e.target.value;
        //console.log(title);
        setTitle(e.target.value);
    }

    return (
        <>
            <div className="App">
                
                <h1>{title}</h1>

                <input onChange={getData} type="text" />
  
        </div>
        </>
    );
}

export default Event3;