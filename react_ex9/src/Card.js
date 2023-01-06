import styles from './User.module.css';
const Card = ({ children }) => {
    return (
        <>
            <div className={styles.card}>
                {children}
        </div>
        </>
    )
}

export default Card;