import styles from './User.module.css';
const Button = ({ children }) => {
    
    return (
        <>
            <button className={styles.btn}>{children}</button>
        </>
    )
}

export default Button;