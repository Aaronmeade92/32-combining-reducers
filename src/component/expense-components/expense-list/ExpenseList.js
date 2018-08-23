import React, { Component } from 'react';
import ExpenseItem from '../expense-item/ExpenseItem.js';

const ExpenseList = props => {

    return(
        <ul>
            {props.expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} onComplete={props.onComplete} onRemove={props.onRemove} onUpdate={props.onUpdate}/>)}
        </ul>
    )
}

export default ExpenseList