import { useState } from 'react';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Cleanup from "./Component3";
import ShowXY from './ShowXY';
function App() {
   const [showData,changeState]=useState(true);
  /*
   useEffect is a hook in react which runs on every render.

   We can use useeffect by passing no dependency

   //No dependency
   useEffect(()=>{
   //runs on every render
   });

   We can use useEffect by passing an empty array,if we use empty array instead od rendering every time it will render initally means at least once.

   //empty array 

   useEffect(()=>{
   //runs only on first render
   },[]);

   We can use useEffect by passing state values or props, which means these are the dependencies , it renders on the first inital page loads and it renders based on any dependency value changes.

   useEffect(()=>{
   //runs on the first render and any dependency value changes it renders based on these dependencies
   },[state,props])


   useEffect accepts 2 arguments, the first argument is a function, second argument is optional.
   useEffect(<function>,<dependency>)
   useEffect allows us to perform side effects in our components,some examples like fetching data, directly updating dom, timers etc.


   useEffect CLeanUp function

   The useEffect use the clean up function to prevent memory leaks and removes some unnecessary and unwanted behaviors.

   So how to use clean up function..

   useEffect(()=>{
   //some code here

   return ()=>{
    //clean up code
   }
   },[state])


   useEffect clean up function does not only run when our component wansts to unmount,it also runs before the execution of the next scheduled effect.
   In fact after our effect executes, then next scheduled effect is usually based on the dependency.
  */
  

  return (
    <div className="App">
     {showData? <ShowXY/>:<h1>No Data</h1>}
      
      <button onClick={()=>changeState(!showData)}>Toggle</button>
      {/* <Component1/> */}

      {/* <Component2/> */}

      
      {/* <Cleanup/> */}
    </div>
  );
}

export default App;
