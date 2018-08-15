import uuid from 'uuid';
import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM
} from '../actions/types';

const initialState = {
    items: [{
            id: uuid(),
            name: 'Abacha Ncha',
            style: 'boil and eat'
        },
        {
            id: uuid(),
            name: 'Oha Soup',
            style: 'buy but dont boil and eat'
        },
        {
            id: uuid(),
            name: 'Bread and Tea',
            style: 'buy and eat'
        },
        {
            id: uuid(),
            name: 'Rice and Stew',
            style: 'buy and eat'
        }
    ]
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}