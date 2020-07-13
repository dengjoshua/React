import React, { Component } from 'react';
import './App.css'
import Product from './components/Product'
import Home  from './components/Home'
import Success from './components/Success';

class App extends Component {
    state = {
      step:1,
      title: 'Speakers',
      size: '16px, 20px',
      sound: '22Hz',
      price:'UGx 2,030,000',
      weight:'220 kgs',
      number: '15'       
}
handleDetials = () =>{
  const { step } = this.state;
  this.setState({
    step: step + 1
  })
}


prevStep = () =>{
  const { step } = this.state;
  this.setState({
    step: step - 1
  })
}

  render() {
 const { step } = this.state;
    switch(step) {
     case 1:
     return (
      <Home 
      handleDetials={this.handleDetials}
      />
    )
    case 2:
    return (
      <Product 
      prevStep={this.prevStep}
      handleDetials={this.handleDetials}
      />
)
case 3:
    return (
      <Success  />
)


}  
}
}


export default App;

