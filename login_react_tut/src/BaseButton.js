const BaseButton = ({children,onClick,color}) => {
    return (
        <>
            <button onClick={onClick} style={{
                height: 55,
                borderRadius: 10,
                backgroundColor: color ?? 'rgba(0, 255, 0, 0.9)',
                width: '100%',
                border: "1px solid #eeeeee",
                cursor: "pointer",
                alignSelf:"center"
            }}>
                <p style={{
                    fontSize: 18,
                    color:"white"
                }}>{children}</p>
        </button>
        </>
    )
}

export default BaseButton;