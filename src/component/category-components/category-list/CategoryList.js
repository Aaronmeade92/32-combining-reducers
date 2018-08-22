import React, { Component } from 'react';
import CategoryItem from '../category-item/CategoryItem.js';
import PropTypes from 'prop-types';
import CategoryCreateForm from '../category-form/CategoryCreateForm.js';
import {createCategory, updateCategory, destroyCategory} from '../../reducers/index';

const CategoryList = props => {

    return(
    <ul>
    {props.categories.map(category => <CategoryItem key={category.id} category={category} onComplete={props.onComplete} onRemove={props.onRemove} onUpdate={props.onUpdate}/>)}
    </ul>
    )

}

export default CategoryList;