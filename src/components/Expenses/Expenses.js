import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    onChangeFilter={filterChangeHandler}
                    filteredYear={filteredYear}
                />
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
            </Card>
        </div>
    );
};

export default Expenses;
