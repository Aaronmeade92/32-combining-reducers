import React, { Component, Fragment } from 'react';
import updateCategory from '../../../reducers/categoryReducer';
import { connect } from 'react-redux';



class CategoryUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.category;
    }

    updateCategory = (event) => {
        event.preventDefault();
        this.props.onUpdate(this.state);
    }

    onChange = event => {
        const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [event.target.name]: val
        })
    };

    render() {
        return(
            <form onSubmit={this.updateCategory} onChange={this.onChange}>
                <h3>Edit Form</h3>
                <input name='name' placeholder='title'/><br/>
                <label>
                    <input name='budget' type='number' placeholder='0'/>
                </label><br/>
                <button >Edit Category</button>
                <button onClick={this.props.onCancel} >Cancel</button>
            </form>
        )
    };
}

const mapDispatchToProps = (dispatch) => ({
    addCategory: category => dispatch(addCategory(category)),
    updateCategory: category => dispatch(updateCategory(category)),
    destroyCategory: category => dispatch(destroyCategory(category)),
});

export default connect(null, mapDispatchToProps)(CategoryUpdate);
