import { useState } from 'react';
import { data } from "./data";
const Component5 = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id); 
        });
    }
    return (
        <>
            <section>
                <h1>Prop Drilling</h1>
                <List people={people} removePerson={removePerson} />

            </section>
        </>
    );
};

const List = ({people,removePerson}) => {
    return (
        <>
            <div>
                {people.map((person) => {
                    return (
                        <SinglePerson key={person.id} {...person} removePerson={removePerson} />
                    )
                })}
        </div>
        </>
    );
};

const SinglePerson = ({id,name,removePerson}) => {
    
    return (
        <>
            <div>
                <h2>{name}</h2>
                <button onClick={()=>{removePerson(id)}}>Remove</button>
        </div>
        </>
    );
}


export default Component5;