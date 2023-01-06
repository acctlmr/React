import { useState } from 'react';
import EventList from './EventList';
import Modal from './Modal';
import "./styles.css";
import Title from './Title';
function ProductEvents() {
    const [showEvents, setShowEvents] = useState(false);
    const [events, setEvents] = useState([
        { title: "Rahul's Birthday", id: 1 },
        { title: "Independence Day", id: 2 },
        { title: "Republic Day", id: 3 },
        { title: "Children's Day", id: 4 }
    
    ]);
    const [showModal,setShowModal]=useState(true)

    const subtitle = "Conditional Rendering with Events";

    const handleClose = () => {
        setShowModal(false);
    }

    const handleClick = (id) => {
        setEvents(prevEvents => {
            return prevEvents.filter(event=>id!==event.id)
        })
    }

    return (
        <>
            <div className="App">
                <Title title="Events Example" subtitle={subtitle}/>
                {showEvents && <div>
                    <button onClick={()=>setShowEvents(false)}>Hide Events</button>

                </div>}  
                {!showEvents &&  <div>
                    <button onClick={()=>setShowEvents(true)}>Show Events</button>
                </div>}
               
                {showEvents && <EventList events={events} handleClick={handleClick} /> }

                {showModal && (<Modal handleClose={handleClose}>
                    <h1>Terms and Conditions</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Vitae et leo duis ut diam quam nulla. Id aliquet lectus proin nibh nisl condimentum. Ut ornare lectus sit amet. Sem et tortor consequat id. Tellus rutrum tellus pellentesque eu tincidunt.
                    </p>
                </Modal>)}

                <div>
                    <button onClick={()=>setShowModal(true)}>Show Modal</button>
                </div>
            </div>
        
        </>
    )
}

export default ProductEvents;