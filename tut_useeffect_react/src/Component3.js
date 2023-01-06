import { useEffect,useState } from "react";
const Component3 = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log('UseEffect');
        window.addEventListener('resize', checkSize);

        return () => {
            window.removeEventListener('resize', checkSize);
        }
    },[]);


    return (
        <>
            <h1>InnerWidth</h1>
            <h2>{size}</h2>
        </>
    );
}

export default Component3;