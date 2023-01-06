import { useState } from 'react';
const Counter = () => {
    const [value, setValue] = useState(0);

    const reset=() => {
        setValue(0);
    }

    const complexIncrease = () => {
        setTimeout(() => {
           // setValue(value+1);
            setValue((prevValue) => {
                return prevValue + 5;
            });
        },5000)
    }
    return (
        <>
            <section>
                <h2>Regular Counter</h2>
                <h1>{value}</h1>

                <button onClick={() => setValue(() => value + 1)}>Increase</button>
                
                <button onClick={reset}>Reset</button>

                 <button onClick={() => setValue(() => value - 1)}>Decrease</button>


            </section>

            <section>
                <h2>Complex Counter</h2>
                <h1>{value}</h1>
                <button onClick={complexIncrease}>Increase Later</button>
            </section>
        
        </>
    )
}

export default Counter;