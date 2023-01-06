import styles from './Veg.module.css';
const Button = (props) => {
    
    return (
        <div>
            <button className={styles.btn}>{props.children}</button>
        </div>
    )
}

export default Button;