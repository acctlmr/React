
import Button from './Button';
import Card from './Card';
const Users = ({name,job}) => {
    
    return (
        <>
            <div>    
                <div>
                    <h1>Name:{name}</h1>
                    <h2>Job:{job}</h2>
                    <Button>Click Here</Button>
                </div>                
        </div>        
        </>        
    )
}
export default Users;