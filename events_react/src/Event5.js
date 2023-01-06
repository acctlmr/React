import "./styles.css";
import { useState } from "react";
const Event5 = () => {

    const [persInfo, setPersInfo] = useState({
        firstName: '',
        lastName: '',
        mobile:''
    });

    const [data, setData] = useState('');
    

    const firstNameChangeHandler = (e) => {
        setPersInfo({...persInfo, firstName: e.target.value });
    }
    const lastNameChangeHandler = (e) => {
        setPersInfo({...persInfo,lastName: e.target.value });
    }
    const mobileChangeHandler = (e) => {
        setPersInfo({...persInfo,mobile: e.target.value });
    }

    const showData = (e) => {
        e.preventDefault();
        setData(persInfo.firstName + " " + persInfo.lastName + " " + persInfo.mobile);
    }

    return (
        <>
    <div className="App">
        <div>
        <form onSubmit={showData}>
        <input type="text" placeholder="First Name" onChange={firstNameChangeHandler} />
        <br />
        <input type="text" placeholder="Last Name" onChange={lastNameChangeHandler} />
        <br />
        <input type="text" placeholder="Mobile" onChange={mobileChangeHandler} />
        <br />
        <input type="submit" value="Submit"/>
        </form>
                    {data}
                    <br/>
                    {JSON.stringify(persInfo)}
        </div>

    </div>
       
      
        </>
    )
}

export default Event5;