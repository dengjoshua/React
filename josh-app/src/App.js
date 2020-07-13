import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component {
  state = { 
    counters: [
      { id: 1, value:1 },
      { id: 2, value:2 },
      { id: 3, value:0 },
      { id: 4, value:0 },
      { id: 5, value:0 }
    ]
};

handleIncrement = counter => {
const counters = [...this.state.counters];
const  index = counters.indexOf(counter);
counters[index].value++;
counters[index] = {...counter}
this.setState({counters});

}

handleDecrement = counter =>{
  const counters = [...this.state.counters];
  const  index = counters.indexOf(counter);
  counters[index].value--;
  counters[index] = {...counter}
  this.setState( {counters} );
  
  }

handleReset = () =>{
const counters = this.state.counters.map(e =>{
   e.value = 0;
   return e;
})
this.setState({counters})
}  
handleDelete = counterId => {
const counters = this.state.counters.filter(e => e.id !== counterId);
this.setState({ counters })

}

  render() { 
    return ( 
      <React.Fragment>
      <NavBar 
      totalCounters={this.state.counters.filter( e => e.value > 0).length}
      />
        <main className="container">
        <Counters
        counters={this.state.counters} 
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onReset={this.handleReset}
        onDecrement={this.handleDecrement}        
        />
        </main> 
        </React.Fragment>
     );
  }
}
 
export default App;
