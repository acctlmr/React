const ErrorMessage = ({error}) => {
    
    return (
        <>
        
            <p style={{
                color: "red",
                fontSize: "14",
                textAlign: "center",
            }}>{error}</p>
        
        </>
    )
}

export default ErrorMessage;