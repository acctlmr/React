import { useState } from 'react';
import BaseButton from "./BaseButton";
import Label from "./Label";
import SizedBox from "./SizedBox";
import Title from "./Title";
import UserInput from "./UserInput";
import ErrorMessage from "./ErrorMessage";

const LoginScreen = () => {
    
    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const [hasError, setHasError] = useState(false);

    const [errMsg, setErrMsg] = useState('');



    const inputToUsername = (e) => {
        setUsername(e.target.value);
    }

    const inputToPassword = (e) => {
        setPassword(e.target.value);
    }

    const loginTheUser = () => {
        setHasError(false);

        if (username === '') {
            setHasError(true);
            setErrMsg('Please input a user name');
            return;
        }
        if (username.length < 3) {
            setHasError(true);
            setErrMsg('Username must be more than 3 characters');
            return;
        }
        if (password === '') {
            setHasError(true);
            setErrMsg('Please input a password');
            return;
        }
        if (password.length < 6) {
            setHasError(true);
            setErrMsg('Password must be at least more than 6 characters');
            return;
        }
    }

    return (
        <>
            <div style={{
                padding: "10px 30px",
                borderRadius: 10,
                width: 400,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Title value="Log In" /> 
                <SizedBox height={20}/>
                <BaseButton>Sign In with google</BaseButton>
                <SizedBox height={20}/>

                <div style={{
                    height: 2,
                    width: '100%',
                    backgroundColor: '#eeeeee'
                }}>
                </div>
                <SizedBox height={20}/>

                <div>
                    <Label value="Username"></Label>
                    <SizedBox height={10}/>
                    <UserInput value={username} onInput={inputToUsername} />
                </div>

                <SizedBox height={20}/>
                <div>
                    <Label value="Password"></Label>
                    <SizedBox height={10}/>
                    <UserInput value={password} type="password" onInput={inputToPassword} />
                </div>

                <SizedBox height={20}></SizedBox>
                {hasError && <ErrorMessage error={errMsg} />}  
                <SizedBox height={20}></SizedBox>
                <BaseButton onClick={loginTheUser} color="#0285FF">Log In</BaseButton>
                
        </div>
        </>
    );
}

export default LoginScreen;