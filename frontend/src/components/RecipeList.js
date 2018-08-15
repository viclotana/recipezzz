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
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

class RecipeList extends Component {

    componentDidMount(){
        this.props.getItems();
    }
    render (){
        const { items } = this.state;
        return (
            <Container>
                <Button
                color ="dark"
                style={{marginBottom:'2rem'}}
                onClick={() => {
                    const name =prompt('enter item');
                    const style = prompt('enter style');
                    if (name&&style) {
                        this.setState(state => ({
                            items:[...state.items, {id:uuid(), name,style}]
                        }));
                    }
                }}
                >Add Recipe
                </Button>
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
                          onClick={() => {
                              this.setState(state =>({
                                  items:state.items.filter(item => item.id != id)
                              }));
                          }}
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
export default connect(mapStateToProps, { getItems })(RecipeList);