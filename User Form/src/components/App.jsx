import React, { Component } from 'react';
import Header from './Header'
import Body from './body'
import Footer from './Footer'


class App extends Component {
  state = {  }
  render() { 
    return (
      <div className="container"> 
        <Header />
        <Body name="Josh"/>
        <Footer />
      </div>
     );
  }
}
 
export default App;





