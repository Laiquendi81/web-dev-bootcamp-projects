import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(year: 2022, month: 3, day: 3);
    
    return (

        <div>
            <div className="expense-item"/>
                <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description"/>
                <h2>Car Insurance</h2>
            <div className="expense-item__price">£294.93</div>
        </div>
       
       
    );
}

export default ExpenseItem;