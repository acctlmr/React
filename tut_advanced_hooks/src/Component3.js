import { useReducer } from 'react';
import { countReducer } from './countReducer';
const initialState = {
    count: 0,
}

const Component3 = () => {
//useReducer() hook is similar to useState() hook, which allows us to create custom state logic and it relies on complex state logic that involves multiple sub-values or when the next state depends on the previous one.
//useReducer() hook returns an array that holds the current state value and a dispatch function to which we can pass an action and we can invoke it later.
    
    const [state, dispatch] = useReducer(countReducer, initialState);

    const handleSubtract = () => {
        dispatch({
            type: "SUBTRACT"
        });
    };

    const handleReset = () => {
        dispatch({
            type: "RESET"
        });
    };

    const handleAdd = () => {
        dispatch({
            type: "ADD"
        });
    };

    return (
        <>
            <section>
                <div>
                    <h1>React Counter App</h1>

                    <h2>{state.count}</h2>

                    <div>
                        <button onClick={handleSubtract}>Subtract</button>
                        <button onClick={handleReset}>Reset</button>
                        <button onClick={handleAdd}>Add</button>
                    </div>
                </div>
        </section>
        
        </>
    );
}

export default Component3;