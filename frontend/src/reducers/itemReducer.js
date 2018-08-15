import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM,DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id:uuid(), name:'Abacha', style: 'boil and eat'},
        { id:uuid(), name:'Oha Soup', style: 'buy but dont boil and eat'},
        { id:uuid(), name:'Bread and Tea', style: 'buy and eat'},
        { id:uuid(), name:'Rice and Stew', style: 'buy and eat'}
    ]
}