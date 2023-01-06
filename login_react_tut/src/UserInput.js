const UserInput = ({value,onInput,type="text"}) => {
    

    return (
        <>
            <input value={value} onInput={onInput} type={type} style={{
                height: 45,
                borderRadius: 10,
                backgroundColor:'lightgrey',
                width: '95%',
                border: '1px solid #eeeeee',
                padding:"0 10px",
        }}></input>
        </>
    )

}

export default UserInput;