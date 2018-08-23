import React, { Fragment } from 'react';
import { createExpense, updateExpense, destroyExpense } from '../../../reducers/expenseReducer.js';
import ExpenseCreateForm from '../expense-form/ExpenseCreateForm.js';
import ExpenseList from '../expense-list/ExpenseList.js';

const ExpenseContainer = (props) => {
    return(
        <Fragment>
            <ExpenseCreateForm onFinish={props.createExpense} expenseCancel={props.expenseCancel}/>
            <ExpenseList expenses={props.expenses} onComplete={props.onComplete} onRemove={props.destroyExpense} onUpdate={props.updateExpense} />
        </Fragment>        
    )
}

const mapStateToProps = (state) => ({expenses: state.expenseReducer.expenses});

const mapDispatchToProps = (dispatch) => ({
    createExpense: category => dispatch(createExpense(category)),
    updateExpense: category => dispatch(updateExpense(category)),
    destroyExpense: category => dispatch(destroyExpense(category)),
});

ExpenseContainer.propTypes = {
    createExpense: PropTypes.func,
    updateExpense: PropTypes.func,
    destroyExpense: PropTypes.func,
    expenses: PropTypes.array,
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);