import "./styles.css";
function Events1() {
    
    const getData = () => {
        console.log("Function called");
    }

    return (
        <>
        <div className="App">
                <button onClick={() => getData()}>Get Data</button>
                <button onClick={getData}>Get Data</button>
                { /*<button onClick={getData()}>Get Data</button>*/}
        </div>
        </>
    )
}

export default Events1;