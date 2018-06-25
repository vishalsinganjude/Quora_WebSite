import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Badge from 'react-bootstrap/lib/Badge'
import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'
import AppActions from '../actions/AppActions'
import Tabs from 'react-bootstrap/lib/Tabs'
import Tab from 'react-bootstrap/lib/Tab'
import Notification from './Notification/Overlay'

export default class MyNavBar extends React.Component {

  constructor(){
    super();
    this.getUserButton = this.getUserButton.bind(this);
  }
  handleUserClick = () => {
    AppActions.showLoginPopup();
  };

  handleSignUpClick = () => {
    AppActions.showSignUpPopup();
  };

  handleOnAddQclick = () => {
    AppActions.showAddQPopup();
  };

  getUserButton=() => {
    let user = this.props.user;
    if(Object.keys(user).length === 0){
          return <Nav>
            <NavItem eventKey={1} href="#">
             <Button bsStyle="primary"  onClick={this.handleUserClick}>Login</Button>               
              </NavItem>
              <NavItem eventKey={1} href="#">
              <Button bsStyle="primary"  onClick={this.handleSignUpClick}>Sign Up</Button>
              </NavItem>
              </Nav>
    }

    return <NavItem eventKey={4} href="#">{user.firstName}</NavItem>
  };

  render() {
    return (
      <div>
        <Navbar >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Quora</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                <span class="glyphicon glyphicon-home"></span>&nbsp;&nbsp;
                Home
              </NavItem>
              <NavItem eventKey={2} href="#">
                <span class="glyphicon glyphicon-pencil"></span>&nbsp;&nbsp;
                Answer
              </NavItem>
              <NavItem eventKey={2} href="#">
                {/* <Notification/> */}
                <span class="glyphicon glyphicon-bell"></span>&nbsp;&nbsp; 
                Notification
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <FormControl type="text" placeholder="Search anything"/>
              </NavItem>
              {
                this.getUserButton()
              }
              <NavItem eventKey={2} href="#">
                <Button bsStyle="warning"  onClick={this.handleOnAddQclick}>Add Question</Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          
        </Navbar>


      </div>
    )
  }
}