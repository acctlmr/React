function EventList({events,handleClick}) {
    
    return (
        <>
        <div>
                {events.map((event) => {
                    return (
                    <div key={event.id}>
                            <h2>{event.id}-{event.title}</h2>
                            <button onClick={()=>handleClick(event.id)}>Delete Event</button>
                     </div>
                 )
             })}   
        </div>
        </>
    )
}

export default EventList;