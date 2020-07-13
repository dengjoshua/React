import React, { Component } from 'react';
import './App.css'
import UserForm from './components/UserForm';
import Footer from './components/Footer'

class App extends Component {
  state = { }
  render() { 
    return ( 
      <div className="App">
       <UserForm />
       <Footer />
    </div>
    )

  }

} 
export default App;

