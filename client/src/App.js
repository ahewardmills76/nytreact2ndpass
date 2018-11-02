import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
       <Header />
       <Search />
      
     </div>
    )
  }
}

export default App;
