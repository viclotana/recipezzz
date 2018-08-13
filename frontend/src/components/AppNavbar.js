import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
      isOpen: false
    }

    toggle = () => {
      this.setState({
          isOpen:!this.state.isOpen
      });
    }

    render(){
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
               <Container>
                   <NavbarBrand href="/">Recipessss</NavbarBrand>
                   <NavbarToggler onClick={this.toggle}/>
                   
               </Container>
            </Navbar>
        </div>
    }
}



export default AppNavbar;