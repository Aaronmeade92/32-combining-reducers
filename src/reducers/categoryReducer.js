import defaultState from './defaultState.js';
import uuid from 'uuid/v1';

//action type
export const CATEGORY_CREATE = 'Category/CATEGORY_CREATE';
export const CATEGORY_DESTROY = 'Category/CATEGORY_DESTROY';
export const CATEGORY_UPDATE = 'Category/CATEGORY_UPDATE';

//reducer
export default (state=defaultState, action) => {

    let {type, payload} = action;

    switch(type) {

        case CATEGORY_CREATE:
        payload.id = uuid(); 
        return{ 
            ...state,
            categories: [...state, payload],
        }

        case CATEGORY_UPDATE: {
            console.log(action, 'this is my action')
            return state.map(category => category.id === payload.id ? payload : category)
        }

        case CATEGORY_DESTROY: return state.filter(category => category.id !== payload.id)
        default: return state;
    }
}

//action creators

export const createCategory = category => {
    category.id = uuid();
    return {
        type: CATEGORY_CREATE,
        payload: category,
    }
}

export const updateCategory = category => {
    return {
        type: CATEGORY_UPDATE,
        payload: category,
    }
}

export const destroyCategory = category => {
    return {
        type: CATEGORY_DESTROY,
        payload: category,
    }
}
