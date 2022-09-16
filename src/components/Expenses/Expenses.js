import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ expenses }) => {
    return (
        <div className='expenses'>
            {expenses.map(({ title, amount, date, id }) => {
                return (
                    <ExpenseItem
                        key={id}
                        title={title}
                        date={date}
                        amount={amount}
                    />
                );
            })}
        </div>
    );
};

export default Expenses;
