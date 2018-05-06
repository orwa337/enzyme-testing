import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './component/ProductList'

class App extends Component {
  state = {
    products: [
      {id: 1 , name: 'AirMax 90', brand: 'Nike'},
      {id: 2 , name: 'SuperSpeed 15', brand: 'Adidas'},
      {id: 3 , name: 'Classic', brand: 'Rebook'}      
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>blaaaaaaaaaaaaaa</code> and save to reload.
        </p>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default App;
