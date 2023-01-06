import { useEffect,useState } from 'react';

const Component1 = () => {
    
    const [count1, setCount] = useState(0);
    const [count2,setCount2] = useState(0);
 
    // useEffect(() => {
    //     console.log(`Use Effect Triggered everytime`); 
    // });
  
    /*
    useEffect(() => {
        console.log(`Use Effect Triggered once ${count1}`);
    }, [count1]);
    
    */
    
    useEffect(() => {
        console.log(`Use Effect Triggered once ${count1}`);
    }, [count1, count2]);
    

    return (
        <>
    
            <div>
                <h1>Use Effect Example</h1>
                <h2>{count1}</h2>
                <button onClick={() => setCount(count1 + 1)}>Increment 1</button>
                <h2>{count2}</h2>
                <button onClick={()=>setCount2(count2+1)}>Increment 2</button>
            </div>
    
        </>
    );
}

export default Component1;