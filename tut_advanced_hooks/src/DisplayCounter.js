import React from 'react';
const DisplayCounter = ({counter}) => {
    console.log("Display Counter Component rendered...");
    return (
        <>
        
            <h2>Counter:{counter}</h2>
        </>
    );
}

export default React.memo(DisplayCounter);