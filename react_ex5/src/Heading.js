const Heading = () => {    
    return (
        <div>
            <h1 style={MyColor}>My Favorite Images</h1>
        </div>
    )
}

const MyColor = {
    backgroundColor: "dodgerblue",
    color: "white",
    width: "450px",
    textAlign: "center",
    margin:"auto",
};

export default Heading;