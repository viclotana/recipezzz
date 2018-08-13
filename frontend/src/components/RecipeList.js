import React, { Component } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } 
from 'react-transition-group';
import uuid from 'uuid';

class RecipeList extends Component {
    state = {
        items: [
            { id:uuid(), name:'Abacha', style: 'buboil and eat'},
            { id:uuid(), name:'Oha Soup', style: 'buy, boil and eat'},
            { id:uuid(), name:'Bread and Tea', style: 'buy and eat'},
            { id:uuid(), name:'Rice and Stew', style: 'buy, boil and eat'}
        ]
    }

    render (){
        const { items } = this.state;
    }
}