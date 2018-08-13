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
            { id:uuid(), name:'Abacha', style: 'boil and eat'},
            { id:uuid(), name:'Oha Soup', style: 'buy but dont boil and eat'},
            { id:uuid(), name:'Bread and Tea', style: 'buy and eat'},
            { id:uuid(), name:'Rice and Stew', style: 'buy and eat'}
        ]
    }

    render (){
        const { items } = this.state;
        return (
            <Container>
                <Button
                color ="dark"
                >Add Recipe
                </Button>
            </Container>
        );
    }
}