
import { add, multiply, divide, subtract } from './calculate_basic';
const BasicCal = () => {
    
    return (
        <div>

            <ul>
                <li>{add(20, 10)}</li>
                <li>{multiply(3, 2)}</li>
                <li>{subtract(12, 10)}</li>
                <li>{divide(22,2) }</li>
            </ul>

        </div>
    )
}

export default BasicCal;