import { useState } from "react";

function Main() {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    
    const [eusername, seteUserName] = useState('');
    const [epassword, setePassword] = useState('');
    const [eemail, seteEmail] = useState('');
    const [ecpassword, setecPassword] = useState('');

    const [ucolor, setuColor] = useState('');
    const [ecolor, seteColor] = useState('');
    const [pcolor, setpColor] = useState('');
    const [cpcolor,setcpColor] = useState('');
    
    
    function validate() {
        
        if (username.length > 8) {
            seteUserName('');
            setuColor('green');
        } else {
            seteUserName('Username must be 8 letters long');
            setuColor('red');
        }

        if (email.includes('@gmail.com'))
        {
            seteEmail('');
            seteColor('green');
        }
        else {
            seteColor('red');
            seteEmail('Email should have gmail address');
        }

        if (password.length > 8 && password.includes('.') && password.includes('$') && password.includes('#') && password.includes('!') && password.includes('*')) {
            setePassword('');
            setpColor('green');
        } else {
            setePassword('Password should have 8 letters long and it should have .$#!* symbols.');
            setpColor('red');
        }

        if (password !== '' && password === cpassword) {
            setecPassword('');
            setcpColor('green');
        } else {
            setecPassword('Passwords are not matching correctly,PLease try again!!!');
            setcpColor('red');
        }
    }


    return (
        <>
            <div>
                <div className="row justify-content-center mt-5 ">
                    <div className="col-md-5 shadow-lg p-3 mb-5 bg-secondary text-white rounded">
                        <h1>Form Validation</h1>

                        <input type="text" className="form-control-sm" placeholder="UserName" value={username} onChange={(e) => { setUserName(e.target.value) }} style={{borderColor:ucolor}} />
                        <p>{eusername}</p>
                       
                        
                        
                        <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} style={{borderColor:ecolor}} className="form-control-sm" />
                        <p>{eemail}</p>
                        
                       

                        <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} style={{borderColor:pcolor}} className="form-control-sm"  />
                        <p>{epassword}</p>
                       
                        

                        <input type="password" placeholder="Confirm Password" value={cpassword} onChange={(e) => { setcPassword(e.target.value) }} style={{borderColor:cpcolor}} className="form-control-sm" />
                        <p>{ecpassword}</p>
                        
                        

                        <button className="btn btn-success" onClick={validate}>Submit</button>
                    </div>
                </div>
        </div>
        </>
    );
}

export default Main;