import React, { useContext } from 'react';
import UserContext from "./UserContext";
const User = ({id,name}) => {
    const { deleteUser } = useContext(UserContext);

    return (
        <>
            <div>
                <h3>{name}</h3>
                <button onClick={()=>deleteUser(id)}>Delete</button>
        </div>
        
        </>
    );
}

export default User;