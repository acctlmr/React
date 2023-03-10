import { useState, useReducer } from "react";
import { reducer } from "./reducer";
import Modal from "./Modal";
const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent:'',
};

const Component4 = () => {

    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = { id: new Date().getTime().toString(), name };
            // console.log(newItem);
            dispatch({ type: 'ADD_ITEM', payload: newItem });
            setName('');
        } else {
            dispatch({ type: 'NO_VALUE' });
        }
    }

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    }
    
    return (
        <>
            {state.isModalOpen && (<Modal closeModal={closeModal} modalContent={state.modalContent} />)}
            
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
               
                <button type="submit">Add</button>
            </form>
            
            {state.people.map((person) => {
                return (
                    <div key={person.id}>
                        <h4>{person.name}</h4>
                        <button onClick={() => {
                            dispatch(
                                {type:'REMOVE_ITEM',payload:person.id}
                            )
                        }}>
                            Remove
                        </button>

                    </div>
                )
            })}
        </>
    );
}

export default Component4;