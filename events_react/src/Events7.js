import { useState } from 'react';
import "./styles.css";

const Events7 = () => {

    const [persInfo, setPersInfo] = useState({
        firstName: '',
        lastName: true,
        mobile: ''
    });

    const [data, setData] = useState('');

    const inputChangeHandler = (e) => {
        setPersInfo((prevState) => {
            return {...prevState,[e.target.name]:e.target.value}
        })
    }

    const inputCheckHandler = (e) => {
        setPersInfo((prevState) => {
            return {...prevState,[e.target.name]:e.target.checked}
        })
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
                        <input type="text" placeholder="FirstName" name="firstName" onChange={inputChangeHandler} />
                        <br />
                        <input type="checkbox" placeholder="LastName" name="lastName" onChange={inputCheckHandler} />
                        <br />
                        <input type="text" placeholder="Mobile" name="mobile" onChange={inputChangeHandler} />
                        <br />
                        <input type="submit" value="Submit"/>
                    </form>
                    {data}
                    <br />
                    {JSON.stringify(persInfo)}
                </div>
                
        </div>
        </>
    );
}


export default Events7;