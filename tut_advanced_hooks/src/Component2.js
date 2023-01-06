import { useState } from "react";
import { useCallback } from "react";
import ChangeState from "./ChangeState";
import DisplayCounter from "./DisplayCounter";
import DisplayFlag from "./DisplayFlag";
import FooterComp from "./FooterComp";
import HeaderComp from "./HeaderComp";
const Component2 = () => {
    //React.memo() and useCallBack(), these hooks are used to improve the memorization performance so that components are not rendered unnecessarily.
    //All the components are getting rendered unnecessarily , we can stop by using React.memo(), but when we have same component , in this example we are using button as a same component 2 times, so still it is getting rendered after using react.memo(), so if we want to stop along with React.memeo(), we neeed to use useCallback() hook, so according to useCallback() hook, first parameter will take a function, and second parameter will take dependency.
    //By using React.memo and useCallback() hook we make sure that the components are not rendered unnecessarily.

    //What is memorization? Memorization is used for optimizing the performance by storing the results of expensive functions and returning the cached results.
    const [cnt, setCount] = useState(0);
    const [mFlag, setFlag] = useState(true);
    const ChangeCounter =
        useCallback(() => {
            setCount(cnt + 1);
        },[cnt])
           
    const changeFlag = useCallback(() => {
        setFlag(!mFlag);
    }, [mFlag]);

    return (
        <>
            <HeaderComp />
            <DisplayCounter counter={cnt} />
            <DisplayFlag flag={mFlag} />
            <ChangeState caption="Change Counter" click={ChangeCounter} />
            <ChangeState caption="Change Flag" click={changeFlag} />
   
            <FooterComp/>
        </>
    );
}


export default Component2;