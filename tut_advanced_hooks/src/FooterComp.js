import React from "react";
const FooterComp = () => {

    console.log("Footer Component rendered...");
    const fStyle = {
        
        border: "2px solid red",
        width: "100%",
        color:"green"
    };

    return (
        <>
            <div>
                <h2 style={fStyle}>Footer Component</h2>
        </div>
        </>
    );
}

export default React.memo(FooterComp);