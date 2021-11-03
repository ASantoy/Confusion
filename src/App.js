import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Components/Menu';
import { DISHES } from './Shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }


  render() {
    return (
      <div className="App">
        <Navbar dark color = 'primary'>
          <div className = 'container'>
            <NavbarBrand href='/'>Ristorante</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes} />
      </div>
      
    );
  }





}






export default App;
