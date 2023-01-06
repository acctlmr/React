import styles from './heading.module.css';
const Heading = () => {

    return(
        <div>
            <h1 className={styles.heading}>This is heading</h1>
            <p className={styles.mypara}>React Learning Now...</p>

        </div>
    )
}

export default Heading;