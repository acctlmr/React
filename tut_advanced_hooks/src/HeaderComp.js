import React from "react";
const HeaderComp = () => {
    console.log("Header Component rendered...");    
    const hStyle = {
        border: "2px solid dodgerblue",
        width: "100%",
        color:"green"
};

    return (
        <>
            <div>
                <h2 style={hStyle}>Header Section</h2>
        </div>
        </>
    );
}

export default React.memo(HeaderComp);