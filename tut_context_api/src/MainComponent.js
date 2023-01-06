import React, { useState } from "react";
import { data } from "./data";
import UserContext from "./UserContext";
import UserList from "./UserList";
const MainComponent = () => {
    const [users, setUsers] = useState(data);
    const deleteUser = (id) => {
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
    };



    return (
        <>
            <UserContext.Provider value={{ users, deleteUser }}>
                <div>
                    
                    <div>
                        <UserList/>
                    </div>
            </div>        

                
        </UserContext.Provider>
        
        </>
    );
}

export default MainComponent;