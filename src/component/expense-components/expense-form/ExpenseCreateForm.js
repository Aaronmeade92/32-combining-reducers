import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExpenseCreateForm extends Component {
    constructor(props){
        super(props);
        this.state = this.props.category
    }
    addExpense = event => {
        event.preventDefault();
        console.log(this.state.category.name)
    }
    onChange = event => {
        const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [event.target.name]: val
        })
    };
    render(){
        return(
            <form onSubmit={this.addExpense} onChange={this.onChange}>
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

const mapDispatchToProps = (dispatch) => ({
    createCategory: category => dispatch(createCategory(category)),
    updateCategory: category => dispatch(updateCategory(category)),
    destroyCategory: category => dispatch(destroyCategory(category)),
});

export default connect(mapDispatchToProps)(ExpenseCreateForm);