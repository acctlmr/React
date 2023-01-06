import "./styles.css";
import { useState } from "react";


const Event6 = () => {
    const [persInfo, setPersInfo] = useState({
        firstName: '',
        lastName: '',
        mobile: ''
    });
    const [data, setData] = useState("");

    /*
    const inputChangeHandler = (e) => {
        setPersInfo({ ...persInfo, [e.target.name]: e.target.value });
    }*/

    const inputChangeHandler = (e) => {
        setPersInfo((prevData) => {
            
            return {...prevData,[e.target.name]:e.target.value};
        });
    }

    const showData = (e) => {
        e.preventDefault();
        setData(persInfo.firstName + " " + persInfo.lastName + " " + persInfo.mobile);
    }


    return (
        <>
        <div className="App">
                <div>
                    <h1>Single Event Handler Using Dynamic Key</h1>
        <form onSubmit={showData}>
        <input type="text" placeholder="First Name" name="firstName" onChange={inputChangeHandler} />
        <br />
        <input type="text" placeholder="Last Name" name="lastName" onChange={inputChangeHandler} />
        <br />
        <input type="text" placeholder="Mobile" name="mobile" onChange={inputChangeHandler} />
        <br />
        <input type="submit" value="Submit"/>
        </form>
                    {data}
                    <br/>
                    {JSON.stringify(persInfo)}
        </div>

    </div>
        </>
    );
}

export default Event6;