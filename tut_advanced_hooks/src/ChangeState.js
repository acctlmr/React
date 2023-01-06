import React from 'react';

const ChangeState = ({ caption, click }) => {
    console.log("Change State rendered...");
    const btnStyle = {
        height: "50px",
        width: "150px",
        margin:"5px"
    };
    return (
        <>
            <div>
                <button style={btnStyle} onClick={click} >{caption}</button>
        </div>
        </>
    );
}

export default React.memo(ChangeState);