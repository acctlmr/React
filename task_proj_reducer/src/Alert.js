import { useEffect } from "react";
import { FaExclamationCircle, FaTimes } from "react-icons/fa";
const Alert = ({alertContent,alertClass,onCloseAlert}) => {
    
    useEffect(() => {
        const int=setTimeout(() => {
            onCloseAlert();
        }, 3000);
        
        return () => {
            clearTimeout(int);
        };
    });


    return (
        <>
            <div className={`alert ${alertClass}`}>
                <FaExclamationCircle size={16} className="iconx" />
                <span className="msg">{alertContent}</span>
                <div className="closebtn" onClick={onCloseAlert}>
                    <FaTimes size={16} className="iconx"/>

                </div>
        </div>
        </>
    );
}

export default Alert;