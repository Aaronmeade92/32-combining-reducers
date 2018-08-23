import uuid from 'uuid/v1';
import defaultState from './defaultState.js';

export const EXPENSE_CREATE = 'Category/EXPENSE_CREATE';
export const EXPENSE_DESTROY = 'Category/EXPENSE_DESTROY';
export const EXPENSE_UPDATE = 'Expense/EXPENSE_UPDATE';

export default (state=defaultState, action) => {

    let {type, payload} = action;

    switch(type) {

        case 'EXPENSE_CREATE': return {
            ...state,
            expenses: [...state, payload],
        }
        case 'EXPENSE_UPDATE': {
            console.log(action, 'this is my action')
            return state.map(expense => expense.id === payload.id ? payload : expense)
        }
        case 'EXPENSE_DESTROY': return state.filter(expense => expense.id !== payload.id)

        default: return state;
    }
}

export const createExpense = category => {
    category.id = uuid();
    return {
        type: 'EXPENSE_CREATE',
        payload: category,
    }
}

export const updateExpense = category => {
    return {
        type: 'EXPENSE_UPDATE',
        payload: category,
    }
}

export const destroyExpense = category => {
    return {
        type: 'EXPENSE_DESTROY',
        payload: category,
    }
}
