import React,{Component, Fragment} from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {createCategory, updateCategory, destroyCategory} from '../../../reducers/categoryReducer.js';

class CategoryCreateForm extends Component {

    constructor(props) {
        super(props);
        this.defaultState = {
            name: '',
            budget: 0,
            expenses: '',
        };
        const initialState = this.props.category || this.defaultState;

        this.state =  {...initialState};
    }


    onSubmit = e => {
        e.preventDefault();
        this.props.onComplete(this.state);
    };

    onChange = event => {
        const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const changedBit = {
            [event.target.name]: val
        };
        this.setState(changedBit);
    };

    render(){
        return(
            <React.Fragment>
            <form onSubmit={this.onSubmit} onChange={this.onChange}>
                <input name='name' placeholder='title' value={this.state.name} /><br/>
                <label>
                    <span></span>
                    <input name='budget' type='number' placeholder='0'/>
                </label>
                <button >Create Category</button>
            </form>
            </React.Fragment>
        )
    }
}

CategoryCreateForm.propTypes = {
    onComplete: PropTypes.func.isRequired,
    category: PropTypes.object,    
}

CategoryCreateForm.defaultProps = {
    category: {
        name: '',
    }
}

const mapDispatchToProps = (dispatch) => ({
    addCategory: category => dispatch(addCategory(category)),
    updateCategory: category => dispatch(updateCategory(category)),
    destroyCategory: category => dispatch(destroyCategory(category)),
});

export default connect(null, mapDispatchToProps)(CategoryCreateForm);