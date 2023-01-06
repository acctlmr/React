const Button = ({label,onPress}) => {
    
    return (
        <>
            <div onClick={onPress} style={{ 
                borderRadius: 25,
                height: 45,
                width:200,
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FC4EA0',
                cursor: 'pointer',
                padding: "0 6px",
                margin:"10px auto"
        }}>
                <p style={{color:"white"}}>{label}</p>        
        </div>
        </>
    );
}

export default Button;