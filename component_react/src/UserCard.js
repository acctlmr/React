
import StyledUserCard from './StyledUserCard';
const UserCard = ({fullName,username,isAdmin=false}) => {
    

    return (
        <>
            <StyledUserCard color={isAdmin?'red':'green'}>
                <h3>{fullName}</h3>
                <p>{username}</p>
              </StyledUserCard>  
       
        
        </>
    )
}

export default UserCard;