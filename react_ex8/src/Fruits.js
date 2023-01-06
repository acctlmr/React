import styles from './Fruits.module.css';
import Button from './Button';
const Fruits = ({ itemName, itemPrice }) => {
    
    return (
        
        <div>
            <div className={styles.fruits}>
                <h1 className={styles.fruitName}>ItemName:{itemName}</h1>
                <h2 className={styles.fruitPrice}>ItemPrice:{itemPrice}</h2>
                 <Button>Click Here</Button>

            </div>
        </div>
    )
}

export default Fruits;