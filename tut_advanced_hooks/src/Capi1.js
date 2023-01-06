/*
ContextAPI allows to share specific data from all levels of your application in solving prop-drilling, which makes it possible to pass data from parent to children nested deep down the component tree directly instead of passing it down through a chain of props.
ContextAPI has two components - Provider,Consumer

Steps:
->Create the context , it is recommended to create in a separate file.
-> Provide the context to the components.
-> Use the context.
*/
import React,{ useState, useContext } from 'react';
import { data } from "./data";

const PersonContext = React.createContext();

const Capi1 = () => {
    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    }

    return (
        
        <>
            <PersonContext.Provider value={{people,removePerson}}>
                <h3>ContextAPI/useContext</h3>
                <List/>
            </PersonContext.Provider>
        </>
    );
};

const List = () => {
    const mainData = useContext(PersonContext);
    // console.log(mainData);
    return (
        <>
            {mainData.people.map((person) => {
            return <SinglePerson key={person.id} {...person}/>
        })}
        </>
    );
};


const SinglePerson = ({id,name}) => {
    const {removePerson}=useContext(PersonContext); 
    return (
        <>
            <div>
                <h2>{name}</h2>
                <button onClick={()=>removePerson(id)}>Remove</button>
                
        </div>
        </>
    );
};

export default Capi1;