import React, { useContext } from 'react';
import User from './User';
import UserContext from "./UserContext";
const UserList = () => {
    
    const { users } = useContext(UserContext);
    return (
        <>
            <div>
                {
                    users.map((user) => {
                        return (
                            <>
                            <div key={user.id}>
                                    <User {...user} />    
                            </div>
                            </>
                       )
                   }) 
                }
        </div>
        </>
    );
}

export default UserList;