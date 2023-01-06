import { useState } from 'react';
import Button from './Button';
import Title from './Title';
import UserInput from './UserInput';
const LoginScreen = () => {
    
    const [username, setUsername] = useState('Rakesh');

    const [showError, setShowError] = useState(false);

    return (
        <div>
            <Title>
            {username}
            </Title>
            <Button label="Change name" onPress={() => { setUsername('Suresh') }}></Button>
            <Button label="Random name" onPress={() => { alert("First Button Clicked") }}></Button>
            <Button label="New Button" onPress={() => { alert("Second Button Clicked") }}></Button>
            
            <input value={username} onInput={(e) => {
                setUsername(e.target.value);
                if (e.target.value === '') {
                    
                    setShowError(true);
                } else {
                    setShowError(false);
                }
            }} />
            <br />
            <br />
            <UserInput/>

            {showError && (<p>There is an error</p>)}

        </div>
    );
}


export default LoginScreen;