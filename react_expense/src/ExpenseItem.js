import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
    
    return (
        <>
            <div className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-items-description">
                    <h2>{props.title}</h2>
                    <div className="expense-item-price">Rs. {props.amount}</div>
                </div>
        </div>
        </>
    )
}

export default ExpenseItem;