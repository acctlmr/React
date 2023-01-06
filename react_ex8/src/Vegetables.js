import styles from './Veg.module.css';
import Button from './Button';
const Vegetables = (props) => {
    
    return (
        
        <div className={styles.veg}>
            <div>
            <h1 className={styles.vegName}>Item Name: {props.itemName}</h1>
                <h2 className={styles.vegPrice}>Item Price: Rs.{props.itemPrice}</h2>
                <Button>Click Here</Button>
            </div>
    </div>
        
    )
}

export default Vegetables;