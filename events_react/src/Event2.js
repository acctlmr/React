import "./styles.css";
const Event2 = () => {
    
    const getData = (e) => {
        console.log(e.target.innerHTML);
        console.log(e);
        console.log(e.target.textContent);
    }


    return (
        <>
        <div className="App">
                <div onClick={getData}>
                    <h1>Testing</h1>
                    Get Data
                </div>   
        </div>
        </>
    );
}

export default Event2;