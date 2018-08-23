import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseCreateForm extends Component {
    constructor(props){
        super(props);
        this.defaultState = {
            name: '',
            expenses: '',
        };
        const initialState = this.props.expenses || this.defaultState
        this.state = {...initialState}
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onFinish(this.state);
    };

    onChange = event => {
        const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [event.target.name]: val
        })
    };
    render(){
        return(
            <form onSubmit={this.onSubmit} onChange={this.onChange}>
                <h3>Expense</h3>
                Item:<input name='name' placeholder='title'/><br/>
                <label>
                    Price:<input name='budget' type='number' placeholder='0'/>
                </label><br/>
                <button >Add Expense</button>
                <button onClick={this.props.expenseCancel} >Cancel</button>
            </form>
        )
    }
}

ExpenseCreateForm.propTypes = {
    onFinish: PropTypes.func.isRequired,
    expense: PropTypes.object,    
}

ExpenseCreateForm.defaultProps = {
    expense: {
        name: '',
    }
}

const mapDispatchToProps = (dispatch) => ({
    createExpense: expense => dispatch(createExpense(expense)),
    updateExpense: expense => dispatch(updateExpense(expense)),
    destroyExpense: expense => dispatch(destroyExpense(expense)),
});

export default connect(mapDispatchToProps)(ExpenseCreateForm);