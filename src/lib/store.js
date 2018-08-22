import {createStore, combineReducers} from 'redux';
import categoryReducer from '../reducers/categoryReducer.js';
import expenseReducer from '../reducers/expenseReducer.js';

const rootReducer = combineReducers({
    expenseReducer,
    categoryReducer
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
