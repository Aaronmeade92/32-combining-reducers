import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CategoryUpdate from '../category-update/CategoryUpdate.js';
import {createCategory, updateCategory, destroyCategory} from '../../../reducers/categoryReducer';
import ExpenseCreateForm from '../../expense-components/expense-form/ExpenseCreateForm.js';
import ExpenseContainer from '../../expense-components/expense-container/ExpenseContainer.js';

class CategoryItem extends Component {

    state = {
        editing: false,
        addExpense: false,
    }

    showEditForm = () => {
        this.setState({ editing: true })
    }

    deleteCategory = () => {
        this.setState({
            editing: false
        });
        this.props.onRemove(this.props.category);
        console.log('deleted', this.props.category);
    }

    onCancel = () => {
        this.setState({
            editing: false
        })
    }

    expenseCancel = () => {
        this.setState({
            addExpense: false,
        })

    }

    showExpenseForm = () => {
        this.setState({
            addExpense: true
        })
    }

    render(){
        return(
            <div>
                <span onDoubleClick={this.showEditForm}>Category:{this.props.category.name}</span><br/>
                <span>Budget:{this.props.category.budget}</span><br/>
                <button onClick={this.deleteCategory}>X</button>
                {this.state.editing && <CategoryUpdate onComplete={this.props.onComplete} onUpdate={this.props.onUpdate} category={this.props.category} onCancel={this.onCancel} />}\
                <button onClick={this.showExpenseForm}>Add Expense</button>
                
                {this.state.addExpense && <ExpenseContainer expenseCancel={this.expenseCancel} />}
            </div>
        );
    }
}

CategoryItem.propTypes = {
    onComplete: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    category: PropTypes.object,
}

const mapStateToProps = (state) => ({categories: state});

const mapDispatchToProps = (dispatch) => ({
    createCategory: category => dispatch(createCategory(category)),
    updateCategory: category => dispatch(updateCategory(category)),
    destroyCategory: category => dispatch(destroyCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);