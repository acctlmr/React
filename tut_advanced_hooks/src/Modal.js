import { useEffect } from 'react';
const Modal = ({ modalContent, closeModal }) => {
    
    useEffect(() => {
        // console.log("UseEffect called...");
        setTimeout(() => {
            closeModal();
        }, 3000);
        
    });
    return (
        <>
        
            <div className="modal">
                <p>{modalContent}</p>
           </div>
            
            
            </>
    )
}

export default Modal;