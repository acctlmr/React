import styles from './Firstcomp.module.css';

const FirstComponent = (props) => {
    
    return (
        <div className={styles.d1}>
            <p className={styles.para1}>First Component</p>
            <h3>{JSON.stringify(props) }</h3>
            
            <h2 className={styles.fcomponent}>Values:{props.values || "Default Values..."}</h2>

            <h2>Quantity:{props.quantity || "Default Quantity..."}</h2>

        </div>
    )
}

/*
FirstComponent.defaultProps = {

    values: "Default Value",
    
    quantity: '001',
};
*/

export default FirstComponent;