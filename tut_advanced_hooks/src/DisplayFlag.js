import React from "react";
const DisplayFlag = ({ flag }) => {
    console.log("Display Flag Component rendered...");  
    return (
        <>
        <h2>Flag:{flag.toString()}</h2>
        
        </>
    );
}

export default React.memo(DisplayFlag);