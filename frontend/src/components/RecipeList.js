import React, { Component } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } 
from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class RecipeList extends Component {

    componentDidMount(){
        this.props.getItems();
    }
    render (){
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                  <TransitionGroup className="recipe-list">
                  {items.map(({ id, name, style }) =>(
                      <CSSTransition key={id} timeout={500}
                      classNames="fade">
                        <ListGroupItem>
                        <Button
                         className="remove-btn"
                          color="danger"
                          size="sm"
                          onClick={this.onDeleteClick.bind(this, id)}
                           >&times; </Button>
                        {name}</ListGroupItem>
                      </CSSTransition>
                  ))}
                  </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
RecipeList.PropTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});
export default connect(mapStateToProps, { getItems, deleteItem }
)(RecipeList); 