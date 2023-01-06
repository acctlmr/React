const UserInput = () => {
    const displayMessage = (e) => {
        console.log(e.target.value);
    }
    return (
        <>
            <input onInput={displayMessage} style={{
                height: 26,
                width: 200,
                borderRadius: 10,
                border: "1px solid green",
                padding: "0 5px",
                margin:"auto"
            } } />
        
        </>
    )
}

export default UserInput;