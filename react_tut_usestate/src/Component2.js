import { useState } from 'react';
import { data } from './data';
const Component2 = () => {
    const [people, setPeople] = useState(data);
    const removeItem = (id) => {
        
        let newPeople = people.filter((person) => id !== person.id);
        setPeople(newPeople);
    }
    return (
        <>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <button onClick={()=>removeItem(id)}>Remove</button>
                        
                    </div>
                );

            })}
            
            <button onClick={()=>setPeople([])}>Clear Items</button>
        </>
    )
}

export default Component2;